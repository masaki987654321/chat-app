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
            create(text: string): createdRoom{
                // todo
                //Httpリクエスト room作成　room追加したroomが帰ってくる
                let response: any = {
                    "id":1,
                    "name":text,
                    "ip":text,
                    "created_at":"2020-06-26T13:21:06.093Z",
                    "updated_at":"2020-06-26T13:21:06.093Z"
                };
                let payload: createdRoom = JSON.parse(response);
                return payload;
            },

            destroy(id: number): number{
                // todo
                //Httpリクエスト room削除
                let payload: number = id;
                return payload;
            },
        },
    },
);

export { actions };