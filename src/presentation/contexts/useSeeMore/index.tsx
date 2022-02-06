import { createContext, ReactNode, useState } from "react";
import { ISeeMore } from "../../../domain/entities/see-more";

interface ISeeMoreContext {
    info: ISeeMore;
    setInfo: (info: ISeeMore) => void;
}

interface ICharacterProviderProps {
  children: ReactNode;
}

export const seeMoreContext = createContext({} as ISeeMoreContext);

export function SeeMoreProvider(props: ICharacterProviderProps) {
  const [info, setInfo] = useState<ISeeMore>({} as ISeeMore);

  return (
    <seeMoreContext.Provider value={{
        info,
        setInfo
    }}>
      {props.children}
    </seeMoreContext.Provider>
  );
}