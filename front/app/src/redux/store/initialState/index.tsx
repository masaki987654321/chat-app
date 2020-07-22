interface initialState {
    rooms: any[],
    value: string,
    text: string,
    messages: any[],
    myIp: string,
}
// todo interfave しっかり書く
// reducer action.apyload で　コンパイルエラー出る
export const initialState: any = {
    rooms: [],
    value: '',
    text: '',
    messages: [],
    myIp: '',
};