import React, { useState } from 'react'
import { Box, TextField, Grid, Typography, FormControl, Button, InputAdornment, IconButton, OutlinedInput, InputLabel } from "@mui/material"
import { Link, useNavigate } from 'react-router-dom';
import { Stack } from '@mui/system';
import { useFormik } from 'formik';
import LoginValidation from './LoginValidation';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { UserContext } from '../../../context/Context';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from '../../../firebase';
import { toast } from 'react-hot-toast';
import { useContext } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import Loading from '../../common/loading/Loading';
const Login = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [openLoading, setOpenLoading] = useState(false);
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const { dispatch } = useContext(UserContext);

    const { values, handleBlur, handleChange, handleSubmit, errors, touched } = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: LoginValidation,
        onSubmit: values => {
            setOpenLoading(true)
            signInWithEmailAndPassword(auth, values.email, values.password)
                .then(async (userCredential) => {
                    const userResp = userCredential.user;
                    const docRef = doc(db, "users", userResp.uid);
                    const docSnap = await getDoc(docRef);
                    const fetchSingleUser = docSnap.data();
                    const userData = {
                        id: userResp.uid,
                        ...fetchSingleUser
                    }
                    dispatch({ type: "LOGIN", payload: userData })
                    setOpenLoading(false);
                    navigate("/Dashboard");
                    toast.success("Account successfully Login");
                })
                .catch((error) => {
                    if(error.code ==="auth/user-not-found"){
                        toast.error("User not found")
                        
                    }else if(error.code==="auth/wrong-password"){
                        toast.error("Incorrect password")
                    }else{
                        toast.error(error.code);
                    }
                    setOpenLoading(false);
                });
        }
    })
    return (
        <Box sx={{height:"100vh",display:"flex", justifyContent:"center", alignItems:"center"}}>
            <Grid container justifyContent="center" alignItems="center" >
                <Grid item xs={12} sm={12} md={6} sx={{ display: { xs: "none",  md: "block", lg: "block" } }}>
                    <img src='images/login.png' width="100%" height="100%" />
                </Grid>
                <Grid item xs={12} sm={12} md={6} sx={{ padding: { xs: "10px" } }} >
                    <Typography variant="h3"
                        sx={{ marginBottom: "10px", color: "gray", fontWeight: "bold" }}
                    >
                        Login
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={2} height="100%"  >
                            <Grid item xs={12} >
                                <TextField
                                    type="email"
                                    name='email'
                                    value={values.email}
                                    error={touched.email && Boolean(errors.email)}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    helperText={touched.email && errors.email}
                                    label="Email"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    type={showPassword ? 'text' : 'password'}
                                    name='password'
                                    value={values.password}
                                    error={touched.password && Boolean(errors.password)}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    helperText={touched.password && errors.password}
                                    fullWidth
                                    InputProps={{
                                        endAdornment:
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    edge="end"
                                                >
                                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                    }}
                                    label="Password"

                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button type="submit" variant='contained' fullWidth>Login</Button>
                            </Grid>
                        </Grid>
                        <Stack direction="row" gap={1} marginTop="10px">
                            <Typography variant='p' >Don't have an account?</Typography>
                            <Typography component={Link} to="/signup" variant='p' color="primary" sx={{ textDecoration: "none" }}>Create account</Typography>
                        </Stack>
                    </form>
                </Grid>
            </Grid >
            <Loading {...{ openLoading, setOpenLoading }} />
        </Box >
    )
}

export default Login