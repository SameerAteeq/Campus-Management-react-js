import { Box, Button, Divider, Grid, TextField, Typography } from '@mui/material'
import { doc, setDoc } from 'firebase/firestore';
import { useFormik } from 'formik';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { ulid } from 'ulid';
import * as Yup from "yup"
import { db } from '../../../../firebase';
import Loading from '../../../common/loading/Loading';
const JobForm = () => {

    const [openLoading, setOpenLoading] = useState(false);
    const JobformValidation = Yup.object({
        name: Yup.string().required("required"),
        email: Yup.string().required("required"),
        experience: Yup.string().required("required").min(6, "description is short"),
        skills: Yup.string().required("required"),
        address: Yup.string().required("required"),
        gender: Yup.string().required("required"),

    })
    const { values, handleBlur, handleSubmit, handleChange, touched, errors } = useFormik({
        initialValues: {
            name: "",
            email: "",
            experience: "",
            skills: "",
            gender: "",
            address: ""
        },
        validationSchema: JobformValidation,
        onSubmit: async values => {
            console.log(values, "values");
            setOpenLoading(true);
            const id = ulid();
            await setDoc(doc(db, "jobs", id), {
                ...values, id
            });
            setOpenLoading(false);
            toast.success("Job Posted Successfully");
        }
    })
    return (
        <>
            <Box sx={{ backgroundColor: "aliceblue", padding: { xs: "15px", sm: "10px", lg: "20px" }, height: "95vh" }}>
                <Typography variant='h5' sx={{ mb: "10px", color: '#333', fontWeight: "bold" }}>
                    APPLICATION FORM
                </Typography>
                <Divider color="#00bfa5" flexItem sx={{ borderWidth: 1, color: "#00bfa5", mb: 2 }} />


                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                size='medium'
                                type="text"
                                error={touched.name && Boolean(errors.name)}
                                helperText={touched.name && errors.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                                name='name'
                                label="Name"
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                size='medium'
                                type="text"
                                error={touched.email && Boolean(errors.email)}
                                helperText={touched.email && errors.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                name='email'
                                label="Email"
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                size='medium'
                                type="text"
                                error={touched.address && Boolean(errors.address)}
                                helperText={touched.address && errors.address}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.address}
                                name='address'
                                label="Address"
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                size='medium'
                                type="text"
                                error={touched.experience && Boolean(errors.experience)}
                                helperText={touched.experience && errors.experience}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.experience}
                                name='experience'
                                label="Experience"
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                size='medium'
                                type="text"
                                error={touched.skills && Boolean(errors.skills)}
                                helperText={touched.skills && errors.skills}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.skills}
                                name='skills'
                                label="Skills"
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                size='medium'
                                type="text"
                                error={touched.name && Boolean(errors.name)}
                                helperText={touched.name && errors.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                                name='name'
                                label="Name"
                            />
                        </Grid>
                        <Grid item xs={12} >
                            <Button type='submit' variant='contained'>Submit</Button>
                        </Grid>
                    </Grid>
                </form>
                <Loading {...{ openLoading, setOpenLoading }} />
            </Box>
        </>
    )
}

export default JobForm
