import {
  Button,
  Card,
  CardContent,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../features/auth/authSlice";
import Loading from "../components/Loading";

const Login = () => {
  const { user, isLoading } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
 const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(formData));
  };

  useEffect(() => {
    if (user) {
      navigate("/")
    }
  }, [user]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Container sx={{ padding: "80px 0px" }}>
      <Typography variant="h3" align="center">
        Login Here
      </Typography>
      <Card>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <TextField
              sx={{ margin: "10px 0px" }}
              variant="outlined"
              label="Enter Email"
              type="email"
              value={email}
              name="email"
              onChange={handleChange}
              fullWidth
            />
            <TextField
              sx={{ margin: "10px 0px" }}
              variant="outlined"
              label="Enter Password"
              type="password"
              value={password}
              name="password"
              onChange={handleChange}
              fullWidth
            />
            <Button type="submit" variant="contained" color="success" fullWidth>
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Login;
