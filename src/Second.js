import React from 'react';
import Header from './Components/Header';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { makeStyles } from '@material-ui/core/styles';
import {
    Container,
    Grid,
    Typography
} from '@material-ui/core';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import InputAdornment from '@mui/material/InputAdornment';
import Textfield from './Components/FormsUI/Textfield';
import Select from './Components/FormsUI/Select';
import DateTimePicker from './Components/FormsUI/DataTimePicker';
import Checkbox from './Components/FormsUI/Checkbox';
import NextButton from './Components/FormsUI/NextButton';
import maritalstatus from './data/maritalstatus.json';
import expsg from './data/expsg.json';
import nation from './data/nation.json';
import relig from './data/relig.json';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

const steps = ['Profile', 'Medical History', 'Skills', 'Employment History'];

// function getStepContent(step) {
//   switch (step) {
//     case 0:
//       return <AddressForm />;
//     case 1:
//       return <PaymentForm />;
//     case 2:
//       return <Review />;
//     default:
//       throw new Error('Unknown step');
//   }
// }

// const [activeStep, setActiveStep] = React.useState(0);

//   const handleNext = () => {
//     setActiveStep(activeStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep(activeStep - 1);
//   };

const Input = styled('input')({
    display: 'none',
});

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
            <Typography variant="h5" style={{ margin: '20px' }}>
                <b>Helper Form</b>
            </Typography>

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
                                    <Button variant="outlined">Back</Button>
                                    <NextButton>Next</NextButton>
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