import { Cliente } from './cliente';

export class ResponseCliente{
    constructor(
        public mensaje:any,
        public cliente:Cliente,
        public error:string
    ){}
}