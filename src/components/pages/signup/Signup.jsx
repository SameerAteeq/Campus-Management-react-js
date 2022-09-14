import { Box, TextField, Grid, Typography, Button, MenuItem, IconButton, InputAdornment } from "@mui/material"
import { Link } from 'react-router-dom';
import { Stack } from '@mui/system';
import { useFormik } from 'formik';
import { countriesData } from '../../../utils/countries';
import signupValidation from './validation';
import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfPassword, setShowConfPassword] = useState(false);
    const { values, handleBlur, handleChange, handleSubmit, errors, touched } = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            city: "",
            country: "",
            role: ""
        },
        validationSchema: signupValidation,
        onSubmit: values => {
            console.log(values);
        }
    })

    return (
        <Box>
            <Grid container justifyContent="center" alignItems="center" >
                <Grid item xs={12} sm={12} md={6} sx={{ display: { xs: "none", lg: "block" } }}>
                    <img src='images/signup.png' width="100%" height="100%" />
                </Grid>
                <Grid item xs={12} sm={12} md={6} sx={{ padding: { xs: "10px" } }}>
                    <Typography variant="h3"
                        sx={{ marginBottom: "10px", color: "gray", fontWeight: "bold" }}
                    >
                        Sign up
                    </Typography>

                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={1}  >
                            <Grid item xs={12} lg={11}>
                                <TextField
                                    type="text"
                                    name='name'
                                    fullWidth
                                    label=" Name"
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    helperText={touched.name && errors.name}
                                    error={touched.name && Boolean(errors.name)}
                                />
                            </Grid>
                            <Grid item xs={12} lg={11}>
                                <TextField
                                    type="email"
                                    name='email'
                                    label="Email"
                                    fullWidth
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    helperText={touched.email && errors.email}
                                    error={touched.email && Boolean(errors.email)}
                                />
                            </Grid>
                            <Grid item xs={12} lg={11}>
                                <TextField
                                    type={showPassword ? "text" : "password"}
                                    name='password'
                                    label="Password"
                                    fullWidth
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.password && Boolean(errors.password)}
                                    helperText={touched.password && errors.password}
                                    InputProps={{
                                        endAdornment:
                                            <InputAdornment position="end">
                                                <IconButton aria-label="toggle password visibility"
                                                    onClick={() => setShowPassword(!showPassword)}
                                                    edge="end"
                                                >
                                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>

                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} lg={11}>
                                <TextField
                                    type={showConfPassword ? "text" : "password"}
                                    name='confirmPassword'
                                    label="Confirm password"
                                    fullWidth
                                    value={values.confirmPassword}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.confirmPassword && Boolean(errors.confirmPassword)}
                                    helperText={touched.confirmPassword && errors.confirmPassword}
                                    InputProps={{
                                        endAdornment:
                                            <InputAdornment position="end">
                                                <IconButton aria-label="toggle password visibility"
                                                    onClick={() => setShowConfPassword(!showConfPassword)}
                                                    edge="end"
                                                >
                                                    {showConfPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>

                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} lg={11}>
                                <TextField
                                    type="text"
                                    name='city'
                                    label="City"
                                    fullWidth
                                    value={values.city}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.city && Boolean(errors.city)}
                                    helperText={touched.city && errors.city}
                                />
                            </Grid>
                            <Grid item xs={12} lg={11}>
                                <TextField
                                    select
                                    name='country'
                                    label="Select Country"
                                    fullWidth
                                    value={values.country}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.country && Boolean(errors.country)}
                                    helperText={touched.country && errors.country}
                                >
                                    {countriesData.map((country) => (
                                        <MenuItem key={country.name} value={country.name}>{country.name}</MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                            <Grid item xs={12} lg={11}>
                                <TextField
                                    select
                                    name='role'
                                    label="Role"
                                    fullWidth
                                    value={values.role}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.role && Boolean(errors.role)}
                                    helperText={touched.role && errors.role}
                                >
                                    <MenuItem key="candidate" value="candidate">Candidate</MenuItem>
                                    <MenuItem key="Employee" value="Employee">Employee</MenuItem>
                                    <MenuItem key="Admin" value="Admin">Admin</MenuItem>

                                </TextField>
                            </Grid>
                            <Grid item xs={12} lg={11} >
                                <Button type='submit' variant='contained' fullWidth>Login</Button>
                            </Grid>
                            <Grid item xs={12} lg={11}>
                                <Stack direction="row" gap={1} >
                                    <Typography variant='p' >Already have an account?</Typography>
                                    <Typography component={Link} to="/login" variant='p' color="primary" sx={{ textDecoration: "none" }}>Login</Typography>
                                </Stack>
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Signup