import React, { memo, useState } from 'react';
import { View, TextInput, Keyboard, Text } from 'react-native';
import { styles } from './styles';

interface ISearch {
    maxLength?: number;
    title: string;
    onSearch: (words: string) => Promise<void>;
}

function SearchComponent ( { onSearch, title, maxLength=140 } : ISearch) {
    const [loading, setLoading] = useState(false);
    const [wordsToSearch, setWordsToSearch] = useState('');

    const handleSearch = async () => {
        setLoading(true);
        await onSearch(wordsToSearch);
        Keyboard.dismiss();
        setLoading(false);
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
                editable={!loading}
                onBlur={handleSearch}
            />
        </View>
    )
}

export const Search = memo(SearchComponent, () => true);