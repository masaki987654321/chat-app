import React from 'react';

import Button from '@material-ui/core/Button';
import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
    button: {
        marginLeft: theme.spacing(20),
    },
}));

// todo eventの型　any 使わない
type sendButtonProps = {
    value: string,
    onClick: (event: any) => void,
}

function SendButton(props: sendButtonProps) {
    const classes = useStyles();

    return (
        <Button 
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={() => props.onClick(props.value)}
        >create</Button>
    );
}

export default SendButton;