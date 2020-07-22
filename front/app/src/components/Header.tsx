import React from "react";
import {makeStyles, Theme} from "@material-ui/core/styles";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
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

type headerProps = {
    title: string,
}

function Headers(props: headerProps) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h4" className={classes.title}>
                        {props.title}
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Headers;