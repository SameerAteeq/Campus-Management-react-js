import { ArrowBack } from '@mui/icons-material';
import { Box, Button, Divider, FormControl, FormControlLabel, FormLabel, Grid, IconButton, MenuItem, Radio, RadioGroup, Stack, TextField, Tooltip, Typography } from '@mui/material'
import { doc, setDoc } from 'firebase/firestore';
import { useFormik } from 'formik';
import { useContext } from 'react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import { ulid } from 'ulid';
import * as Yup from "yup"
import { UserContext } from '../../../../context/Context';
import { db } from '../../../../firebase';
import { allSkills } from '../../../../utils/programskills';
import Loading from '../../../common/loading/Loading';
const JobForm = () => {
    const navigate = useNavigate();
    const { jobId } = useParams();
    const { currentUser } = useContext(UserContext);
    const [openLoading, setOpenLoading] = useState(false);
    const JobformValidation = Yup.object().shape({
        name: Yup.string().required("required"),
        email: Yup.string().email().required("required"),
        experience: Yup.string().required("required").min(6, "description is short"),
        skills: Yup.array().min(1, "atleast 1 skill is required").required("required"),
        address: Yup.array().min(1, "select atleast one skill ").required("required"),
        gender: Yup.string().required("required"),

    })
    const { values, handleBlur, handleSubmit, handleChange, touched, errors } = useFormik({
        initialValues: {
            name: "",
            email: "",
            experience: "",
            skills: [],
            gender: "",
            address: "",
            gender: ""
        },
        validationSchema: JobformValidation,
        onSubmit: async values => {
            setOpenLoading(true);
            const id = ulid();
            const userId = currentUser.id;
            await setDoc(doc(db, "applications", id), {
                ...values, id, userId
            });
            setOpenLoading(false);
            toast.success("Job Posted Successfully");
        }
    })
    return (
        <>
            <Box sx={{ backgroundColor: "aliceblue", padding: { xs: "15px", sm: "10px", lg: "20px" }, height: "95vh" }}>
                <Stack direction="row" alignItems="center" justifyContent="space-between">
                    <Typography variant='h5' sx={{ mb: "10px", color: '#333', fontWeight: "bold" }}>
                        APPLICATION FORM
                    </Typography>
                    <Tooltip title="back to Dashboard">
                        <IconButton size="small" onClick={() => navigate(-1)}><ArrowBack /></IconButton>
                    </Tooltip>
                </Stack>
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
                                select
                                name='skills'
                                value={values.skills}
                                error={touched.skills && Boolean(errors.skills)}
                                onChange={(event) => {
                                    const {
                                        target: { value },
                                    } = event;
                                    handleChange({ target: { name: "skills", value: typeof value === 'string' ? value.split(',') : value, } })
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
                        <Grid item xs={12} md={6}>
                            <FormControl>
                                <FormLabel id='gender' >Gender</FormLabel>
                                <RadioGroup
                                    row
                                    type="radio"
                                    name='gender'
                                    error={touched.gender && Boolean(errors.gender)}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.gender}
                                >
                                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                                    <FormControlLabel value="other" control={<Radio />} label="Other" />

                                </RadioGroup>
                            </FormControl>
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
