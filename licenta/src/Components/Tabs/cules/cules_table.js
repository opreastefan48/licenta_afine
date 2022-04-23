import * as React from 'react';
import PropTypes from 'prop-types';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Box from '@mui/material/Box';
import './cules.css'
import FormCules from './form';



function createData(name,cantitate_totala){
  return{
    name,
    cantitate_totala,
      details: [
        { date: '2020-01-05', cantitate: 3 , plantatia: 2, randul: 22},
        { date: '2020-01-02', cantitate: 1 , plantatia: 1, randul: 12},
      ],
  };
}


function Row(props) {

  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row" >
          {row.name}
        </TableCell>
        <TableCell align="center">{row.cantitate_totala}</TableCell>

      </TableRow>

      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h5" gutterBottom component="div">
                Detalii
              </Typography>
              <Table size="small" aria-label="purchases">

                <TableHead>
                  <TableRow>

                    <TableCell align="left" > Date </TableCell>
                    <TableCell align="center"> Cantitate culeasa </TableCell>
                    <TableCell align="center"> Plantatia </TableCell>
                    <TableCell align="center"> Randul </TableCell>

                  </TableRow>
                </TableHead>

                <TableBody>

                  {row.details.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      
                      <TableCell component="th" scope="row" align="left">
                        {historyRow.date}    
                      </TableCell>

                      <TableCell align="center">
                        {historyRow.cantitate}   
                      </TableCell>

                      <TableCell align="center">
                        {historyRow.plantatia}   
                      </TableCell>

                      <TableCell align="center">
                        {historyRow.randul}   
                      </TableCell>

                    </TableRow>
                  ))}
                </TableBody>

              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    history: PropTypes.arrayOf(
      PropTypes.shape({
        cantitate: PropTypes.number.isRequired,
        plantatia: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        rand: PropTypes.string.isRequired,
      }),
    ).isRequired,
    name: PropTypes.string.isRequired,
    cantitate_totala: PropTypes.number.isRequired,
  }).isRequired,
};


const rows = [
  createData('Nume 1', 12),
  createData('Nume 2', 33),
  createData('Nume 3', 6),
  createData('Nume 4', 59),
  createData('Nume 5', 19),
];


const RanduriPlantatie = [
  {
    value: '1',
    label: 'Randul 1',
  },
  {
    value: '2',
    label: 'Randul 2',
  },{
    value: '3',
    label: 'Randul 3',
  },{
    value: '4',
    label: 'Randul 4',
  },{
    value: '5',
    label: 'Randul 5',
  },
];


const NumarPlantatie = [
  {
    value: '1',
    label: 'Plantatia 1',
  },
  {
    value: '2',
    label: 'Plantatia 2',
  },{
    value: '3',
    label: 'Plantatia 3',
  },
]

  
export default function Cules() {
  return (

      <div> 
        <FormCules></FormCules>
        <div className='center-table'>
          <TableContainer component={Paper} >
            <Table aria-label="collapsible table">
              <TableHead>
                <TableRow>
                  <TableCell />
                  <TableCell>Nume culegator</TableCell>
                  <TableCell align="center">Total (kg)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <Row key={row.name} row={row} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
          
      </div>
      
    
  );
}
