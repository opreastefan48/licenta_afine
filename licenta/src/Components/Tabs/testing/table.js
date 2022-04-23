import React, { useState } from 'react';
  
const Test = () => {
  let [Fullname, setFullname] = useState({
    fname: '',
    lname: ''
  })
  
  const handleChange = (event) => {
    let value = event.target.value;
    let name = event.target.name;
    console.log('State: ', Fullname);

    setFullname((prevalue) => {
      return {
        ...prevalue,   // Spread Operator               
        [name]: value
      }
    })
  }
  
  return (
    <>
      <form>
        <div>
          <h1>Hello <span style={{ color: 'red' }}>{Fullname.fname}</span>
            <span style={{ color: 'green' }}>{Fullname.lname}</span></h1>
          <input type='text' placeholder='Enter Your FirstName'
            onChange={handleChange} name='fname' />
          <input type='text' placeholder='Enter Your LastName'
            onChange={handleChange} name='lname' />
        </div>
      </form>
    </>
  )
}
  
export default Test;