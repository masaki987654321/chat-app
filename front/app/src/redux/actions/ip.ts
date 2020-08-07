import axios from 'axios';

type action = {
    type: string,
    payload: any,
};

export const getIp = (): any => {
    return (dispatch: any) => {
        axios.get('http://localhost:3000/get_ip')
            .then(res => {
                dispatch(updateIp(res.data.ip))}
            ).catch(err => {
                console.log(err);
                dispatch(updateIp(null))
            })
    }
}

const updsateIp = (ip: string): action => {
    return {
        type: 'UPDATE_IP',
        payload: ip,
    }
}