import { CharacterProvider } from "../../../presentation/contexts";
import { ReactNode } from "react";

interface MakeShareInfoContextsProvidersDTO{
  children: ReactNode;
}

export function MakeShareInfoContextsProviders({ children }: MakeShareInfoContextsProvidersDTO) {
  return(
    <CharacterProvider>
      {children}
    </CharacterProvider>
  );
}