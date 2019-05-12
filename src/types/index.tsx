






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