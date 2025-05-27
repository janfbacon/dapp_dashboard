import { useState } from 'react';
import {
  Table, TableHead, TableRow, TableCell, TableBody,
  TableSortLabel, Paper, Avatar, Box, Typography
} from '@mui/material';
import { tokens, type Token } from '../data/tokens';


function TokenTable() {
  const [orderBy, setOrderBy] = useState<keyof Token>('price');
  const [order, setOrder] = useState<'asc' | 'desc'>('desc');

  const sortedData = [...tokens].sort((a, b) =>
    order === 'asc'
      ? a[orderBy] > b[orderBy] ? 1 : -1
      : a[orderBy] < b[orderBy] ? 1 : -1
  );

  const handleSort = (property: keyof Token) => {
    setOrder(orderBy === property && order === 'asc' ? 'desc' : 'asc');
    setOrderBy(property);
  };

  return (
    <Paper sx={{ overflowX: 'auto', p: 2 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>
              <TableSortLabel
                active={orderBy === 'name'}
                direction={orderBy === 'name' ? order : 'asc'}
                onClick={() => handleSort('name')}
              >
                Coin
              </TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel
                active={orderBy === 'symbol'}
                direction={orderBy === 'symbol' ? order : 'asc'}
                onClick={() => handleSort('symbol')}
              >
                Symbol
              </TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel
                active={orderBy === 'price'}
                direction={orderBy === 'price' ? order : 'asc'}
                onClick={() => handleSort('price')}
              >
                Price (USD)
              </TableSortLabel>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedData.map((token, index) => (
            <TableRow key={token.address}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>
                <Box display="flex" alignItems="center" gap={1}>
                  <Avatar
                    src={`src/assets/icons/${token.symbol.toLowerCase()}.svg`}
                    alt={token.symbol}
                    sx={{ width: 24, height: 24 }}
                  />
                  <Typography>{token.name}</Typography>
                </Box>
              </TableCell>
              <TableCell>{token.symbol}</TableCell>
              <TableCell>${token.price.toFixed(6)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default TokenTable;

