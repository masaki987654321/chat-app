import { createActions } from 'redux-actions';

type createdRoom = {
    id: number;
    name: string;
    ip: string;
    craeted_at: string;
    updated_at: string;
};

const actions: any = createActions(
    {
        rooms: {
            create(value: string): createdRoom{
                
                // todo メッセージがからのさいの処理
                // if (text === '') {
                //     alert('メッセージを入力してください');
                //     return false;
                // }

                // todo　httpリクエストを書く
                //Httpリクエスト room作成　room追加したroomが帰ってくる
                let response: any = `{
                    "id":"1",
                    "name":"${value}",
                    "ip":"${value}",
                    "created_at":"2020-06-26T13:21:06.093Z",
                    "updated_at":"2020-06-26T13:21:06.093Z"
                }`;
                console.log(response);
                let payload: createdRoom = JSON.parse(response);
                console.log(payload);
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
        },
    },
);

export { actions };