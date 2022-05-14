import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import { MenuItem } from '@mui/material';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import MuiAlert from '@mui/material/Alert';
import Table from 'react-bootstrap/Table'
import './details.css'
import axios from 'axios';



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

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


export default function Details() {

  const [rand, setRand] = React.useState('');

  const [plantatie, setPlantatie] = React.useState('');

  const [problem, setProblem] = React.useState('');

  const [planta, setPlanta] = React.useState('');

  const handleChangeProblem = (event) => {
    setProblem(event.target.value);
  }

  const handleChangeRand = (event) => {
      setRand(event.target.value);
};

  const handleChangePlantatie = (event) => {
      setPlantatie(event.target.value);
};
  const handleChangePlanta = (event) => {
  setPlanta(event.target.value);
};

const submit = (event) => {
  event.preventDefault();
  const payload = {
    problem:problem,
    plantatie: plantatie,
    rand: rand,
    planta:planta,
  };
  setProblem('');
  setPlantatie('');
  setRand('');
  setProblem('');

  axios({
    url: 'http://localhost:8080/api/savepb',
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

console.log('problem: ',problem ,'Plantatia: ',plantatie, ' Rand: ', rand);

const [data, setProblems] = useState([])

useEffect(() => {
  fetch('http://localhost:8080/api/problems')
  .then((res) =>
      res.json())

  .then((response) => {
    setProblems(response);
  })
}, [])
  console.log('DDATA', data)


  function DeleteUser(id){
    var new_list = [...data];
    console.log('newlist:', new_list);
    var index = 0;
    for (var i = 0; i < data.length; i++){
      if(data[i]._id == id){
        index = i;
      }
    }
  
    if (index !== -1) {
      new_list.splice(index, 1);
      setProblems(new_list);
    }
  }

  return (

    <div>

      <form onSubmit={submit}>
            <div className='center2'>
            <TextField 
            select
            required
            label="Plantatia"
            value={plantatie}
            onChange={handleChangePlantatie}

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
            value={rand}
            onChange={handleChangeRand}
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
            label="Planta"
            value={planta}
            onChange={handleChangePlanta}
              >
            {plante.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
              ))}
            </TextField>

            </div>

            <TextareaAutosize
              onChange={handleChangeProblem}
              minRows={4}
              required
              value={problem}
              placeholder="Scrie problema"
              style={{ width: 350 }}
            />
            <button className='submit_button'> Submit </button>

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

            {data.map((item, i) => (
                    <tr key={i} >
                      <td align="center">{data[i].plantatie}</td>
                      <td align="center">{data[i].rand}</td>
                      <td align="center">{data[i].planta}</td>
                      <td align="left">{data[i].problem}</td>
                      <td align="center" onClick={() => DeleteUser(item._id)} > 
                        <button type="button" class="btn btn-danger btn-sm">Delete</button> 
                      </td>
                    </tr>
                ))}

          </tbody>
        </Table>
      </div>


            {/* <Snackbar open={open_snackbar} autoHideDuration={8000} onClose={handleCloseSnackbar}>
                    <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
                      Datele au fost adaugate cu succes!!
                    </Alert>
            </Snackbar> */}
            
    </div>
  );
}
