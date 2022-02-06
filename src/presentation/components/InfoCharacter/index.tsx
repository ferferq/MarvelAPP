import { useNavigation, useRoute } from '@react-navigation/native';

import React, { memo } from 'react';

import {
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';
import { ICharacter } from '../../../domain/entities';
import { navigationProps } from '../../../main/routes/routes';
import { useSeeMore } from '../../hooks';
import { styles } from './styles';

interface IInfoCharacter {
    character: ICharacter;
}

function InfoCharacterComponent({ character }: IInfoCharacter) {
    const imageUri = character.thumbnail.path + '.' + character.thumbnail.extension;
    const navigator = useNavigation<navigationProps>();
    const { setInfo } = useSeeMore();

    const handleSeeMore = () => {
        setInfo({
            id: character.id,
            name: character.name,
            description: character.description,
            imageUri,
        });
        navigator.navigate('seeMore');
    }

    return (
        <TouchableOpacity onPress={handleSeeMore}>
            <View style={styles.container}>
                <Image
                    style={styles.avatar}
                    source={{ uri: imageUri}} />
                <Text style={styles.text}>{character.name}</Text>
            </View>
        </TouchableOpacity>
    )
}

export const InfoCharacter = memo(InfoCharacterComponent, (prevProps, nextProps) => {
    return Object.is(prevProps.character, nextProps.character);
});