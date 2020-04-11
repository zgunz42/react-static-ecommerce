import React from 'react';
import svg from 'images/logo.svg';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        display: 'flex',
        fontWeight: theme.typography.fontWeightMedium,
        fontSize: 18,
    },
    svg: {
        width: 20,
        height: 25, // Needed for Safari
        marginRight: 12,
    },
});

function Logo(props) {
    const { classes, component: Component = 'div', ...other } = props;
    return (
        <Component className={classes.root} {...other}>
            <img className={classes.svg} src={svg} alt="logo" /> Hidroni Store
        </Component>
    );
}

export default withStyles(styles)(Logo);
