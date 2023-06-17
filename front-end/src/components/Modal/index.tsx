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
  itemLista: string,
  edit: boolean,
  setEdit: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Modal({ itemLista, edit, setEdit }: Props) {
  const [novoNome, setNovoNome] = useState(itemLista);

  const salvarItem = () => {
    itemLista = novoNome;
    alert('Nome salvo com sucesso!');
    setEdit(false);
    console.log(itemLista);
  };

  console.log(itemLista);

  if(edit){
    return (
      <ModalContainer>
        <ModalItem>
          <span onClick={() => setEdit(false)}>X</span><br/>
          <input placeholder={itemLista} onChange={(event) => setNovoNome(event.target.value)}/> <br />
          <button style={{ marginTop: '1rem' }} onClick={salvarItem}>Salvarr</button>
        </ModalItem>
      </ModalContainer>
    );
  } else {
    return null;
  }

}