import { makeMarvelUrl, makeAxiosHttpClient } from '../../../../factories/http'
import { RemoteListCharacters } from '../../../../../data/useCases/character';
import { IListCharacter } from '../../../../../domain/models/useCases';

export const makeRemoteFindSeason = (): IListCharacter =>
  new RemoteListCharacters(makeMarvelUrl('characters'), makeAxiosHttpClient());