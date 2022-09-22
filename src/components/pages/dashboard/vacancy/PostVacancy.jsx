import { Box, Button, Divider, Grid, InputLabel, TextField, Typography } from '@mui/material'
import { DesktopDatePicker } from '@mui/x-date-pickers'
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { useFormik } from 'formik';
import React, { useState } from 'react'
import * as Yup from "yup";
import { db } from '../../../../firebase';
import { ulid } from 'ulid';
import { useContext } from 'react';
import { UserContext } from '../../../../context/Context';
import moment from 'moment';
import toast from 'react-hot-toast';
import Loading from '../../../common/loading/Loading';
const PostVacancy = () => {
    const { currentUser } = useContext(UserContext);
    const [openLoading, setOpenLoading] = useState(false);
    const ProductsValidation = Yup.object({
        title: Yup.string().required("required"),
        salary: Yup.string().required("required"),
        description: Yup.string().required("required").min(6, "description is short"),
        jobtype: Yup.string().required("required"),
        location: Yup.string().required("required"),
        opening: Yup.string().required("required"),
        lastDate: Yup.string().required("required")

    })
    const { values, handleBlur, handleSubmit, handleChange, touched, errors } = useFormik({
        initialValues: {
            title: "",
            salary: "",
            description: "",
            jobtype: "",
            location: "",
            opening: "",
            lastDate: moment().format("YYYY-MM-DD"),
            ApplyDate: moment().format("YYYY-MM-DD"),
        },
        validationSchema: ProductsValidation,
        onSubmit: async values => {
            console.log(values, "values");
            setOpenLoading(true);
            const id = ulid();
            const createdBy = currentUser.id
            await setDoc(doc(db, "jobs", id), {
                ...values, id, createdBy,
            });
            setOpenLoading(false);
            toast.success("Job Posted Successfully");
        }
    })


    return (
        <Box sx={{ backgroundColor: "#fff", padding: { xs: "5px", sm: "10px", lg: "20px" } }}>
            <Typography variant='h5' sx={{ mb: "10px", color: '#333' }}>Job Information</Typography>
            <Divider flexItem sx={{ borderWidth: 1, color: "#00bfa5", mb: 2 }} />
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <InputLabel>Job Title</InputLabel>
                        <TextField
                            fullWidth
                            size='small'
                            type="text"
                            error={touched.title && Boolean(errors.title)}
                            helperText={touched.title && errors.title}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.title}
                            name='title'
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <InputLabel>Monthly Salary</InputLabel>
                        <TextField
                            size='small'
                            fullWidth
                            type="text"
                            error={touched.salary && Boolean(errors.salary)}
                            helperText={touched.salary && errors.salary}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.salary}
                            name='salary'
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <InputLabel>Job Description</InputLabel>
                        <TextField
                            type="text"
                            multiline
                            size="small"
                            fullWidth
                            error={touched.description && Boolean(errors.description)}
                            helperText={touched.description && errors.description}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.description}
                            name='description'
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <InputLabel>Job Type</InputLabel>
                        <TextField
                            type="text"
                            size="small"
                            fullWidth
                            error={touched.jobtype && Boolean(errors.jobtype)}
                            helperText={touched.jobtype && errors.jobtype}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.jobtype}
                            name='jobtype'
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <InputLabel>No of Opening</InputLabel>
                        <TextField
                            size='small'
                            fullWidth
                            type="number"
                            error={touched.opening && Boolean(errors.opening)}
                            helperText={touched.opening && errors.opening}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name='opening'
                            value={values.opening}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <InputLabel>Job Location</InputLabel>
                        <TextField
                            size='small'
                            fullWidth
                            type="text"
                            error={touched.location && Boolean(errors.location)}
                            helperText={touched.location && errors.location}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.location}
                            name='location'
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <InputLabel>Apply Date</InputLabel>
                        <DesktopDatePicker
                            value={values.lastDate}
                            onChange={e => handleChange({ target: { name: "lastDate", value: moment(e).format("YYYY-MM-DD") } })}
                            name="lastDate"
                            error={touched.lastDate && Boolean(errors.lastDate)}
                            helperText={touched.lastDate && errors.lastDate}
                            onBlur={handleBlur}
                            renderInput={(params) => <TextField fullWidth size='small' {...params}

                            />}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <InputLabel>Last Date</InputLabel>
                        <DesktopDatePicker
                            value={values.ApplyDate}
                            onChange={e => handleChange({ target: { name: "ApplyDate", value: moment(e).format("YYYY-MM-DD") } })}
                            name="ApplyDate"
                            error={touched.ApplyDate && Boolean(errors.ApplyDate)}
                            helperText={touched.ApplyDate && errors.ApplyDate}
                            onBlur={handleBlur}
                            renderInput={(params) => <TextField fullWidth size='small' {...params}

                            />}
                        />
                    </Grid>
                    <Grid item xs={12} >
                        <Button type='submit' variant='contained'>Submit</Button>
                    </Grid>
                </Grid>
            </form>
            <Loading {...{ openLoading, setOpenLoading }} />
        </Box >
    )
}

export default PostVacancy;