import React from 'react';

import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
    button: {
        margin: theme.spacing(1),
    },
    }));

type roomButtonProps = {
    value: string,
    onClick: (value: string) => any,
}

function RoomButton(props: roomButtonProps) {
    const classes = useStyles();

    return (
        <Button 
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={() => props.onClick(props.value)}>
            <SendIcon />
        </Button>
    );
}

export default RoomButton;