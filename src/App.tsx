import { useState } from 'react';
import { Lista } from './interface/Lista';
import { MdDelete } from 'react-icons/md';
import { FiEdit } from 'react-icons/fi';

function App() {
  const [item, setItem] = useState('');

  const [lista, setLista] = useState<Lista[]>([]);

  const enviarDados = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setLista([...lista, 
      {
        item: item
      }
    ]);
  };

  return (
    <>
      <form action="" onSubmit={enviarDados}>
        <input type="text" placeholder="nome do item" onChange={(event) => setItem(event.target.value)} />
        <button>Adicionar</button>
      </form>
      {lista && lista.map((it, index) => (
        <div key={index}>
          <h2>{it.item}</h2>
          <FiEdit />
          <MdDelete />
        </div>
      )
      )}
    </>
  );
}

export default App;
