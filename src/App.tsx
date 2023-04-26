import { useState } from 'react';
import { Lista } from './interface/Lista';
import styled from 'styled-components';
import TableItem from './components/TableItem';

const Container = styled.section`
  width: 50%;
  margin: 5rem auto 0 auto;
  text-align: center;
  border: 1px solid gray;
  border-radius: 2rem;
  padding: 4rem 0;
  min-height: 50vh;
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
  const [item, setItem] = useState('');

  const [lista, setLista] = useState<Lista[]>([]);

  const enviarDados = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    setLista([...lista, {
      item: item
    }
    ]);
  };

  return (
    <>
      <Container>
        <Form action="" onSubmit={enviarDados}>
          <input type="text" placeholder="nome do item" onChange={(event) => setItem(event.target.value)} />
          <button>Adicionar</button>
        </Form>
        {lista.length === 0 ? <h2>Sem itens</h2> : <TableItem lista={lista} />}
      </Container >
    </>
  );
}

export default App;
