import { ClassNames } from '@emotion/react';
import { useState } from 'react';
import { Lista } from '../../interface/Lista';

interface Props {
  itemDaLista: Lista,
  edit: boolean
}

export default function Modal({ itemDaLista, edit }: Props) {
  const [novoNome, setNovoNome] = useState(itemDaLista.item);

  const salvarItem = () => {
    itemDaLista.item = novoNome;

    alert('Nome salvo com sucesso!');
  };

  return (
    <div style={{
      position: 'fixed',
      top: '0',
      bottom: '0',
      right: '0',
      left: '0',
      backgroundColor: 'rgb(0,0,0, 0.7)',
      zIndex: '1000'
    }}>
      <div style={{
        width: '90%',
        padding: '10rem 0',
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#fff',
        borderRadius: '1rem'
      }}>
        <input placeholder="Digite o nome" value={novoNome} onChange={(event) => setNovoNome(event.target.value)}/> <br />
        <button style={{ marginTop: '1rem' }} onClick={salvarItem}>Salvar</button>
      </div>

    </div >
  );
}