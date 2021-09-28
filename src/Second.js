import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { makeStyles } from '@material-ui/core/styles';
import {
    Container,
    Grid,
    Typography
} from '@material-ui/core';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Textfield from './Components/FormsUI/Textfield';
import NextButton from './Components/FormsUI/NextButton';
import FormLabel from '@mui/material/FormLabel';

const useStyles = makeStyles((theme) => ({
    formWrapper: {
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(8),
    },
}));

const INITIAL_FORM_STATE = {
    allergies: '',
    othersill: '',
    disability: '',
    diet: '',
    othersfood: '',
    rest: '',
    remar: '',
    mental: 'no',
    epilepsy:'no',
    asthma:'no',
    diabetes:'no',
    hyper:'no',
    tbc:'no',
    heart:'no',
    malaria:'no',
    operations:'no',
    beef:'no',
    pork:'no'
};

const FORM_VALIDATION = Yup.object().shape({
    allergies: Yup.string(),
    othersill: Yup.string(),
    disability: Yup.string(),
    diet: Yup.string(),
    othersfood: Yup.string(),
    rest: Yup.string(),
    remar: Yup.string(),
});

const Second = () => {
    const classes = useStyles();

    return (
        <Grid container>
            <Grid item xs={12}>
                <Container fixed>
                    <div className={classes.formWrapper}>

                        <Formik
                            initialValues={{
                                ...INITIAL_FORM_STATE
                            }}
                            validationSchema={FORM_VALIDATION}
                            onSubmit={values => {
                                console.log(values);
                            }}
                        >
                            <Form>

                                <Grid container spacing={2}>

                                    <Grid item xs={12}>
                                        <Textfield
                                            name="allergies"
                                            label="Allergies"
                                        />
                                    </Grid>

                                    <Grid>
                                        <FormLabel>Past And Existing Illness</FormLabel>
                                        <div style={{ padding: '10px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                                            <Typography>Mental Illness</Typography>
                                            <Typography>
                                            <label>
                                                <Field
                                                    name="mental"
                                                    value="yes"
                                                    type="radio"
                                                />
                                                Yes
                                            </label>
                                            <label>
                                                <Field
                                                    name="mental"
                                                    value="no"
                                                    type="radio"
                                                />
                                                No
                                            </label>
                                            </Typography>
                                        </div>

                                        <div style={{padding: '10px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                                            <Typography>Epilepsy</Typography>
                                            <Typography>
                                            <label>
                                                <Field
                                                    name="epilepsy"
                                                    value="yes"
                                                    type="radio"
                                                />
                                                Yes
                                            </label>
                                            <label>
                                                <Field
                                                    name="epilepsy"
                                                    value="no"
                                                    type="radio"
                                                />
                                                No
                                            </label>
                                            </Typography>
                                        </div>

                                        <div style={{padding: '10px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                                            <Typography>Asthma</Typography>
                                            <Typography>
                                            <label>
                                                <Field
                                                    name="asthma"
                                                    value="yes"
                                                    type="radio"
                                                />
                                                Yes
                                            </label>
                                            <label>
                                                <Field
                                                    name="asthma"
                                                    value="no"
                                                    type="radio"
                                                />
                                                No
                                            </label>
                                            </Typography>
                                        </div>

                                        <div style={{padding: '10px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                                            <Typography>Diabetes</Typography>
                                            <Typography>
                                            <label>
                                                <Field
                                                    name="diabetes"
                                                    value="yes"
                                                    type="radio"
                                                />
                                                Yes
                                            </label>
                                            <label>
                                                <Field
                                                    name="diabetes"
                                                    value="no"
                                                    type="radio"
                                                />
                                                No
                                            </label>
                                            </Typography>
                                        </div>

                                        <div style={{padding: '10px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                                            <Typography>Hypertension</Typography>
                                            <Typography>
                                            <label>
                                                <Field
                                                    name="hyper"
                                                    value="yes"
                                                    type="radio"
                                                />
                                                Yes
                                            </label>
                                            <label>
                                                <Field
                                                    name="hyper"
                                                    value="no"
                                                    type="radio"
                                                />
                                                No
                                            </label>
                                            </Typography>
                                        </div>

                                        <div style={{padding: '10px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                                            <Typography>Tubercolosis</Typography>
                                            <Typography>
                                            <label>
                                                <Field
                                                    name="tbc"
                                                    value="yes"
                                                    type="radio"
                                                />
                                                Yes
                                            </label>
                                            <label>
                                                <Field
                                                    name="tbc"
                                                    value="no"
                                                    type="radio"
                                                />
                                                No
                                            </label>
                                            </Typography>
                                        </div>

                                        <div style={{padding: '10px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                                            <Typography>Heart Disease</Typography>
                                            <Typography>
                                            <label>
                                                <Field
                                                    name="heart"
                                                    value="yes"
                                                    type="radio"
                                                />
                                                Yes
                                            </label>
                                            <label>
                                                <Field
                                                    name="heart"
                                                    value="no"
                                                    type="radio"
                                                />
                                                No
                                            </label>
                                            </Typography>
                                        </div>

                                        <div style={{padding: '10px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                                            <Typography>Malaria</Typography>
                                            <Typography>
                                            <label>
                                                <Field
                                                    name="malaria"
                                                    value="yes"
                                                    type="radio"
                                                />
                                                Yes
                                            </label>
                                            <label>
                                                <Field
                                                    name="malaria"
                                                    value="no"
                                                    type="radio"
                                                />
                                                No
                                            </label>
                                            </Typography>
                                        </div>

                                        <div style={{padding: '10px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                                            <Typography>Operations</Typography>
                                            <Typography>
                                            <label>
                                                <Field
                                                    name="operations"
                                                    value="yes"
                                                    type="radio"
                                                />
                                                Yes
                                            </label>
                                            <label>
                                                <Field
                                                    name="operations"
                                                    value="no"
                                                    type="radio"
                                                />
                                                No
                                            </label>
                                            </Typography>
                                        </div>
                                    </Grid>

                                    <Grid item xs={12}>
                                        <Textfield
                                            name="othersill"
                                            label="Others"
                                        />
                                    </Grid>

                                    <Grid item xs={6}>
                                        <Textfield
                                            name="disability"
                                            label="Physical Disabilities"
                                        />
                                    </Grid>

                                    <Grid item xs={6}>
                                        <Textfield
                                            name="diet"
                                            label="Dietary Restrictions"
                                        />
                                    </Grid>
                                    <Grid>
                                        <FormLabel>Food Handling Preferences</FormLabel>
                                        <div style={{padding: '10px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                                            <Typography>Pork</Typography>
                                            <Typography>
                                            <label>
                                                <Field
                                                    name="pork"
                                                    value="yes"
                                                    type="radio"
                                                />
                                                Yes
                                            </label>
                                            <label>
                                                <Field
                                                    name="pork"
                                                    value="no"
                                                    type="radio"
                                                />
                                                No
                                            </label>
                                            </Typography>
                                        </div>

                                        <div style={{padding: '10px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                                            <Typography>Beef</Typography>
                                            <Typography>
                                            <label>
                                                <Field
                                                    name="beef"
                                                    value="yes"
                                                    type="radio"
                                                />
                                                Yes
                                            </label>
                                            <label>
                                                <Field
                                                    name="beef"
                                                    value="no"
                                                    type="radio"
                                                />
                                                No
                                            </label>
                                            </Typography>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Textfield
                                            name="othersfood"
                                            label="Others"
                                        />
                                    </Grid>

                                    <Grid item xs={6}>
                                        <Textfield
                                            name="rest"
                                            label="Preference for Rest Day per month"
                                        />
                                    </Grid>

                                    <Grid item xs={6}>
                                        <Textfield
                                            name="remar"
                                            label="Remarks"
                                        />
                                    </Grid>

                                </Grid>
                                <br />

                                <Stack spacing={2} direction="row">
                                    <NextButton>Submit</NextButton>
                                </Stack>
                            </Form>
                        </Formik>

                    </div>
                </Container>
            </Grid>
        </Grid>
    );
};

console.log('helo')

export default Second;