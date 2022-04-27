import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
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
import { Form } from 'react-bootstrap';
import Button from '@mui/material/Button';
import { makeStyles } from '@material-ui/core/styles';
import 'bootstrap/dist/css/bootstrap.min.css';
import './details.css'
import axios from 'axios';


const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

function createData(name){
  return{
    name,
  };
}

function Row(props) {

  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();
  const [holder, setHolder] = React.useState('holder');

  
  const [problem, setProblem] = React.useState('');

  const handleChangeProblem = (event) => {
    setProblem(event.target.value);
  }
  const submit = (event) => {
    event.preventDefault();
    const payload = {
      problema: problem
    };
  
    axios({
      url: 'http://localhost:8080/api/save',
      method: 'POST',
      data: payload
    })
    .then(() =>{
      console.log('Data has been set');
    })
    .catch(()=> {
      console.log('error')
    });;
  }


  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="medium" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row" >
          {row.name}
        </TableCell>


      </TableRow>

      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={4}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom>
                Probleme gasite la o planta de pe rand:
              </Typography>
              <Table>
                <TableBody>

                <form>
                  <div className='form-input'>

                    <textarea
                    placeholder={holder}
                    name="problem"
                    cols="30"
                    rows="10"
                    value={problem}
                    onChange={handleChangeProblem}
                    >

                    </textarea>
                  </div>

                </form>


                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const rows = [
  createData('Randul 1'),
  createData('Randul 2'),
  createData('Randul 3'),
  createData('Randul 4'),
  createData('Randul 5'),
  createData('Randul 6'),
];


  
export default function Details() {
  return (

      <div className='center-table'>
        <TableContainer component={Paper} >
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell> Plantatia 1</TableCell>
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
      
    
  );
}
