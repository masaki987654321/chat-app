import React from 'react';

import Button from '@material-ui/core/Button';
import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
    button: {
        margin: theme.spacing(1),
    },
    }));

// todo eventの型　any 使わない
type roomButtonProps = {
    value: string,
    onClick: any,
}

function RoomButton(props: roomButtonProps) {
    const classes = useStyles();
    console.log(props);

    return (
        <Button 
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={() => props.onClick(props.value)}
        >作成</Button>
    );
}

export default RoomButton;