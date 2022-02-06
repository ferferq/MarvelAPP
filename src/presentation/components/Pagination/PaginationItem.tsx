import React, { memo } from 'react';
import { TouchableOpacity, Text } from 'react-native';

import { styles, buttonCurrent, textCurrent } from './styles';

interface PaginationItemProps {
  isCurrent?: boolean;
  number: number;
  onPageChange: (page: number) => void;
}

export function PaginationItem({
  isCurrent, number, onPageChange
}: PaginationItemProps) {
  return (
    <TouchableOpacity
      disabled={isCurrent}
      style={isCurrent ? buttonCurrent : styles.button}
      onPress={() => {!isCurrent && onPageChange(number)}}
    >
      <Text
        style={isCurrent ? textCurrent : styles.text}
      >
        {number}
      </Text>
    </TouchableOpacity>
  );
}