import { TableContainer, Table, Paper, TableRow, TableCell, TableBody } from '@mui/material';
import { Lista } from '../../interface/Lista';
import { MdDelete, MdOutlineVerifiedUser } from 'react-icons/md';
import { FiEdit } from 'react-icons/fi';
import styled from 'styled-components';
import { useState } from 'react';

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
  setLista: React.Dispatch<React.SetStateAction<Lista[]>>,
  setNomeDoItem: React.Dispatch<React.SetStateAction<string>>
}

export default function TableItem({ lista, setLista, setNomeDoItem }: Props) {

  const [edit, setEdit] = useState(false);

  const functionEdit = (itemAEditar: Lista) => {
    // const todosItems = document.querySelectorAll('input[data-value]');

    // if (edit) {
    //   setEdit(!edit);
    //   const inputSelecionado = document.querySelector(`data-value[${itemAEditar.id}]`);
    //   inputSelecionado?.setAttribute('disabled', 'disabled');
    //   console.log('isso');
    // } else {
    //   const inputSelecionado = document.querySelector(`data-value[${itemAEditar.id}]`);
    //   inputSelecionado?.removeAttribute('disabled');
    //   setEdit(!edit);
    //   console.log('aquilo');
    // }
  };

  const functionDelete = (item: Lista) => {
    const listaAtualizada = lista.filter(itemLista => {
      return itemLista.id !== item.id;
    });
    setLista(listaAtualizada);
  };

  return (
    <Form>
      <TableContainer component={Paper} sx={{ marginTop: '2rem' }}>
        <Table sx={{ margin: '0 auto' }} aria-label="simple table">
          {lista.length !== 0 &&
            lista.map((itemLista, index) => (
              <TableBody key={index}>
                <TableRow sx={{ width: '100%' }}>
                  <TableCell sx={{ padding: '0.5rem' }}><input type='text' value={itemLista.item} disabled /></TableCell>
                  <TableCell sx={{ padding: '0.5rem' }}>{edit ? <MdOutlineVerifiedUser size={15} onClick={() => functionEdit(itemLista)} /> : <FiEdit className='edit' size={15} onClick={() => functionEdit(itemLista)} />}</TableCell>
                  <TableCell sx={{ padding: '0.5rem' }}><MdDelete className='delete' size={15} onClick={() => functionDelete(itemLista)} /></TableCell>
                </TableRow>
              </TableBody>
            ))}
        </Table>
      </TableContainer>
    </Form>
  );
}