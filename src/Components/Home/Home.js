import React from 'react';
import User from '../User/User';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import PeopleIcon from '@material-ui/icons/People';

const useStyles = makeStyles();

const Home = () => {
const classes = useStyles();

    return (
        <div>
                <AppBar position="static">
            <Toolbar variant="dense">
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <PeopleIcon />
            </IconButton>
            <Typography variant="h6" color="inherit"> Socail Buddy </Typography>
            </Toolbar>
        </AppBar>
            <User></User>
        </div>
    );
};

export default Home;