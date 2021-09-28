import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import App from './App';
import Second from './Second';
import Third from './Third';
import Employees from './Employees';

export default function Main() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [linkVideo, setLinkVideo] = React.useState('');
  const [fullName, setFullName] = React.useState('');
  const [fullNameError, setFullNameError] = React.useState('');

  const steps = ['Profile', 'Medical History', 'Skills', 'Employment History'];

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <App
          linkVideo={linkVideo}
          setLinkVideo={setLinkVideo}
          fullName={fullName}
          setFullName={setFullName}
          fullNameError={fullNameError} />;
      case 1:
        return <Second />;
      case 2:
        return <Third />;
      case 3:
        return <Employees />;
      default:
        throw new Error('Unknown step');
    }
  }

  const handleNext = () => {
    let ret = true;
    if (activeStep === 0) {
      if (!fullName || !fullName.trim()) {
        setFullNameError('Please enter Full name');
        ret = false;
      }
    }

    if (!ret) {
      return;
    }
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <Container component="main">
      <Typography component="h1" variant="h5">
        <b>Helper Form</b>
      </Typography>
      <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>

        <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <React.Fragment>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Form Submitted
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}

                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length - 1 ? 'Confirm' : 'Next'}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </React.Fragment>
      </Paper>
    </Container>
  );
}