import { CharacterProvider, SeeMoreProvider } from "../../../presentation/contexts";
import { ReactNode } from "react";

interface MakeShareInfoContextsProvidersDTO{
  children: ReactNode;
}

export function MakeShareInfoContextsProviders({ children }: MakeShareInfoContextsProvidersDTO) {
  return(
    <CharacterProvider>
      <SeeMoreProvider>
        {children}
      </SeeMoreProvider>
    </CharacterProvider>
  );
}