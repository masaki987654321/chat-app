import React from 'react';

import { makeStyles, Theme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        width: '80%',
        maxWidth: 500,
        backgroundColor: theme.palette.background.paper,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    inline: {
        display: 'inline',
    },
}));

// todo propsの型をしっかり書く
type roomListProps = {
    name: string,
    ip: string,
}


function RoomList(props: roomListProps) {
    const classes = useStyles();
    const nameInitial: string = props.name.slice(0,1);

    return (
        <List className={classes.root}>
            <ListItem alignItems="flex-start">
                <ListItemText primary={props.name} />
            </ListItem>
            <Divider />
        </List>
    );
}

export default RoomList;