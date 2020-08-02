import { createActions } from 'redux-actions';

// 型の付けかた調べる
type rooms = any;
type messages = any;
type room = any[];
type message = any[];

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

            create(value: string): void{
                
                if (value === '') {
                    alert('ルーム名を入力してください');
                } else {
                    const reqCreate: any = new XMLHttpRequest();
                    reqCreate.open('POST', 'http://localhost:3000/rooms', false)
                    reqCreate.setRequestHeader('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
                    reqCreate.send('name=' + value);                   
                }

                return
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
                return payload;
            },

            add(newRoom: room): room {
                const payload: room = newRoom;
                return payload;
            }
        },
        messages :{
            show(room_id: string): messages {
                const req: any = new XMLHttpRequest();
                req.open('GET', 'http://localhost:3000/messages/' + room_id, false)
                req.send(null);
                let payload: messages = [];
                if(req.status === 200) {
                    let res: any = req.responseText;
                    payload = JSON.parse(res)
                }
                return payload;
            },
            
            create(room_id: string, value: string): void {
                if (value === '') {
                    alert('メッセージを入力してください');
                } else {
                    const reqCreate: any = new XMLHttpRequest();
                    reqCreate.open('POST', 'http://localhost:3000/messages', false)
                    reqCreate.setRequestHeader('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
                    reqCreate.send('text=' + value + '& room_id=' + room_id);                   
                }
                return
            },

            change(value: string) {
                const payload: string = value;
                return payload;
            },

            add(newMessage: message): message {
                const payload: message = newMessage;
                return payload;
            }
        },
        ipAdress :{
            getAdress(): any {
                const req: any = new XMLHttpRequest();
                req.open('GET', 'http://localhost:3000/get_ip', false)
                req.send(null);
                let payload: string = '';
                if(req.status === 200) {
                    let res: any = req.responseText;
                    res = JSON.parse(res);
                    payload = res.data.ip
                }
                return payload;
            }
        }
    },
);

export { actions };