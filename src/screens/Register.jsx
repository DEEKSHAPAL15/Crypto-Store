import { Button, Card, CardContent, Container, TextField, Typography } from '@mui/material'
import React from 'react'

const Register = () => {
  return (
    <Container sx={{padding: "80px 0px"}}>
      <Typography variant='h3' align='center'>Create an Account</Typography>
      <Card>
   <CardContent>
     <form>
       <TextField sx={{margin: "10px 0px"}}
       variant='outlined'
       label="Enter Name"
       type='text'
        name="name"
       fullWidth/>
  
      <TextField sx={{margin: "10px 0px"}}
       variant='outlined'
       label="Enter Eamil"
       type='email'
        name="email"
       fullWidth/>

      <TextField sx={{margin: "10px 0px"}}
       variant='outlined'
       label="Enter Password"
       type='Password'
        name="password"
       fullWidth/>
 
     <TextField sx={{margin: "10px 0px"}}
       variant='outlined'
       label="Confirm Password"
       type='Password'
        name="password2"
       fullWidth/>
       <Button type='submit' variant='contained'color='success'fullWidth>Register</Button>
     </form>
   </CardContent>
   </Card>
    </Container>
   
  )
}

export default Register;