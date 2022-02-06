import { characterContext } from '../../contexts';
import { useContext } from 'react';

export function useCharacter () {
  const value = useContext(characterContext);

  return value;
}