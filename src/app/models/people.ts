import { Address } from './address';

export class People {
    situacao: string = 'ATIVO';
    email: string = '';
    abertura: Date;
    endereco: Address = new Address();
    telefone: string = '';
}
