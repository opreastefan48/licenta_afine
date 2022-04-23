import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { MenuItem } from '@mui/material';
import axios from 'axios';
import Stack from '@mui/material/Stack';
import { Button } from 'bootstrap';

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

export default function FormCules() {
    const [rand, setRand] = React.useState('');

    const handleChangeRand = (event) => {
        setRand(event.target.value);
        
  };

  const [plantatie, setPlantatie] = React.useState('');

    const handleChangePlantatie = (event) => {
        setPlantatie(event.target.value);
  };

  let [Kilograme, setKilograme] = useState('');
  console.log('Kilograme: ', Kilograme);
  console.log('Plantatie: ', plantatie);
  console.log('Rand: ', rand);

  const submit = (event) => {
    event.preventDefault();
    const payload = {
      KG: Kilograme,
      Plantatie: plantatie,
      Rand: rand
    };
  }

  //   axios({
  //     url: 'http://localhost:8080/api/save',
  //     method: 'POST',
  //     data: payload
  //   })
  //   .then(() =>{
  //     console.log('Data has been set');
  //   })
  //   .catch(()=> {
  //     console.log('error')
  //   });;

  // }

  const handleChangeTest = (event) => {
    setKilograme(event.target.value);
  }

  return (

      <div>
        <form>
          <div className='center1' >
          
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
          >

            <TextField
              required
              id="outlined-number"
              label="Cantitate"
              type="text"
              value={Kilograme}
              onChange={handleChangeTest}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Stack>
        </div>

        <div className='center2'>

          <TextField 
            select
            required
            label="Plantatia"
            value={plantatie}
            onChange={handleChangePlantatie}
            
            style ={{width: '11%'}}
              >
            {plantatii.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
              ))}
          </TextField>

            <div className='spatiu'></div>

            <TextField 
            select
            required
            label="Rand"
            value={rand}
            onChange={handleChangeRand}
            
            style ={{width: '11%'}}
              >
            {randuri.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
              ))}
          </TextField>
        </div>
        <button> Submit </button>

        </form>
      </div>
    );
}