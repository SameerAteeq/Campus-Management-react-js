import { async } from '@firebase/util'
import { Box, Button, Divider, Grid, InputLabel, TextField, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import { useFormik } from 'formik'
import React, { useContext } from 'react'
import { UserContext } from '../../../../context/Context'
import { db } from '../../../../firebase'
import { doc, setDoc } from "firebase/firestore";
import { LoadingButton } from '@mui/lab'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { ImageUploader } from "../../../../api"
const Profile = () => {
    const [loading, setLoading] = useState(false);
    const { currentUser } = useContext(UserContext);

    const { values, handleBlur, handleChange, handleSubmit, errors, touched, setFieldValue } = useFormik({
        initialValues: {
            name: currentUser ? currentUser?.name : "",
            email: currentUser ? currentUser?.email : "",
            address: currentUser ? currentUser?.address : "",
            password: currentUser ? currentUser?.password : "",
            confirmPassword: currentUser ? currentUser?.confirmPassword : "",
            file: currentUser ? currentUser?.file : ""
        },
        enableReinitialize: true,
        // validationSchema: LoginValidation,
        onSubmit: async values => {
            setLoading(true);
            const docRef = doc(db, "users", currentUser.id);
            const imgUrl = await ImageUploader(values["file"]);
            delete values["file"];
            const res = await setDoc(docRef, { ...values, imgUrl }, { merge: true });
            setLoading(false);
            toast.success("Profile Updated successfully")
            // const res = await doc2.update({ name: values.name, email: values.email });
            console.log("values", docRef)
            console.log("res", res)
        }
    })

    return (
        <Box sx={{ backgroundColor: "#fff", padding: { xs: "5px", sm: "10px", lg: "20px" } }}>
            <Typography variant='h4' sx={{ mb: "10px", color: '#333' }}>Your Profile</Typography>
            <Divider flexItem sx={{ borderWidth: 1, color: "#00bfa5", mb: 2 }} />

            <form onSubmit={handleSubmit} >
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Grid container spacing={2} rowSpacing={4}>
                            <Grid item xs={12} lg={11}>
                                <Stack direction="row" alignItems="flex-end" >
                                    <img alt='user Image' src={values.file ? URL.createObjectURL(values.file) : currentUser.imgUrl} style={{ width: "100px", height: "100px", borderRadius: "50%" }} />
                                    <Button variant='text' component="label" >
                                        {currentUser.imgUrl ? "Edit profile" : "Upload profile"}
                                        <input
                                            name='file'
                                            onChange={(e) => setFieldValue("file", e.target.files[0])}
                                            hidden type="file" />
                                    </Button>
                                </Stack>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    type="text"
                                    name='name'
                                    value={values.name}
                                    error={touched.name && Boolean(errors.name)}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    helperText={touched.name && errors.name}
                                    label="Name"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
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
                            <Grid item xs={12} md={6}>
                                <TextField
                                    type="text"
                                    name='address'
                                    value={values.address}
                                    error={touched.address && Boolean(errors.address)}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    helperText={touched.address && errors.address}
                                    label="Address"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    type="text"
                                    name='password'
                                    value={values.password}
                                    error={touched.password && Boolean(errors.password)}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    helperText={touched.password && errors.password}
                                    label="Password"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    type="text"
                                    name='confirmPassword'
                                    value={values.confirmPassword}
                                    error={touched.confirmPassword && Boolean(errors.confirmPassword)}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    helperText={touched.confirmPassword && errors.confirmPassword}
                                    label="Confirm Password"
                                    fullWidth
                                />
                            </Grid>
                            {/* <Grid item xs={12} md={6}>
                            <InputLabel> Address</InputLabel>
                            <TextField fullWidth placeholder='company address' type="text" size='small' />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <InputLabel>Registaration Date</InputLabel>
                            <TextField fullWidth placeholder='company registration' type="text" size='small' />
                        </Grid> */}
                            <Grid item xs={12}>
                                <LoadingButton loadingIndicator="Updating..." loading={loading} variant='contained' type='submit' >Update profile</LoadingButton>
                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>
            </form>
        </Box>
    )
}

export default Profile