import { TableContainer, Table, Paper, TableRow, TableCell, TableBody } from '@mui/material';
import { Lista } from '../../interface/Lista';
import { MdDelete } from 'react-icons/md';
import { FiEdit } from 'react-icons/fi';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import Modal from '../Modal';

const Form = styled.section`
    tr{
      display: flex;
      align-items: center;
      td{
        width: 75%;
      }
    }
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

export default function TableItem({lista, setLista} : Props) {

  const [edit, setEdit] = useState(false);
  const [atualiza, setAtualiza] = useState(false);

  const functionDelete = (item: Lista) => {
    fetch(`http://localhost:8080/item/${item.id}`, {
      method: 'DELETE',
    });

    setAtualiza(true);
  };

  useEffect(() => {
    const url = 'http://localhost:8080/item';

    const listaDeItens = () => {
      fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => response.json())
        .then(json => setLista(json))
        .catch(error => console.log('Authorization failed : ' + error.message));
        
    };

    setAtualiza(false);
    return listaDeItens;

  }, [atualiza]);

  const [itemAEditar, setItemAEditar] = useState('');
  const [idAEditar, setIdAEditar] = useState(0);

  function passarItem (itemLista: Lista){
    setEdit(true);
    setItemAEditar(itemLista.item);
    setIdAEditar(itemLista.id);
  }

  return (
    <>
      <Form>
        <TableContainer component={Paper} sx={{ marginTop: '2rem' }}>
          <Table sx={{ margin: '0 auto' }} aria-label="simple table">
            {lista.length !== 0 &&
              lista.map((itemLista, index) => (
                <TableBody key={index}>
                  <TableRow sx={{ width: '100%' }}>
                    <TableCell sx={{ padding: '0.5rem' }}><span id={`id${itemLista.id}`}>{itemLista.item}</span></TableCell>
                    <tr>
                      <TableCell sx={{ padding: '0.5rem' }}><FiEdit className='edit' size={20} onClick={() => passarItem(itemLista)}/></TableCell>
                      <TableCell sx={{ padding: '0.5rem' }}><MdDelete className='delete' size={20} onClick={() => functionDelete(itemLista)} /></TableCell>
                    </tr>
                    <Modal edit={edit} setEdit={setEdit} itemAEditar={itemAEditar} idItem={idAEditar} setAtualiza={setAtualiza}/>
                  </TableRow>
                </TableBody>
              ))}
          </Table>
        </TableContainer>
      </Form>
    </>
  );
}