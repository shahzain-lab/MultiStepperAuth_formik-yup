import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SignupForm from '../Signup/SignupForm';
import PaymentForm from '../Payment/PaymentForm';
import ContactForm from '../Comments/CommentsForm';
import { FinishBox, StepperStyle } from '../../styles/Stepper.style';

const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad'];

const handleStep = (step: number, handleComplete: () => void) => {
    switch (step) {
        case 0:
            return <SignupForm handleNext={handleComplete} />
        case 1:
            return <PaymentForm handleNext={handleComplete} />
        case 2:
            return <ContactForm handleNext={handleComplete} />
        default:
            return 'no index specified'
    }

};
export default function StepperForm() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [completed, setCompleted] = React.useState<{
        [k: number]: boolean;
    }>({});

    const totalSteps = () => {
        return steps.length;
    };

    const completedSteps = () => {
        return Object.keys(completed).length;
    };

    const isLastStep = () => {
        return activeStep === totalSteps() - 1;
    };

    const allStepsCompleted = () => {
        return completedSteps() === totalSteps();
    };

    const handleNext = () => {
        const newActiveStep =
            isLastStep() && !allStepsCompleted()
                ? // It's the last step, but not all steps have been completed,
                // find the first step that has been completed
                steps.findIndex((step, i) => !(i in completed))
                : activeStep + 1;
        setActiveStep(newActiveStep);
    };




    const handleComplete = () => {
        const newCompleted = completed;
        newCompleted[activeStep] = true;
        setCompleted(newCompleted);
        handleNext();
    };

    const handleReset = () => {
        setActiveStep(0);
        setCompleted({});
    };

    return (
        <StepperStyle>
            <Stepper nonLinear activeStep={activeStep} alternativeLabel>
                {steps.map((label, index) => (
                    <Step key={label} completed={completed[index]}>
                        <StepButton color="inherit">
                            {label}
                        </StepButton>
                    </Step>
                ))}
            </Stepper>
            {allStepsCompleted() ? (
                <FinishBox>
                    <Typography sx={{ mt: 6, mb: 1 }}>
                        You have submited your information - Thanks
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button onClick={handleReset}>Reset</Button>
                    </Box>
                </FinishBox>
            ) :
                <> {handleStep(activeStep, handleComplete)}</>
            }
        </StepperStyle>
    );
}


{/* <div>
    {allStepsCompleted() ? (
        <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
                All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Box sx={{ flex: '1 1 auto' }} />
                <Button onClick={handleReset}>Reset</Button>
            </Box>
        </React.Fragment>
    ) : (
        <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Button
                    color="inherit"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mr: 1 }}
                >
                    Back
                </Button>
                <Box sx={{ flex: '1 1 auto' }} />
                <Button onClick={handleNext} sx={{ mr: 1 }}>
                    Next
                </Button>
                {activeStep !== steps.length &&
                    (completed[activeStep] ? (
                        <Typography variant="caption" sx={{ display: 'inline-block' }}>
                            Step {activeStep + 1} already completed
                        </Typography>
                    ) : (
                        <Button onClick={handleComplete}>
                            {completedSteps() === totalSteps() - 1
                                ? 'Finish'
                                : 'Complete Step'}
                        </Button>
                    ))}
            </Box>
        </React.Fragment>
    )}
</div> */}