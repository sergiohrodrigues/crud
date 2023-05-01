import { TableContainer, Table, Paper, TableRow, TableCell, TableBody } from '@mui/material';
import { Lista } from '../../interface/Lista';
import { MdDelete } from 'react-icons/md';
// MdOutlineVerifiedUser
import { FiEdit } from 'react-icons/fi';
import styled from 'styled-components';
import { useState } from 'react';
// import Modal from '../Modal';

const Form = styled.section`
  @media screen and (min-width: 1024px){
    .edit:hover{
      cursor: pointer;
      color: blue;
    }
    .delete:hover{
      cursor: pointer;
      color: red;
    }
  }
`;

interface Props {
  lista: Lista[],
  setLista: React.Dispatch<React.SetStateAction<Lista[]>>
}

export default function TableItem({ lista, setLista }: Props) {

  const [edit, setEdit] = useState(false);
  const [nomeAtualizado, setNomeAtualizado] = useState<string>('');

  // const todosItens = document.querySelectorAll('input[data-value]');

  // const functionEdit = (itemAEditar: Lista) => {

  //   if (edit) {
  //     setEdit(!edit);
  //     itemAEditar.item = nomeAtualizado;
  //     todosItens[itemAEditar.id].setAttribute('disabled', 'disabled');
  //     setNomeAtualizado('');
  //     alert('Nome do item alterado com sucesso!');
  //   } else {
  //     todosItens[itemAEditar.id]?.removeAttribute('disabled');
  //     todosItens[itemAEditar.id].setAttribute('value', nomeAtualizado);

  //     setEdit(!edit);
  //   }
  //   console.log(lista);
  // };

  const functionDelete = (item: Lista) => {
    const listaAtualizada = lista.filter(itemLista => {
      return itemLista.id !== item.id;
    });
    setLista(listaAtualizada);
  };

  return (
    <>
      <Form>
        <TableContainer component={Paper} sx={{ marginTop: '2rem' }}>
          <Table sx={{ margin: '0 auto' }} aria-label="simple table">
            {lista.length !== 0 &&
              lista.map((itemLista, index) => (
                <TableBody key={index}>
                  <TableRow sx={{ width: '100%' }}>
                    <TableCell sx={{ padding: '0.5rem' }}><input type='text' placeholder={itemLista.item} disabled data-value={`${itemLista.id}`} onChange={(event) => setNomeAtualizado(event.target.value)} /></TableCell>
                    {/* // <TableCell sx={{ padding: '0.5rem' }}><span>{itemLista.item}</span></TableCell> */}
                    {/* <TableCell sx={{ padding: '0.5rem' }}><FiEdit className='edit' size={15} onClick={() => functionEdit(itemLista)} /></TableCell> */}
                    <TableCell sx={{ padding: '0.5rem' }}><FiEdit className='edit' size={15} /></TableCell>
                    <TableCell sx={{ padding: '0.5rem' }}><MdDelete className='delete' size={15} onClick={() => functionDelete(itemLista)} /></TableCell>
                    {/* // <Modal edit={edit} itemDaLista={itemLista}/> */}
                  </TableRow>
                </TableBody>
              ))}
          </Table>
        </TableContainer>
      </Form>
    </>
  );
}