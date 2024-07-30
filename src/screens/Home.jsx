
import { Card, Container, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTrendingCoins } from "../features/coins/coinSlice";
import Loading from "../components/Loading";
import CartItem from "../components/CartItem";
import { useNavigate } from "react-router-dom";

const Home = () => {

  const {coins, isLoading} = useSelector(
    (state)=> state.coins
  );

  const { user, message,isError, isSuccess} = useSelector((state)=> state.auth);
  

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getTrendingCoins());

    if(!user){
      navigate("/login")
    }
    if(isError && message){
      window.alert(message);
    }
  },[user, isError,message]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Container sx={{ padding: "80px 0px" }}>
      <Typography variant="h4" textAlign={"center"}>
        Top Trending Coins
      </Typography>

      <Card sx={{ margin: "20px 0px", padding: "20px"}}>
        <Grid container spacing={4}>
          {
            coins.map(coin => (<CartItem key={coin.item.coin_id} coin={coin.item}/>
            ))}
        </Grid>
      </Card>
    </Container>
  );
};

export default Home;
