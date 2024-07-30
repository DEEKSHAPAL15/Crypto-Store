import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const CartItem = ({coin}) => {

  return (
<Grid item xs={12} sm={6} md={4} lg={3}>
<Card>
    <CardMedia sx={{height: 200}} image={coin?.large}/>

    <CardContent>
      <Typography gutterBottom variant='h5' component="div">
        {coin.name}
      </Typography>
      <Typography gutterBottom variant='h6' component="div">
       {coin.symbol}
      </Typography>
    </CardContent>
    <CardActions>
      <Link to={`/coin/${coin.id}`}>
      <Button size='smalll' variant='contained'>View</Button>
      </Link>
    </CardActions>
    </Card>
</Grid>
      
  );
};

export default CartItem;

