import { IHttpClient, HttpStatusCode } from '../../../../domain/models/protocols/http';
import { UnexpectedError } from '../../../../domain/errors';
import { IListCharacter, IListCharactersDTO } from '../../../../domain/models/useCases';
import { ICharacter, IContent } from '../../../../domain/entities';

export class RemoteListCharacters implements IListCharacter {
  constructor (
    private readonly url: string,
    private readonly httpClient: IHttpClient,
  ) {}
  
  async exec ({
    limitForPage, 
    name, 
    offset
  }: IListCharactersDTO): Promise<IContent<ICharacter[]>> {
    const queryName = name ? `&nameStartsWith=${name}` : '';
    const queryLimit = limitForPage ? `&limit=${limitForPage}` : '';
    const queryOffSet =  offset ? `&offset=${offset}` : '';

    const query = queryName + queryLimit + queryOffSet;

    const httpResponse = await this.httpClient.request({
      url: `${this.url}${query}`,
      method: 'get',
    });

    if (!httpResponse.body) throw new UnexpectedError();

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: {
        const lastSearched = { lastSearched: name };
        const returnCorrectly =  Object.assign(httpResponse.body.data, lastSearched);
        return returnCorrectly;
      }
      default: throw new UnexpectedError();
    };
  }
}