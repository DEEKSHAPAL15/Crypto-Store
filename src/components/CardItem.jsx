import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { remove } from '../features/cart/cartSlice'
import { Link } from 'react-router-dom'

const CardItem = ({cartItem}) => {
const dispatch = useDispatch();

  const handleRemove = (id) =>{
    dispatch(remove(id));
  };

  return (
    <Grid item xs={12} sm={8}>
        <Card>
    <CardMedia sx={{height: 100}} image={cartItem?.image?.large}/>

    <CardContent>
      <Typography gutterBottom variant='h5' component="div">
       {cartItem.name}
      </Typography>
      <Typography gutterBottom variant='h6' component="div">
      Price : {cartItem?.market_data.current_price.inr}
      </Typography>
    </CardContent>
    <CardActions>
   
      <Button onClick={()=> handleRemove(cartItem.id)}
      size='smalll' variant='contained' 
      color='error'>Remove</Button>
     
    </CardActions>
    </Card>
    </Grid>
  );
};

export default CardItem;


// https://coin-images.coingecko.com/coins/images/30117/large/TurboMark-QL_200.png?1708079597