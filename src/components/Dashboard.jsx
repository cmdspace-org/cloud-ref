import React, { useState, useEffect } from 'react'
import axios from 'axios';
//import Form from '@mui/material/Form';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import FormHelperText from '@mui/material/FormHelperText';

const Dashboard = () => {

  const [records, setRecords] = useState([]);
  const [inputs, setInputs] = useState({ name: '', password: '' });

    useEffect(() => {
      fetchRecords();
  }, []);

  const fetchRecords = async () => {
      const result = await axios.get('http://localhost:3001/data');
      // console.log("Result", result);
      setRecords(result.data.data);
  };

  const handleSubmit = async (event) => {
      event.preventDefault();
      await axios.post('http://localhost:3001/data', inputs);
      fetchRecords();
  };

  const handleInputChange = (event) => {
      setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  return (
    <div>
        <h1 className="header"> DASHBOARD PAGE</h1>
        <form onSubmit={handleSubmit}>
        <FormControl>
  <InputLabel htmlFor="input-name">Name</InputLabel>
  <TextField id="input-name" variant="standard" type="text" aria-describedby="my-helper-text1" name="name" value={inputs.name} onChange={handleInputChange} />
  <FormHelperText id="my-helper-text1">Fill your name</FormHelperText>
</FormControl>
<FormControl>
  <InputLabel htmlFor="input-password">Password</InputLabel>
  <TextField id="input-password" variant="standard" type="password" aria-describedby="my-helper-text2" name="password" value={inputs.password} onChange={handleInputChange} />
  <FormHelperText id="my-helper-text2">Fill your password</FormHelperText>
</FormControl>
<Button variant="outlined" color="success">Save</Button>
<Button variant="outlined" color="error">Clear</Button>
</form>
<div>
<ul>
                {records.map((record,i) => (
                    <li key={i}>{record.id} - {record.name} - {record.password}</li>
                ))}
            </ul>
</div>
    </div>

  )
}

export default Dashboard