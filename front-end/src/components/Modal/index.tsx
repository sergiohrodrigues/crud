import { useState } from 'react';
import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';

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
  svg{
    font-size: 1.5rem;
    position: fixed;
    top: 4%;
    right: 5%;
  }
  @media screen and (min-width: 1024px){
    width: 40%;
    input{
      padding: 0.5rem;
      outline: none;
    }
    svg:hover, button:hover{
      cursor: pointer;
    }
  }
`;

interface Props {
  itemAEditar: string,
  idItem: number,
  edit: boolean,
  setEdit: React.Dispatch<React.SetStateAction<boolean>>,
  setAtualiza: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Modal({ itemAEditar, idItem, edit, setEdit, setAtualiza }: Props) {
  const [novoNome, setNovoNome] = useState('');
  
  const editarItem = () => {
    itemAEditar = novoNome;
    console.log(itemAEditar);

    const url = 'http://localhost:8080/item';
  
    fetch(url + `/${idItem}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({item: itemAEditar})
    });

    alert('Nome salvo com sucesso!');
    setEdit(false);
    setAtualiza(true);
  };

  if(edit){
    return (
      <ModalContainer>
        <ModalItem>
          <AiOutlineClose onClick={() => setEdit(false)} /><br/>
          <input placeholder={itemAEditar} onChange={(event) => setNovoNome(event.target.value)}/> <br />
          <button style={{ marginTop: '1rem' }} onClick={editarItem}>Salvar</button>
        </ModalItem>
      </ModalContainer>
    );
  } else {
    return null;
  }

}