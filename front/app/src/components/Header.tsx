import React from "react";
import {makeStyles, Theme} from "@material-ui/core/styles";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
// import '../styles/ButtonAppBar.css';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flexGrow: 7,
    },
    menuButton: {
        marginRigth: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

function Headers() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h4" className={classes.title}>
                        ChatApp
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Headers;