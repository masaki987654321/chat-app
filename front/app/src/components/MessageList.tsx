import React from 'react';

import { makeStyles, Theme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: '90%',
        maxWidth: 800,
        marginLeft: 'auto',
        marginRight: 'auto',
    }
}));

// todo propsの型をしっかり書く
type msgProps = {
    msg: string,
    ip: string,
}

function Message(props: msgProps) {
    const classes = useStyles();

    return (
        <List className={classes.root}>
            <ListItem alignItems="flex-start">
                <ListItemText primary={props.msg} />
            </ListItem>
            <Divider />
        </List>
    );
}

export default Message;