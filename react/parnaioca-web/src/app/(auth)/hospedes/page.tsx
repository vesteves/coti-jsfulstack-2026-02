'use client';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  hospede: string,
  email: string,
  telefone: string,
  ultimaReserva: string,
  totalReservas: number,
  status: string,
) {
  return { hospede, email, telefone, ultimaReserva, totalReservas, status };
}

const rows = [
  createData(
    'João da Silva',
    'teste@teste.com',
    '1234567890',
    '2026-01-01',
    1,
    'Ativo',
  ),
  createData(
    'Maria da Silva',
    'teste@teste.com',
    '1234567890',
    '2026-01-01',
    1,
    'Ativo',
  ),
  createData(
    'Pedro da Silva',
    'teste@teste.com',
    '1234567890',
    '2026-01-01',
    1,
    'Ativo',
  ),
  createData(
    'Ana da Silva',
    'teste@teste.com',
    '1234567890',
    '2026-01-01',
    1,
    'Inativo',
  ),
  createData(
    'Carlos da Silva',
    'teste@teste.com',
    '1234567890',
    '2026-01-01',
    1,
    'Inativo',
  ),
];

export default function HospedesPage() {
  return (
    <div>
      <h1>Hospedes</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Hóspede</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Telefone</TableCell>
              <TableCell align="right">Última Reserva</TableCell>
              <TableCell align="right">Total de Reservas</TableCell>
              <TableCell align="right">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.hospede}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="right">{row.hospede}</TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.telefone}</TableCell>
                <TableCell align="right">{row.ultimaReserva}</TableCell>
                <TableCell align="right">{row.totalReservas}</TableCell>
                <TableCell align="right">{row.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
