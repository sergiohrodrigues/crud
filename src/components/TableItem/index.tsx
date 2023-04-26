import { TableContainer, Table, Paper, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { Lista } from '../../interface/Lista';
import { MdDelete } from 'react-icons/md';
import { FiEdit } from 'react-icons/fi';
import styled from 'styled-components';

const Form = styled.section`
  .edit:hover{
    cursor: pointer;
    color: blue;
  }
  .delete:hover{
    cursor: pointer;
    color: red;
  }
`;

interface Props {
  lista: Lista[]
}

export default function TableItem({ lista }: Props) {

  const functionEdit = ({ itemLista, index }: { itemLista: Lista, index: number }) => {
    console.log('editar..');
  };

  const functionDelete = () => {
    console.log('deletei..');
  };

  return (
    <Form>
      <TableContainer component={Paper} sx={{ marginTop: '2rem' }}>
        <Table style={{ width: '100%' }} sx={{ margin: '0 auto' }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Itens</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          {lista.length !== 0 &&
            lista.map((itemLista, index) => (
              <TableBody key={index}>
                <TableRow>
                  <TableCell><input placeholder={itemLista.item} disabled id={`input${index}`} /></TableCell>
                  <TableCell><FiEdit className='edit' size={20} onClick={() => functionEdit({ itemLista, index })} /></TableCell>
                  <TableCell><MdDelete className='delete' size={20} onClick={functionDelete} /></TableCell>
                </TableRow>
              </TableBody>
            ))}
        </Table>
      </TableContainer>
    </Form>
  );
}