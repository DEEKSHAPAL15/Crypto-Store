import React from 'react'
import {AppBar, Toolbar ,Typography , Button, Badge} from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LogOutUser } from '../features/auth/authSlice';

const Navbar = () => {

 const { user } = useSelector((state)=> state.auth);
 const {cartItems} = useSelector((state)=> state.cart);

  const dispatch = useDispatch()

  const handleLogOut = () =>{
    dispatch(LogOutUser());
  }

  return (
    <AppBar>
      <Toolbar>
       <Typography sx={{flexGrow: 1}}variant = "h5">
       <Link to={"/"} >Crypto Store</Link></Typography>
        {
          user ? (
          <>
          <Link to={"/cart"}>
          <Badge badgeContent ={cartItems.length} color='error'>
        <Button size='small' variant='contained' color='success'>
        <ShoppingCartIcon/>
        </Button>
        </Badge>
        </Link>
   
        <Button sx={{margin:" 0px 20px"}} variant='contained' color='error' onClick={handleLogOut}>
        Logout</Button>
            </>
          ) : (
            <>
            <Link to={"/register"}><Button sx={{margin:" 0px 5px"}} variant='contained' color='success' size='small'>Register</Button></Link>
            <Link to={"/login"} ><Button sx={{margin:" 0px 5px"}} variant='contained' color='success' size='small'>Login</Button></Link>
            
            </>
          )
        }

      </Toolbar>
    </AppBar>
  )
}

export default Navbar;
