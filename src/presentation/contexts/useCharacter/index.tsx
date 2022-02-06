import { createContext, ReactNode, useCallback, useMemo, useState } from "react";
import { Alert } from "react-native";
import { ICharacter, IContent } from "../../../domain/entities";
import { UnexpectedError } from "../../../domain/errors";
import { makeRemoteFindSeason } from "../../../main/factories/useCases/character";
import { CONTAINER } from "../../constants";

interface ICharacterContext {
  contentCharacters?: IContent<ICharacter[]>;
  onListAllCharacters: () => Promise<void>;
  onSearch: (name: string) => Promise<void>;
  onSetPage: (numberPage: number) => Promise<void>;
  currentPage: number;
  loadingCharacter: boolean;
}

interface ICharacterProviderProps {
  children: ReactNode;
}

export const characterContext = createContext({} as ICharacterContext);

export function CharacterProvider(props: ICharacterProviderProps) {
  const listCharacters = useMemo(() => makeRemoteFindSeason(), []);
  const [contentCharacters, setContentCharacters] = useState<IContent<ICharacter[]> | undefined>(undefined);
  const [currentPage, setCurrentPage] = useState(1);
  const [loadingCharacter, setLoadingCharacter] = useState(false);

  const onListAllCharacters = useCallback(async () => {
    setLoadingCharacter(true);

    try {
      const data = await listCharacters.exec({ limitForPage: CONTAINER.limitForPage });
      setContentCharacters(data);
    } catch (err) {
      if (err instanceof UnexpectedError) {
        Alert.alert(err.message);
      }
      setContentCharacters(undefined);
    }

    setCurrentPage(1);
    setLoadingCharacter(false);
  }, []);

  const onSearch = useCallback(async (name: string) => {
    setLoadingCharacter(true);

    try {
      const data = await listCharacters.exec({ limitForPage: CONTAINER.limitForPage, name });
      setContentCharacters(data);
    } catch (err) {
      if (err instanceof UnexpectedError) {
        Alert.alert(err.message);
      }
      setContentCharacters(undefined);
    }

    setCurrentPage(1);
    setLoadingCharacter(false);
  }, [setContentCharacters, listCharacters]);

  const onSetPage = useCallback(async (numberPage: number) => {
    setLoadingCharacter(true);
    const offset = (numberPage - 1) * CONTAINER.limitForPage;

    try {
      const data = await listCharacters.exec({
        limitForPage: CONTAINER.limitForPage,
        name: contentCharacters?.lastSearched,
        offset,
      });
      setContentCharacters(data);
      setCurrentPage(numberPage);
    } catch (err) {
      if (err instanceof UnexpectedError) {
        Alert.alert(err.message);
      }
    }
    
    setLoadingCharacter(false);
  }, [setContentCharacters, listCharacters, contentCharacters]);

  return (
    <characterContext.Provider value={{
      contentCharacters,
      onListAllCharacters,
      onSearch,
      onSetPage,
      currentPage,
      loadingCharacter,
    }}>
      {props.children}
    </characterContext.Provider>
  )
}