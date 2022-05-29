import * as React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

const steps = [
  {
    id:1,
    label: 'Question 1',
    description: `What are the two ways to handle data in react`,
    option: ['State & Props', 'Services & Components', 'State & Services'],
  },
  {
    id:2,
    label: 'Question 2',
    description: 'How many ways to defining variables in ES6',
    option: ['1', '3', '4'],
  },
  {
    id:3,
    label: 'Question 3',
    description: `Which of the following keyword is used to create a class inheritance`,
    option: ['Create', 'Inherits', 'Extends'],
  },
  {
    id:4,
    label: 'Question 4',
    description: `Which of the following used in react to increase performance`,
    option: ['Original DOM', 'Virtual DOM', 'A & B'],
  },
  {
    id:5,
    label: 'Question 5',
    description: `Which of the following is correct name of React`,
    option: ['React', 'React.js', 'All of the above'],
  },
];

export default function TextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const [selectItem, setSelectItem] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const onHandleSelect = (e) => {
    setSelectItem(e.target.value, (selectItem) => selectItem + 1);
  };


  return (
    <Box sx={{ maxWidth: 600, flexGrow: 1, margin: 'auto' }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <Typography>{steps[activeStep].label}</Typography>
      </Paper>
      <Box sx={{ height: 15, maxWidth: 400, width: '100%', p: 2 }}>
        {steps[activeStep].description}
      </Box>
      <Box sx={{ height: 200, maxWidth: 400, width: '100%', p: 2 }}>
        {steps[activeStep].option.map((data) => {
          return <p>
            <input type='radio' value={selectItem} onChange={onHandleSelect} />
            {data}
          </p>
        })}
      </Box>
      <MobileStepper
        variant="text"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === selectItem}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}