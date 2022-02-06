import React, { memo, useState } from 'react';
import { View, TextInput, Keyboard, Text } from 'react-native';
import { useCharacter } from '../../hooks';
import { styles } from './styles';

interface ISearch {
    maxLength?: number;
    title: string;
    onSearch: (words: string) => Promise<void>;
}

function SearchComponent ( { onSearch, title, maxLength=140 } : ISearch) {
    const { loadingCharacter } = useCharacter();
    const [wordsToSearch, setWordsToSearch] = useState('');

    const handleSearch = async () => {
        await onSearch(wordsToSearch);
        Keyboard.dismiss();
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                {title}
            </Text>
            <TextInput
                style={styles.textInput}
                maxLength={maxLength}
                onChangeText={setWordsToSearch}
                value={wordsToSearch}
                editable={!loadingCharacter}
                onBlur={handleSearch}
            />
        </View>
    )
}

export const Search = memo(SearchComponent, () => true);