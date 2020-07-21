import { createActions } from 'redux-actions';
import { request } from 'https';

// todo 型をしっかり書く
type rooms = any;
type messages = any;

const actions: any = createActions(
    {
        rooms: {
            // todo　redux-thunkを使う
            index(): rooms{
                const req: any = new XMLHttpRequest();
                req.open('GET', 'http://localhost:3000/rooms', false)
                req.send(null);
                let payload: rooms = [];
                if(req.status === 200) {
                    let res: any = req.responseText;
                    payload = JSON.parse(res)
                }
                return payload;
            },

            create(value: string): rooms{
                
                if (value === '') {
                    alert('ルーム名を入力してください');
                } else {
                    const reqCreate: any = new XMLHttpRequest();
                    reqCreate.open('POST', 'http://localhost:3000/rooms', false)
                    reqCreate.setRequestHeader('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
                    // todo ip を取得する
                    reqCreate.send('name=' + value + '& ip=123456789');                   
                }

                const req: any = new XMLHttpRequest();
                req.open('GET', 'http://localhost:3000/rooms', false)
                req.send(null);
                let payload: rooms = [];
                if(req.status === 200) {
                    let res: any = req.responseText;
                    payload = JSON.parse(res)
                }
                return payload;
            },

            destroy(id: number): number{
                // todo　httpリクエストを書く
                //Httpリクエスト room削除
                let payload: number = id;
                return payload;
            },

            change(value: string) {
                const payload: string = value;
                return payload;
            },

            show(room_id: string): messages {
                const req: any = new XMLHttpRequest();
                req.open('GET', 'http://localhost:3000/rooms/' + room_id, false)
                req.send(null);
                let payload: messages = [];
                if(req.status === 200) {
                    let res: any = req.responseText;
                    payload = JSON.parse(res)
                }
                console.log(payload);
                return payload;
            },
        },
        messages :{
            create(room_id: string, value: string): messages {
                if (value === '') {
                    alert('メッセージを入力してください');
                } else {
                    const reqCreate: any = new XMLHttpRequest();
                    reqCreate.open('POST', 'http://localhost:3000/messages', false)
                    reqCreate.setRequestHeader('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
                    // todo ip を取得する
                    reqCreate.send('text=' + value + '& ip=123456789 & room_id=' + room_id);                   
                }

                const req: any = new XMLHttpRequest();
                console.log(room_id);
                req.open('GET', 'http://localhost:3000/rooms/' + room_id, false)
                req.send(null);
                let payload: messages = [];
                if(req.status === 200) {
                    let res: any = req.responseText;
                    payload = JSON.parse(res)
                }
                console.log(payload);
                return payload;
            }
        }
    },
);

export { actions };