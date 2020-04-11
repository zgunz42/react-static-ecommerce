import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import MuiStepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

const styles = () => ({
  root: {
    maxWidth: 500,
  },
  stepper: { padding: 0 },
});

function Stepper(props) {
  const { activeIndex, classes, className, steps } = props;

  return (
    <div className={clsx(classes.root, className)}>
      <MuiStepper activeStep={activeIndex} className={classes.stepper}>
        {steps.map((label, index) => {
          return (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          );
        })}
      </MuiStepper>
    </div>
  );
}

Stepper.displayName = 'Stepper';

Stepper.propTypes = {
  activeIndex: PropTypes.number.isRequired,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  steps: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default withStyles(styles)(Stepper);
