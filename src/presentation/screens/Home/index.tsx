import React, { memo, useCallback, useEffect, useState } from 'react';
import { Alert, Text, View } from 'react-native';
import { ICharacter, IContent } from '../../../domain/entities';
import { IListCharacter } from '../../../domain/models/useCases';
import { Header } from '../../components/Header';
import { ListCharacter } from '../../components/ListCharacter';
import { Search } from '../../components/Search';
import { CONTAINER } from '../../constants';

import { styles } from './styles';

interface IHome {
    listCharacters: IListCharacter;
}

export function Home({listCharacters} : IHome) {
    const [contentCharacters, setContentCharacters] = useState<IContent<ICharacter[]> | undefined>(undefined);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        if(!contentCharacters)
        (async () => {
            const data = await listCharacters.exec({limitForPage: CONTAINER.limitForPage});
            setContentCharacters(data);
            setCurrentPage(1);
        })()
    }, [contentCharacters]);

    const handleSearch = useCallback(async (name: string) => {
        const data = await listCharacters.exec({limitForPage: CONTAINER.limitForPage, name});
        if (data.results.length < 1) {
            setContentCharacters(undefined);
            Alert.alert("Personagem não encontrado!");
        }
        setContentCharacters(data);
        console.log(data)
        setCurrentPage(1);
    }, [setContentCharacters, listCharacters]);

    const handleSetPage = useCallback(async (numberPage: number) => {
        const offset = (numberPage - 1) * CONTAINER.limitForPage;
        console.log(offset, contentCharacters?.lastSearched);
        const data = await listCharacters.exec({
            limitForPage: CONTAINER.limitForPage, 
            name: contentCharacters?.lastSearched,
            offset, 
        });
        setContentCharacters(data);
        setCurrentPage(numberPage);
    }, [setContentCharacters, listCharacters, contentCharacters]);

    return (
        <View style={styles.container}>
            <Header />
            <Search 
                onSearch={handleSearch} 
                title='Nome do Personagem'
            />
            {
                !contentCharacters ? (
                    <Text>Pesquisando</Text>
                ) : (
                    <ListCharacter 
                        contentCharacter={contentCharacters} 
                        limitForPage={CONTAINER.limitForPage} 
                        onSetPage={handleSetPage}
                        currentPage={currentPage}
                    />
                )
            }
        </View>
    )
}