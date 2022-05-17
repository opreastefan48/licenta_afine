import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import { MenuItem } from '@mui/material';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import MuiAlert from '@mui/material/Alert';
import Table from 'react-bootstrap/Table'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import Snackbar from '@mui/material/Snackbar';
import './details.css'
import axios from 'axios';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 5,
};

const randuri = [
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

const plantatii = [
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

const plante = [
  {
    value: '1',
    label: 'Planta 1',
  },
  {
    value: '2',
    label: 'Planta 2',
  },{
    value: '3',
    label: 'Planta 3',
  },
]



export default function Details() {

  const [problems, setProblems] = useState([
    {
      problem:'',
      plantatie:'',
      rand:'',
      planta:''
    }
  ])

  const [Problem, setProblem] = useState(
    {
      problem:'',
      plantatie:'',
      rand:'',
      planta:''
    }
  )
  useEffect(() => {
    getDataFromDb()
  }, [])

  function getDataFromDb(){
    fetch('http://localhost:8080/api/problems' , {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }

    }).then(res => {
      if(res.ok) {
        return res.json()
      }
    }).then(jsonRes => setProblems(jsonRes))
  }

  function handleChange(e) {
    const {name, value} = e.target;
    setProblem(prevInput => {
      return(
        {
          ...prevInput,
          [name]: value
        }
      )
    })
  }

  function addProblem(e) {
    e.preventDefault();
    console.log("Problem added");
    const newProblem = {
      problem: Problem.problem,
      plantatie: Problem.plantatie,
      rand: Problem.rand,
      planta: Problem.planta
    }

    axios.post('http://localhost:8080/api/savepb', newProblem);
    handleClickSnackbarAdd();
    getDataFromDb();
  }

  function DeleteUser(id) {
    axios.delete('http://localhost:8080/api/deletePB/' + id);
    console.log("Problem deleted");
    getDataFromDb();
    handleClose();
    handleClickSnackbarDelete();
  }

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const [openSnackbarAdd, setOpenSnackbarAdd] = React.useState(false);

  const handleClickSnackbarAdd = () => {
    setOpenSnackbarAdd(true);
  };

  const handleCloseSnackbarAdd = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnackbarAdd(false);
  };


  const [openSnackbarDelete, setOpenSnackbarDelete] = React.useState(false);

  const handleClickSnackbarDelete = () => {
    setOpenSnackbarDelete(true);
  };

  const handleCloseSnackbarDelete = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnackbarDelete(false);
  };


  return (

    <div >

      <form className='formtext'>
            <div className='center2'>
            <TextField 
            select
            required
            name='plantatie'
            label="Plantatie"
            value={Problem.plantatie}
            onChange={handleChange}

              >
            {plantatii.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
              ))}
            </TextField>

            <TextField 
            select
            required
            label="Rand"
            name = 'rand'
            value={Problem.rand}
            onChange={handleChange}
              >
            {randuri.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
              ))}
            </TextField>

            <TextField 
            select
            required
            name = 'planta'
            label="Planta"
            value={Problem.planta}
            onChange={handleChange}
              >
            {plante.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
              ))}
            </TextField>

            </div>

            <TextareaAutosize
              onChange={handleChange}
              minRows={4}
              required
              name = 'problem'
              value={Problem.problem}
              placeholder="Scrie problema"
              style={{ width: 350 }}
            />
            <button onClick={addProblem} className='submit_button'> Submit </button>
              <Snackbar open={openSnackbarAdd} autoHideDuration={6000} onClose={handleCloseSnackbarAdd}>
                <Alert onClose={handleCloseSnackbarAdd} severity="success" sx={{ width: '100%' }}>
                  Problema adaugata cu succes!!!
                </Alert>
              </Snackbar>
      </form>
      <div className='center-table'>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Plantatia</th>
              <th>Randul</th>
              <th>Planta</th>
              <th align="center">Problema</th>
              <th>Sterge</th>
            </tr>
          </thead>
          <tbody>

            {problems.map((problem, i) => (
                    <tr key={i} >
                      <td align="center">{problem.plantatie}</td>
                      <td align="center">{problem.rand}</td>
                      <td align="center">{problem.planta}</td>
                      <td align="left">{problem.problem}</td>
                      <td align="center" onClick={handleClickOpen} > 
                        <button type="button" className="btn btn-danger btn-sm">Delete</button> 
                      </td>
                        <Dialog
                            open={open}
                            TransitionComponent={Transition}
                            keepMounted
                            onClose={handleClose}
                            aria-describedby="alert-dialog-slide-description"
                          >
                            <DialogTitle>{"STERGERE?"}</DialogTitle>
                            <DialogContent>
                              <DialogContentText id="alert-dialog-slide-description">
                                Sunteti sigur ca doriti sa stergeti problema??
                              </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                              <Button onClick={handleClose}>NU</Button>
                              <Button onClick={() => DeleteUser(problem._id)}>DA</Button>
                            </DialogActions>
                        </Dialog>
                              <Snackbar open={openSnackbarDelete} autoHideDuration={6000} onClose={handleCloseSnackbarDelete}>
                                <Alert onClose={handleCloseSnackbarDelete} severity="error" sx={{ width: '100%' }}>
                                  Problema stearsa cu succes!
                                </Alert>
                              </Snackbar>
                    </tr>
                    
                ))}

          </tbody>
        </Table>
      </div>
            
    </div>
  );
}
