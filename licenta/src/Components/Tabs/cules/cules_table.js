import React, { useState, useEffect } from 'react';
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
import culegatori_list from './form'

function Row(props) {

  const { row } = props;
  const [open, setOpen] = React.useState(false);
  var total = 0;
  const [data, getData] = useState([])
  const URL = 'http://localhost:8080/api/culegator';

  useEffect(() => {
    fetch(URL)
    .then((res) =>
        res.json())

    .then((response) => {
        getData(response);
    })
  }, [])
  //console.log("DATA: ", data)

  
  const getTable = (item) => {
    if (item.nume === row.nume) 
    {
      return item;
    }else{
      return '';

    }
};

  function getTotal(){
    for (var i = 0; i < data.length; i++) {
      if (data[i].nume === row.nume) 
      { 
      total = parseInt(total) + parseInt(data[i].kilograme);
      console.log('total', total);
      }
    }
  }
  
getTotal();

  
  return (
    <React.Fragment>
          <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
          <TableCell>
            <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
  
          <TableCell component="th" scope="row" >
          {row.nume}
          </TableCell>

          <TableCell component="th" scope="row" >
            {total}
          </TableCell>

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
                    <TableCell align="left"> Cantitate culeasa </TableCell>
                    <TableCell align="left"> Plantatia </TableCell>
                    <TableCell align="left"> Randul </TableCell>

                  </TableRow>
                </TableHead>

                <TableBody>

                {data.map((item, i) => (
                    <tr key={i} >
                      <td>{getTable(item).date}</td>
                      <td align="center">{getTable(item).kilograme }</td>
                      <td align="center">{getTable(item).plantatie}</td>
                      <td align="center">{getTable(item).rand}</td>

                    </tr>
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

export default function Cules() { 


    const [culegatori_list, getCulegatori_list] = useState([])
    const URL_names = 'http://localhost:8080/api/names';
    useEffect(() => {
        fetchData_names()
    }, [])
 
    const fetchData_names = () => {
        fetch(URL_names)
            .then((res) =>
                res.json())
 
            .then((response) => {
                getCulegatori_list(response);
            })
    }
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
                  <TableCell align="left">Total (kg)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>

                  {culegatori_list.map((row,i) => (
                    <Row key={i} row={row} />
                  ))}

              </TableBody>
            </Table>
          </TableContainer>
        </div>
          
      </div>
      
    
  );
}
