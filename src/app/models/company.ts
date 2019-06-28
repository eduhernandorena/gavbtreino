import { Partner } from './partner';
import { Activity } from './activity';
import { People } from './people';

export class Company extends People {
    cnpj: string = '';
    status: string = '';
    capital_social: number = 0;
    tipo: string = '';
    natureza_juridica: string = '';
    porte: string = '';
    fantasia: string = '';
    nome: string = '';
    atividade_principal: Activity[] = null;
    atividades_secundarias: Activity[] = null;
    qsa: Partner[] = null;
}
