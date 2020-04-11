import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from 'modules/components/Paper';

const styles = theme => ({
  root: {
    marginTop: theme.spacing(2),
  },
});

function FormFeedback(props) {
  const { children, classes, className, variant } = props;

  return (
    <Paper
      icon
      padding
      variant={variant}
      className={clsx(classes.root, classes[variant], className)}
    >
      <Typography color="inherit" component="span">
        {children}
      </Typography>
    </Paper>
  );
}

FormFeedback.displayName = 'FormFeedback';

FormFeedback.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['error', 'success']).isRequired,
};

export default withStyles(styles)(FormFeedback);
