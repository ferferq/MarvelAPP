import React, { memo, useCallback, useMemo } from 'react';

import {
    View,
    SectionList,
    Text
} from 'react-native';
import { ICharacter, IContent } from '../../../domain/entities';
import { useCharacter } from '../../hooks';
import { InfoCharacter } from '../InfoCharacter';
import { Pagination } from '../Pagination';

import { styles } from './styles';

interface IListCharacter {
    limitForPage: number;
    contentCharacters: IContent<ICharacter[]>;
}

function ListCharacterComponent({ limitForPage, contentCharacters }: IListCharacter) {
    const { currentPage, onSetPage } = useCharacter();
    const sectionListData = useMemo(() => [{
        title: 'Nome',
        data: contentCharacters.results
    }], [contentCharacters]);

    const handleSetPage = useCallback(async (numberPage: number) => {
        onSetPage(numberPage);
    }, [onSetPage]);

    const infoCharacter = (character: ICharacter) => {
        return (
            <InfoCharacter
                character={character}
            />
        );
    };

    const infoCharacterHeader = (title: string) => {
        return(
            <View style={styles.containerHeader}>
                <Text style={styles.textHeader}>{title}</Text>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <View>
                <SectionList
                    sections={sectionListData}
                    keyExtractor={(item, index) => item.name + index}
                    renderItem={({ item }) => infoCharacter(item)}
                    renderSectionHeader={({ section: { title } }) => infoCharacterHeader(title)}
                />
            </View>
            
            <View>
                <Pagination
                    totalCountOfRegisters={contentCharacters.total}
                    registerPerPage={limitForPage}
                    currentPage={currentPage}
                    onPageChange={handleSetPage}
                />
            </View>
            
        </View>
    );
}

export const ListCharacter = memo(ListCharacterComponent, (prevProps, nextProps) => {
     const resultIsTheSame = Object.is(prevProps.contentCharacters, nextProps.contentCharacters);
     return resultIsTheSame;
});