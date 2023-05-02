import { useState } from 'react';
import styled from 'styled-components';
import { Lista } from '../../interface/Lista';

const ModalContainer = styled.section`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgb(0,0,0, 0.7);
  z-index: 1000;
`;

const ModalItem = styled.div`
  width: 90%;
  padding: 5rem 0;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 1rem;
  span{
    font-size: 1.3rem;
    position: fixed;
    top: 2%;
    right: 5%;
  }
`;

interface Props {
  itemDaLista: Lista,
  edit: boolean,
  setEdit: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Modal({ itemDaLista, edit, setEdit }: Props) {
  const [novoNome, setNovoNome] = useState(itemDaLista.item);

  const salvarItem = () => {
    itemDaLista.item = novoNome;
    alert('Nome salvo com sucesso!');
    setEdit(false);
    console.log(itemDaLista);
  };

  if(edit){
    return (
      <ModalContainer>
        <ModalItem>
          <span onClick={() => setEdit(false)}>X</span><br/>
          <input placeholder="Digite o nome" value={novoNome} onChange={(event) => setNovoNome(event.target.value)}/> <br />
          <button style={{ marginTop: '1rem' }} onClick={salvarItem}>Salvar</button>
        </ModalItem>
      </ModalContainer>
    );
  } else {
    return null;
  }

}