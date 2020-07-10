import { createActions } from 'redux-actions';

// todo 型をしっかり書く
type rooms = any;

const actions: any = createActions(
    {
        rooms: {
            index(): rooms{
                // todo　httpリクエストを書く
                //Httpリクエスト room作成　room追加したroomが帰ってくる
                let response: any = `[{"id":1,"name":"inittiall","ip":"inittiaalka","created_at":"2020-06-26T13:21:06.093Z","updated_at":"2020-06-26T13:21:06.093Z"},{"id":2,"name":"dkdkdkdkdkkfdkjg","ip":"djjfkdsjgakf","created_at":"2020-06-26T13:21:21.145Z","updated_at":"2020-06-26T13:21:21.145Z"}]`;
                console.log(response);
                let payload: rooms = JSON.parse(response);
                console.log(payload);
                return payload;
            },

            create(value: string): rooms{
                
                // todo メッセージがからのさいの処理
                // if (text === '') {
                //     alert('メッセージを入力してください');
                //     return false;
                // }

                // todo　httpリクエストを書く
                //Httpリクエスト room作成　room追加したroomが帰ってくる
                let response: any = `[{"id":1,"name":"${value}","ip":"${value}","created_at":"2020-06-26T13:21:06.093Z","updated_at":"2020-06-26T13:21:06.093Z"},{"id":2,"name":"${value}","ip":"${value}","created_at":"2020-06-26T13:21:21.145Z","updated_at":"2020-06-26T13:21:21.145Z"}]`;
                console.log(response);
                let payload: rooms = JSON.parse(response);
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