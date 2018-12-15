
export interface IAsyncResult<T> {
    res: T;
    err: any;
}

export interface IResponse {
    data: any;
    status: number;
    message: string;
}

export interface IConfig {
    host: string,
    requestTimeOut: number,
    isDev: boolean,
    defaultImage: string,
    isIOS: boolean,
    isAllScreen: boolean
}

export interface IReduxAction {
    type: string,
    payload: any
}

export enum EDataType {
    String = 'String',
    Object = 'Object',
    Array = 'Array',
    Function = 'Function',
    Number = 'Number',
    Boolean = 'Boolean',
    Null = 'Null',
    Undefined = 'Undefined',
    RegExp = 'RegExp',
    Date = 'Date'
}