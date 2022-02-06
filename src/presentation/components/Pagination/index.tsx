import React, { memo } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import { PaginationItem } from './PaginationItem'
import { styles, iconArrowDisabled } from './styles';

interface IPagination {
  totalCountOfRegisters: number;
  registerPerPage?: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const siblingsCount = 1;

const generatePagesArray = (from: number, to: number) => {
  return [...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1;
    })
    .filter(page => page > 0)
}

function PaginationCompoenent({
  totalCountOfRegisters, registerPerPage = 10, currentPage, onPageChange,
}: IPagination) {
  const lastPage = Math.ceil(totalCountOfRegisters / registerPerPage);

  const previousPages = currentPage > 1
  ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
  : [];

  const nextPages = currentPage < lastPage
  ? generatePagesArray(currentPage, Math.min(currentPage + siblingsCount, lastPage))
  : [];

  return (
    <View style={styles.container}>
      <TouchableOpacity
        disabled={currentPage === 1}
        onPress={() => {onPageChange(currentPage - 1)}}
      >
        <Icon
          name='caretleft'
          style={currentPage < 2 ? iconArrowDisabled : styles.iconArrow}
        />
      </TouchableOpacity>


      <View style={styles.numbers}>
        {
          currentPage > (1 + siblingsCount) && (
            <>
              <PaginationItem onPageChange={onPageChange} number={1} />
              {currentPage > (2 + siblingsCount) &&
                (<Text>..</Text>)
              }
            </>
          )
        }

        {previousPages.length > 0 && previousPages.map(page => {
          return <PaginationItem key={page} onPageChange={onPageChange} number={page} />
        })}

        <PaginationItem onPageChange={onPageChange} number={currentPage} isCurrent />

        {nextPages.length > 0 && nextPages.map(page => {
          return <PaginationItem key={page} onPageChange={onPageChange} number={page} />
        })}

        {
          (currentPage + 1 + siblingsCount) < lastPage &&
          (<Text>..</Text>)
        }

        {(currentPage + siblingsCount) < lastPage && (<PaginationItem onPageChange={onPageChange} number={lastPage} />)}
      </View>

      <TouchableOpacity
        disabled={currentPage === lastPage}
        style={styles.pressArrow}
        onPress={() => { onPageChange(currentPage + 1) }}
      >
        <Icon
          name='caretright'
          style={currentPage === lastPage ? iconArrowDisabled : styles.iconArrow}
        />
      </TouchableOpacity>
    </View>
  );
}

export const Pagination = memo(PaginationCompoenent, (prevProps, nextProps) => {
  const totalCountOfRegistersIsTheSame = prevProps.totalCountOfRegisters === nextProps.totalCountOfRegisters;
  const currentPageIsTheSame = prevProps.currentPage === nextProps.currentPage;
  const registerPerPageIsTheSame = prevProps.registerPerPage === prevProps.registerPerPage;
  
  return totalCountOfRegistersIsTheSame && currentPageIsTheSame && registerPerPageIsTheSame;
});