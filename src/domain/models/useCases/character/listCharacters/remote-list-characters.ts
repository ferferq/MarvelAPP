import { ICharacter, IContent } from '../../../../entities';

export interface IListCharactersDTO {
  name?: string;
  limitForPage?: number,
  offset?: number,
}

export interface IListCharacter {
  exec: (params: IListCharactersDTO) => Promise<IContent<ICharacter[]>>;
}