import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { makeStyles } from '@material-ui/core/styles';
import {
    Container,
    Grid,
    Typography
} from '@material-ui/core';
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
    infants1: 'yes',
    infants2: 'yes',
    infantstext:'',
    careofelderly1:'yes',
    careofelderly2:'yes',
    careofelderlytext:'',
    careofdisabled1:'yes',
    careofdisabled2:'yes',
    careofdisabledtext:'',
    generalhousework1:'yes',
    generalhousework2:'yes',
    generalhouseworktext:'',
    cooking1:'yes',
    cooking2:'yes',
    cookingtext:'',
    languageabilities1:'yes',
    languageabilities2:'yes',
    languageabilitiestext1:'',
    languageabilitiestext2:'',
    otherskills1:'yes',
    otherskills2:'yes',
    otherskillstext1:'',
    otherskillstext2:'',
    infants3: 'yes',
    infants4: 'yes',
    infantstextB:'',
    careofelderly3:'yes',
    careofelderly4:'yes',
    careofelderlytextB:'',
    careofdisabled3:'yes',
    careofdisabled4:'yes',
    careofdisabledtextB:'',
    generalhousework3:'yes',
    generalhousework4:'yes',
    generalhouseworktextB:'',
    cooking3:'yes',
    cooking4:'yes',
    cookingtextB:'',
    languageabilities3:'yes',
    languageabilities4:'yes',
    languageabilitiestext1B:'',
    languageabilitiestext2B:'',
    otherskills3:'yes',
    otherskills4:'yes',
    otherskillstext1B:'',
    otherskillstext2B:'',
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

const Third = () => {
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
                                        <FormLabel>Interview by Singapore EA</FormLabel>
                                        <Grid>
                                        <div style={{ padding: '10px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                                        <Grid item xs={3}><Typography>Care of infants / children</Typography></Grid>
                                            <Typography>
                                                <label>
                                                    <Field
                                                        name="infants1"
                                                        value="yes"
                                                        type="radio"
                                                    />
                                                    Yes
                                                </label>
                                                <label>
                                                    <Field
                                                        name="infants1"
                                                        value="no"
                                                        type="radio"
                                                    />
                                                    No
                                                </label>
                                                </Typography>
                                            <Typography>
                                                <label>
                                                    <Field
                                                        name="infants2"
                                                        value="yes"
                                                        type="radio"
                                                    />
                                                    Yes
                                                </label>
                                                <label>
                                                    <Field
                                                        name="infants2"
                                                        value="no"
                                                        type="radio"
                                                    />
                                                    No
                                                </label>

                                            </Typography>
                                            <Grid item xs={3}>
                                                <Textfield
                                                    name="infantstext"
                                                    label="Assessment / Observation"
                                                />
                                            </Grid>
                                        </div>
                                        </Grid>
                                        <hr/>

                                        <div style={{ padding: '10px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                                        <Grid item xs={3}><Typography>Care of Elderly</Typography></Grid>
                                            <Typography>
                                                <label>
                                                    <Field
                                                        name="careofelderly1"
                                                        value="yes"
                                                        type="radio"
                                                    />
                                                    Yes
                                                </label>
                                                <label>
                                                    <Field
                                                        name="careofelderly1"
                                                        value="no"
                                                        type="radio"
                                                    />
                                                    No
                                                </label>
                                            </Typography>
                                            <Typography>
                                                <label>
                                                    <Field
                                                        name="careofelderly2"
                                                        value="yes"
                                                        type="radio"
                                                    />
                                                    Yes
                                                </label>
                                                <label>
                                                    <Field
                                                        name="careofelderly2"
                                                        value="no"
                                                        type="radio"
                                                    />
                                                    No
                                                </label>
                                            </Typography>
                                            <Grid item xs={3}>
                                                <Textfield
                                                    name="careofelderlytext"
                                                    label="Assessment / Observation"
                                                />
                                            </Grid>
                                        </div>
                                        <hr/>

                                        <div style={{ padding: '10px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                                        <Grid item xs={3}><Typography>Care of disabled</Typography></Grid>
                                            <Typography>
                                                <label>
                                                    <Field
                                                        name="careofdisabled1"
                                                        value="yes"
                                                        type="radio"
                                                    />
                                                    Yes
                                                </label>
                                                <label>
                                                    <Field
                                                        name="careofdisabled1"
                                                        value="no"
                                                        type="radio"
                                                    />
                                                    No
                                                </label>
                                            </Typography>
                                            <Typography>
                                                <label>
                                                    <Field
                                                        name="careofdisabled2"
                                                        value="yes"
                                                        type="radio"
                                                    />
                                                    Yes
                                                </label>
                                                <label>
                                                    <Field
                                                        name="careofdisabled2"
                                                        value="no"
                                                        type="radio"
                                                    />
                                                    No
                                                </label>
                                            </Typography>
                                            <Grid item xs={3}>
                                                <Textfield
                                                    name="careofdisabledtext"
                                                    label="Assessment / Observation"
                                                />
                                            </Grid>
                                        </div>
                                        <hr/>

                                        <div style={{ padding: '10px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                                        <Grid item xs={3}><Typography>General Housework</Typography></Grid>
                                            <Typography>
                                                <label>
                                                    <Field
                                                        name="generalhousework1"
                                                        value="yes"
                                                        type="radio"
                                                    />
                                                    Yes
                                                </label>
                                                <label>
                                                    <Field
                                                        name="generalhousework1"
                                                        value="no"
                                                        type="radio"
                                                    />
                                                    No
                                                </label>
                                            </Typography>
                                            <Typography>
                                                <label>
                                                    <Field
                                                        name="generalhousework2"
                                                        value="yes"
                                                        type="radio"
                                                    />
                                                    Yes
                                                </label>
                                                <label>
                                                    <Field
                                                        name="generalhousework2"
                                                        value="no"
                                                        type="radio"
                                                    />
                                                    No
                                                </label>
                                            </Typography>
                                            <Grid item xs={3}>
                                                <Textfield
                                                    name="generalhouseworktext"
                                                    label="Assessment / Observation"
                                                />
                                            </Grid>
                                        </div>
                                        <hr/>

                                        <div style={{ padding: '10px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                                        <Grid item xs={3}><Typography>Cooking</Typography></Grid>
                                            <Typography>
                                                <label>
                                                    <Field
                                                        name="cooking1"
                                                        value="yes"
                                                        type="radio"
                                                    />
                                                    Yes
                                                </label>
                                                <label>
                                                    <Field
                                                        name="cooking1"
                                                        value="no"
                                                        type="radio"
                                                    />
                                                    No
                                                </label>
                                            </Typography>
                                            <Typography>
                                                <label>
                                                    <Field
                                                        name="cooking2"
                                                        value="yes"
                                                        type="radio"
                                                    />
                                                    Yes
                                                </label>
                                                <label>
                                                    <Field
                                                        name="cooking2"
                                                        value="no"
                                                        type="radio"
                                                    />
                                                    No
                                                </label>
                                            </Typography>
                                            <Grid item xs={3}>
                                                <Textfield
                                                    name="cookingtext"
                                                    label="Assessment / Observation"
                                                />
                                            </Grid>
                                        </div>
                                        <hr/>

                                        <div style={{ padding: '10px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                                        <Grid item xs={3}>
                                            <Typography>Language Abilities</Typography>
                                            <Textfield
                                                    name="languageabilitiestext1"
                                                    label="Language Abilities"
                                                />
                                        </Grid>
                                            <Typography>
                                                <label>
                                                    <Field
                                                        name="languageabilities1"
                                                        value="yes"
                                                        type="radio"
                                                    />
                                                    Yes
                                                </label>
                                                <label>
                                                    <Field
                                                        name="languageabilities1"
                                                        value="no"
                                                        type="radio"
                                                    />
                                                    No
                                                </label>
                                            </Typography>
                                            <Typography>
                                                <label>
                                                    <Field
                                                        name="languageabilities2"
                                                        value="yes"
                                                        type="radio"
                                                    />
                                                    Yes
                                                </label>
                                                <label>
                                                    <Field
                                                        name="languageabilities2"
                                                        value="no"
                                                        type="radio"
                                                    />
                                                    No
                                                </label>
                                            </Typography>
                                            <Grid item xs={3}>
                                                <Textfield
                                                    name="languageabilitiestext2"
                                                    label="Assessment / Observation"
                                                />
                                            </Grid>
                                        </div>
                                        <hr/>

                                        <div style={{ padding: '10px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                                        <Grid item xs={3}>
                                            <Typography>Other Skills</Typography>
                                            <Textfield
                                                    name="otherskillstext1"
                                                    label="Other Skills"
                                                />
                                        </Grid>
                                            <Typography>
                                                <label>
                                                    <Field
                                                        name="otherskills1"
                                                        value="yes"
                                                        type="radio"
                                                    />
                                                    Yes
                                                </label>
                                                <label>
                                                    <Field
                                                        name="otherskills1"
                                                        value="no"
                                                        type="radio"
                                                    />
                                                    No
                                                </label>
                                            </Typography>
                                            <Typography>
                                                <label>
                                                    <Field
                                                        name="otherskills2"
                                                        value="yes"
                                                        type="radio"
                                                    />
                                                    Yes
                                                </label>
                                                <label>
                                                    <Field
                                                        name="otherskills2"
                                                        value="no"
                                                        type="radio"
                                                    />
                                                    No
                                                </label>
                                            </Typography>
                                            <Grid item xs={3}>
                                                <Textfield
                                                    name="otherskillstext2"
                                                    label="Assessment / Observation"
                                                />
                                            </Grid>
                                        </div>
                                        <hr/>
                                        <br/>

                                        <FormLabel>Interview by Training Centre EA</FormLabel>
                                        <Grid>
                                        <div style={{ padding: '10px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                                        <Grid item xs={3}><Typography>Care of infants / children</Typography></Grid>
                                            <Typography>
                                                <label>
                                                    <Field
                                                        name="infants3"
                                                        value="yes"
                                                        type="radio"
                                                    />
                                                    Yes
                                                </label>
                                                <label>
                                                    <Field
                                                        name="infants3"
                                                        value="no"
                                                        type="radio"
                                                    />
                                                    No
                                                </label>
                                                </Typography>
                                            <Typography>
                                                <label>
                                                    <Field
                                                        name="infants4"
                                                        value="yes"
                                                        type="radio"
                                                    />
                                                    Yes
                                                </label>
                                                <label>
                                                    <Field
                                                        name="infants4"
                                                        value="no"
                                                        type="radio"
                                                    />
                                                    No
                                                </label>

                                            </Typography>
                                            <Grid item xs={3}>
                                                <Textfield
                                                    name="infantstextB"
                                                    label="Assessment / Observation"
                                                />
                                            </Grid>
                                        </div>
                                        </Grid>
                                        <hr/>

                                        <div style={{ padding: '10px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                                        <Grid item xs={3}><Typography>Care of Elderly</Typography></Grid>
                                            <Typography>
                                                <label>
                                                    <Field
                                                        name="careofelderly3"
                                                        value="yes"
                                                        type="radio"
                                                    />
                                                    Yes
                                                </label>
                                                <label>
                                                    <Field
                                                        name="careofelderly3"
                                                        value="no"
                                                        type="radio"
                                                    />
                                                    No
                                                </label>
                                            </Typography>
                                            <Typography>
                                                <label>
                                                    <Field
                                                        name="careofelderly4"
                                                        value="yes"
                                                        type="radio"
                                                    />
                                                    Yes
                                                </label>
                                                <label>
                                                    <Field
                                                        name="careofelderly4"
                                                        value="no"
                                                        type="radio"
                                                    />
                                                    No
                                                </label>
                                            </Typography>
                                            <Grid item xs={3}>
                                                <Textfield
                                                    name="careofelderlytextB"
                                                    label="Assessment / Observation"
                                                />
                                            </Grid>
                                        </div>
                                        <hr/>

                                        <div style={{ padding: '10px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                                        <Grid item xs={3}><Typography>Care of disabled</Typography></Grid>
                                            <Typography>
                                                <label>
                                                    <Field
                                                        name="careofdisabled3"
                                                        value="yes"
                                                        type="radio"
                                                    />
                                                    Yes
                                                </label>
                                                <label>
                                                    <Field
                                                        name="careofdisabled3"
                                                        value="no"
                                                        type="radio"
                                                    />
                                                    No
                                                </label>
                                            </Typography>
                                            <Typography>
                                                <label>
                                                    <Field
                                                        name="careofdisabled4"
                                                        value="yes"
                                                        type="radio"
                                                    />
                                                    Yes
                                                </label>
                                                <label>
                                                    <Field
                                                        name="careofdisabled4"
                                                        value="no"
                                                        type="radio"
                                                    />
                                                    No
                                                </label>
                                            </Typography>
                                            <Grid item xs={3}>
                                                <Textfield
                                                    name="careofdisabledtextB"
                                                    label="Assessment / Observation"
                                                />
                                            </Grid>
                                        </div>
                                        <hr/>

                                        <div style={{ padding: '10px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                                        <Grid item xs={3}><Typography>General Housework</Typography></Grid>
                                            <Typography>
                                                <label>
                                                    <Field
                                                        name="generalhousework3"
                                                        value="yes"
                                                        type="radio"
                                                    />
                                                    Yes
                                                </label>
                                                <label>
                                                    <Field
                                                        name="generalhousework3"
                                                        value="no"
                                                        type="radio"
                                                    />
                                                    No
                                                </label>
                                            </Typography>
                                            <Typography>
                                                <label>
                                                    <Field
                                                        name="generalhousework4"
                                                        value="yes"
                                                        type="radio"
                                                    />
                                                    Yes
                                                </label>
                                                <label>
                                                    <Field
                                                        name="generalhousework4"
                                                        value="no"
                                                        type="radio"
                                                    />
                                                    No
                                                </label>
                                            </Typography>
                                            <Grid item xs={3}>
                                                <Textfield
                                                    name="generalhouseworktextB"
                                                    label="Assessment / Observation"
                                                />
                                            </Grid>
                                        </div>
                                        <hr/>

                                        <div style={{ padding: '10px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                                        <Grid item xs={3}><Typography>Cooking</Typography></Grid>
                                            <Typography>
                                                <label>
                                                    <Field
                                                        name="cooking3"
                                                        value="yes"
                                                        type="radio"
                                                    />
                                                    Yes
                                                </label>
                                                <label>
                                                    <Field
                                                        name="cooking3"
                                                        value="no"
                                                        type="radio"
                                                    />
                                                    No
                                                </label>
                                            </Typography>
                                            <Typography>
                                                <label>
                                                    <Field
                                                        name="cooking4"
                                                        value="yes"
                                                        type="radio"
                                                    />
                                                    Yes
                                                </label>
                                                <label>
                                                    <Field
                                                        name="cooking4"
                                                        value="no"
                                                        type="radio"
                                                    />
                                                    No
                                                </label>
                                            </Typography>
                                            <Grid item xs={3}>
                                                <Textfield
                                                    name="cookingtextB"
                                                    label="Assessment / Observation"
                                                />
                                            </Grid>
                                        </div>
                                        <hr/>

                                        <div style={{ padding: '10px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                                        <Grid item xs={3}>
                                            <Typography>Language Abilities</Typography>
                                            <Textfield
                                                    name="languageabilitiestext1B"
                                                    label="Language Abilities"
                                                />
                                        </Grid>
                                            <Typography>
                                                <label>
                                                    <Field
                                                        name="languageabilities3"
                                                        value="yes"
                                                        type="radio"
                                                    />
                                                    Yes
                                                </label>
                                                <label>
                                                    <Field
                                                        name="languageabilities3"
                                                        value="no"
                                                        type="radio"
                                                    />
                                                    No
                                                </label>
                                            </Typography>
                                            <Typography>
                                                <label>
                                                    <Field
                                                        name="languageabilities4"
                                                        value="yes"
                                                        type="radio"
                                                    />
                                                    Yes
                                                </label>
                                                <label>
                                                    <Field
                                                        name="languageabilities4"
                                                        value="no"
                                                        type="radio"
                                                    />
                                                    No
                                                </label>
                                            </Typography>
                                            <Grid item xs={3}>
                                                <Textfield
                                                    name="languageabilitiestext2B"
                                                    label="Assessment / Observation"
                                                />
                                            </Grid>
                                        </div>
                                        <hr/>

                                        <div style={{ padding: '10px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                                        <Grid item xs={3}>
                                            <Typography>Other Skills</Typography>
                                            <Textfield
                                                    name="otherskillstext1B"
                                                    label="Other Skills"
                                                />
                                        </Grid>
                                            <Typography>
                                                <label>
                                                    <Field
                                                        name="otherskills3"
                                                        value="yes"
                                                        type="radio"
                                                    />
                                                    Yes
                                                </label>
                                                <label>
                                                    <Field
                                                        name="otherskills3"
                                                        value="no"
                                                        type="radio"
                                                    />
                                                    No
                                                </label>
                                            </Typography>
                                            <Typography>
                                                <label>
                                                    <Field
                                                        name="otherskills4"
                                                        value="yes"
                                                        type="radio"
                                                    />
                                                    Yes
                                                </label>
                                                <label>
                                                    <Field
                                                        name="otherskills4"
                                                        value="no"
                                                        type="radio"
                                                    />
                                                    No
                                                </label>
                                            </Typography>
                                            <Grid item xs={3}>
                                                <Textfield
                                                    name="otherskillstext2B"
                                                    label="Assessment / Observation"
                                                />
                                            </Grid>
                                        </div>
                                        <hr/>
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

export default Third;