import { useState } from 'react';
import { Lista } from './interface/Lista';
import styled from 'styled-components';
import TableItem from './components/TableItem';

const Container = styled.section`
  width: 90%;
  margin: 5rem auto 0 auto;
  text-align: center;
  border: 1px solid gray;
  border-radius: 2rem;
  padding: 4rem 0;
  min-height: 50vh;
  min-width: 276px;
  h2{
    font-size: 2rem;
    margin-top: 3rem;
  }
  button:hover{
    cursor: pointer;
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
`;

function App() {
  const [nomeDoItem, setNomeDoItem] = useState('');

  const [lista, setLista] = useState<Lista[]>([]);

  const enviarDados = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nomeRepetido = lista.some(nomeLista => nomeLista.item.toLocaleLowerCase() === nomeDoItem.toLocaleLowerCase());

    if (nomeRepetido) {
      alert('item já adicionado');
    } else {
      if(nomeDoItem !== ''){
        for (let i = 0; i <= lista.length; i++) {
          setLista([...lista, {
            id: i,
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
        {lista.length === 0 ? <h2>Sem itens</h2> : <TableItem lista={lista} setLista={setLista} setNomeDoItem={setNomeDoItem} />}
      </Container >
    </>
  );
}

export default App;
