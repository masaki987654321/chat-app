import axios from 'axios';

type action = {
    type: string,
    payload: any,
};

export const getIp = (): any => {
    return (dispatch: any) => {
        axios.get('http://localhost:3000/get_ip')
            .then(res => {
                console.log(res)
                dispatch(updateIp(res.data.data.ip))}
            ).catch(err => {
                console.log(err);
                dispatch(updateIp('fail to get ip'))
            })
    }
}

const updateIp = (ip: string): action => {
    console.log(ip)
    return {
        type: 'UPDATE_IP',
        payload: ip,
    }
}