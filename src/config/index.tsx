import {IConfig} from '../types'

const Config: IConfig = {

    host: '',
    requestTimeOut: 10,
    isDev: process.env.NODE_ENV === 'development',

    defaultImage: ''


};


export default Config
