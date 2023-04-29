import { useState } from 'react';
import { Lista } from './interface/Lista';
import styled from 'styled-components';
import TableItem from './components/TableItem';
import gerarId from './utilidades/gerarId';

const Container = styled.section`
  min-width: 276px;
  text-align: center;
  border: 1px solid gray;
  border-radius: 2rem;
  padding: 3rem 1rem;
  min-height: 50vh;
  h2{
    font-size: 2rem;
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

  // const listaRecuperada = localStorage.getItem('lista');

  // function adicionarItemNoLocalStorage() {
  //   const listaParaLocalStorage = localStorage.setItem('lista', JSON.stringify(lista));
  // }

  // useEffect(() => {
  //   if (listaRecuperada) {
  //     const listaDeItens = JSON.parse(listaRecuperada);
  //     setLista(listaDeItens);
  //   } else {
  //     setLista([]);
  //   }
  // }, [listaRecuperada]);

  const enviarDados = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nomeRepetido = lista.some(nomeLista => nomeLista.item.toLocaleLowerCase() === nomeDoItem.toLocaleLowerCase());

    if (nomeRepetido) {
      alert('item já adicionado');
    } else {
      if (nomeDoItem !== '') {
        for (let i = 0; i <= lista.length; i++) {
          setLista([...lista, {
            id: gerarId(),
            item: nomeDoItem
          }
          ]);
        }
      } else {
        alert('por favor digite o nome do item');
      }
    }

    setNomeDoItem('');
  };

  return (
    <>
      <Container>
        <Form action="" onSubmit={enviarDados}>
          <input type="text" id='input' placeholder="nome do item" value={nomeDoItem} onChange={(event) => setNomeDoItem(event.target.value)} />
          <button>Adicionar</button>
        </Form>
        {lista.length === 0 ? <h2>Sem itens</h2> : <TableItem lista={lista} setLista={setLista} />}
      </Container >
    </>
  );
}

export default App;
