import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { Header } from '../../components/Header';
import { ListCharacter } from '../../components/ListCharacter';
import { Loading } from '../../components/loading';
import { Search } from '../../components/Search';
import { CONTAINER } from '../../constants';
import { useCharacter } from '../../hooks';

import { styles } from './styles';

export function Home() {
    const {
        onSearch,
        onListAllCharacters,
        contentCharacters,
        loadingCharacter,
    } = useCharacter();

    useEffect(() => {
        if(!contentCharacters)
        onListAllCharacters();
    }, [contentCharacters]);

    const onRenderTheInfo = () =>  {
        if (contentCharacters && contentCharacters.results.length < 1) {
            return (
                <View style={styles.containerNotFount}>
                    <Text style={styles.textNotFount}>Personagem não encontrado</Text>
                </View>
            );
        }

        if (!contentCharacters || loadingCharacter) {
            return (
                <View style={styles.containerLoading}>
                <Loading size={'large'} />
            </View>
            );
        }

        return (
            <ListCharacter  
                limitForPage={CONTAINER.limitForPage} 
                contentCharacters={contentCharacters}
            />
        );
    };

    return (
        <View style={styles.container}>
            <Header />
            <Search 
                onSearch={onSearch} 
                title='Nome do Personagem'
            />
            {
              onRenderTheInfo()
            }
        </View>
    )
}