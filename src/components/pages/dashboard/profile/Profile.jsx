import { async } from '@firebase/util'
import { Box, Button, Divider, Grid, InputLabel, MenuItem, OutlinedInput, TextField, Typography, useTheme } from '@mui/material'
import { Stack } from '@mui/system'
import { useFormik } from 'formik'
import React, { useContext } from 'react'
import { UserContext } from '../../../../context/Context'
import { db, storage } from '../../../../firebase'
import { doc, setDoc, updateDoc } from "firebase/firestore";
import { LoadingButton } from '@mui/lab'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { ImageUploader } from "../../../../api"
import { allSkills } from '../../../../utils/programskills'
import { updateProfile } from 'firebase/auth'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'



const Profile = () => {
    const theme = useTheme();
    const [loading, setLoading] = useState(false);
    const { currentUser } = useContext(UserContext);

    const { values, handleBlur, handleChange, handleSubmit, errors, touched, setFieldValue } = useFormik({
        initialValues: {
            name: currentUser ? currentUser?.name : "",
            email: currentUser ? currentUser?.email : "",
            address: currentUser ? currentUser?.address : "",
            password: currentUser ? currentUser?.password : "",
            confirmPassword: currentUser ? currentUser?.confirmPassword : "",
            // file: currentUser?.imgUrl,
            skills: currentUser ? currentUser?.skills : []
        },
        enableReinitialize: true,
        // validationSchema: LoginValidation,
        onSubmit: async (values) => {
            setLoading(true);
            // console.log("res", res)

            // delete values["file"];
            // const imgUrl = await ImageUploader(values["file"]);
            try {
                // const storageRef = ref(storage, + values?.file.name);
                // const uploadTask = uploadBytesResumable(storageRef, values?.file);

                const docRef = doc(db, "users", currentUser.id);
                // uploadTask.on('state_changed',

                //     () => {
                //         getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                //             await updateProfile(currentUser, {
                //                 photoURL: downloadURL
                //             })
                //         });
                //     }
                // )
                const res = await updateDoc(docRef, {
                    ...values

                })
                // const res = await setDoc(doc(db, "users", currentUser.uid), {
                //     ...values,
                // });
                // debugger
                setLoading(false);
            } catch (err) {
                setLoading(false);
                console.log(err.message)
            }
            // await setDoc(doc, { ...values, imgUrl }, { merge: true });
            // setLoading(false);

            // console.log(currentUser, "user")
            // // const res = await setDoc(docRef, { ...values, imgUrl }, { merge: true });
            // toast.success("Profile Updated successfully")
            // const res = await doc2.update({ name: values.name, email: values.email });
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
                            {/* <Grid item xs={12} lg={11}>
                                <Stack direction="row" alignItems="flex-end" >
                                    <img alt='user Image' src={values.imgUrl ? URL.createObjectURL(values.file) : currentUser?.imgUrl} style={{ width: "100px", height: "100px", borderRadius: "50%" }} />
                                    <Button variant='text' component="label" >
                                        {currentUser.imgUrl ? "Edit profile" : "Upload profile"}
                                        <input
                                            name='file'
                                            onChange={(e) => setFieldValue("file", e.target.files[0])}
                                            hidden type="file" />
                                    </Button>
                                </Stack>
                            </Grid> */}
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
                            {currentUser?.role === "candidate" &&
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        select
                                        name='skills'
                                        value={values.skills}
                                        error={touched.skills && Boolean(errors.skills)}
                                        onChange={(event) => {
                                            const {
                                                target: { value },
                                            } = event;
                                            handleChange({ target: { name: "skills", value: typeof value === 'string' ? value?.split(',') : value, } })
                                        }}
                                        onBlur={handleBlur}
                                        helperText={touched.skills && errors.skills}
                                        label="skills"
                                        fullWidth
                                        SelectProps={{
                                            multiple: true
                                        }}
                                    >
                                        {allSkills.map((name) => (
                                            <MenuItem
                                                key={name}
                                                value={name}
                                            >
                                                {name}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>
                            }
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