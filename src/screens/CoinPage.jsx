import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Snackbar,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getCoin } from "../features/coins/coinSlice";
import Loading from "../components/Loading";
import { add } from "../features/cart/cartSlice"

const CoinPage = () => {
  const { coin, isLoading, isError, isSuccess } = useSelector(
    (state) => state.coins
  );

  const { id } = useParams();
  const dispatch = useDispatch();


  // Handle add to cart

  const handleAddtoCart = (coin) =>{
    dispatch(add(coin));
    setOpen(true);
  };

  // SanckBar
  const [open, setOpen] = useState(false);

  const handleClose = (event, reason)=>{
    if(reason === "clickaway"){
      return;
    }
    setOpen(false);
  };


  useEffect(() => {
    dispatch(getCoin(id));
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (!coin.name) {
    return (
      <Container sx={{ padding: "80px 0px" }}>
        <Typography variant="h4" textAlign={"center"} color={"error"}>
          Something Went Wrong...
        </Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ padding: "80px 0px" }}>
      <Card>
        <CardMedia sx={{ height: 200 }} image={coin?.image?.large} />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Name : {coin?.name}
          </Typography>
          <Typography gutterBottom variant="body2" component="div">
            Description : {coin?.description.en}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            Symbol : {coin?.symbol}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            Price : {coin?.market_data.current_price.inr} INR
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" color="secondary">
            <a target="_blank" href={coin.links.homepage[0]}>
              Official Website
            </a>
          </Button>
         
            <Button variant="contained" color="success" onClick={()=> handleAddtoCart(coin)}>
              Add To Cart
            </Button>
         
        </CardActions>
      </Card>
      <div>
        <Snackbar open={open}
        autoHideDuration={5000} 
        onClose={handleClose}
        message="Item Added To Cart"  />
      </div>
    </Container>
  );
};

export default CoinPage;


