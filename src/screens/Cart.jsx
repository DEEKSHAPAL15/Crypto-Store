import { Box, Card, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import CardItem from '../components/CardItem'
import { useSelector } from 'react-redux'

const Cart = () => {

  const {cartItems} = useSelector((state)=> state.cart);

  const total = cartItems.reduce(
    (p, c)=> p + c.market_data.current_price.inr,
    0
  );

  if(cartItems.length === 0) {
    return (
      <Container sx={{padding: "80px 0px"}}>
        <Typography variant='h3'>No Item In Your Cart</Typography>
      </Container>
    );
  }

  return (
    <Container sx={{padding : "80px 0px"}} >
    <Typography variant='h5'>Your Cart:</Typography>
   <Box sx={{margin: "40px 0px"}}>
  <Grid container spacing={4}>
  {
    cartItems.map((cartItem) => (
    <CardItem key={cartItem.id} cartItem={cartItem}/>
  ))}
  <Grid item  xm={12} sm={4}>
    <Card sx={{padding:"20px"}}>
        <Typography variant='h5'> Your Total:</Typography>
        <Typography variant='h3'>{total}</Typography>
    </Card>
  </Grid>
  </Grid>
   </Box>
    </Container>
  )
}

export default Cart;
