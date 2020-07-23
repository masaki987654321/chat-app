import React from "react";
import {makeStyles, Theme} from "@material-ui/core/styles";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import '../styles/RoomName.css';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flexGrow: 7,
    },
    title: {
        flexGrow: 1,
    },
}));

type roomNameProps = {
    title: string,
}

function RoomName(props: roomNameProps) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h5" className={classes.title}>
                        {props.title}
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default RoomName;