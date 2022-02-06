import { seeMoreContext } from '../../contexts';
import { useContext } from 'react';

export function useSeeMore () {
  const value = useContext(seeMoreContext);

  return value;
}