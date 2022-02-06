import React from 'react';
import { Home } from '../../../presentation/screens/Home';
import { makeRemoteFindSeason } from '../useCases/character';

export function MakeHome() {
  return (
    <Home listCharacters={makeRemoteFindSeason()}/>
  );
}