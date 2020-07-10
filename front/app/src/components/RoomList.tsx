import React from 'react';

import { makeStyles, Theme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
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
                <ListItemAvatar>
                    <Avatar>{nameInitial}</Avatar>
                </ListItemAvatar>
                <ListItemText primary={props.name} />
            </ListItem>
            <Divider variant="inset" component="li" />
        </List>
    );
}

export default RoomList;