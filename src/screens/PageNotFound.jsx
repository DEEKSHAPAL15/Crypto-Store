import { Button, Container, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {

    const customStyle = {padding: "80px 0px",
         display: "flex", alignItems: "center", justifyContect: "center", flexDirection: "column"} 

  return (
    <Container sx={customStyle}>
    <Typography variant='h5' textAlign={"center"}>
    404 Error Not Found    
    </Typography>
    <img style={{height: "300px"}} src="https://cdn.freebiesupply.com/blog/23-11-2018/404-page-n3.png" 
    alt="" />
    <Link to={"/"}>
    <Button variant='outlined'color='success'>Go Back</Button></Link>  
    </Container>
  )
}

export default PageNotFound
