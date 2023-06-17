import { useEffect, useState } from 'react';
import { Lista } from './interface/Lista';
import styled from 'styled-components';
import TableItem from './components/TableItem';
import gerarId from './utilidades/gerarId';

const Container = styled.section`
  background-color: #094074;
  min-width: 276px;
  text-align: center;
  border: 3px solid;
  border-radius: 2rem;
  padding: 3rem 1rem;
  min-height: 50vh;
  h2{
    font-size: 4rem;
    margin-top: 3rem;
  }
  
  @media screen and (min-width: 768px){
    min-height: 40vh;
  }
  `;

const Form = styled.form`
  text-align: center;
  input{
    margin-right: 1rem;
    padding: 0.5rem;
    border-radius: 1rem;
    border: 1px solid gray;
    outline: none;
  }

  @media screen and (min-width: 768px){
    display: flex;
    align-items: center;
    justify-content: center;
    input{
      padding: 1rem;
    }
    button{
      border: none;
      border: 1px solid #000;
      padding: 0.5rem;
      border-radius: 1rem;
    }
    button:hover{
      cursor: pointer;
      border: 1px solid gray;
      background-color: #fff;
    }
  }
`;

function App() {
  const [nomeDoItem, setNomeDoItem] = useState('');

  const [lista, setLista] = useState<Lista[]>([]);
  const [atualiza, setAtualiza] = useState(false);

  useEffect(() => {
    const url = 'http://localhost:8080/item';

    const listaDeItens = () => {
      fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => response.json())
        .then(json => setLista(json))
        .catch(error => console.log('Authorization failed : ' + error.message));
        
    };

    setAtualiza(false);
    return listaDeItens;
  }, [atualiza]);

  const enviarDados = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nomeRepetido = lista.some(nomeLista => nomeLista.item.toLocaleLowerCase() === nomeDoItem.toLocaleLowerCase());

    if (nomeRepetido) {
      alert('item já adicionado');
    } else {
      if (nomeDoItem !== '') {
        fetch('http://localhost:8080/item', {
          method: 'POST',
          body: JSON.stringify({
            item: nomeDoItem
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8'
          }
        });
      } else {
        alert('por favor digite o nome do item');
      }
    }

    setNomeDoItem('');

    setAtualiza(true);
  };


  return (
    <>
      <Container>
        <Form action="" onSubmit={enviarDados}>
          <input type="text" id='input' placeholder="Digite o nome do item" value={nomeDoItem} onChange={(event) => setNomeDoItem(event.target.value)} />
          <button>Adicionar</button>
        </Form>
        {lista.length === 0 ? <h2>Sem <br/> item</h2> : <TableItem lista={lista} setLista={setLista} />}
      </Container >
    </>
  );
}

export default App;
