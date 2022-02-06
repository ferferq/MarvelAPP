import React, { memo } from 'react';

import {
    View,
    Text,
    Image
} from 'react-native';
import { ICharacter } from '../../../domain/entities';

import { styles } from './styles';

interface IInfoCharacter {
    character: ICharacter;
}

function InfoCharacterComponent({ character } : IInfoCharacter) {
    return (
        <View style={styles.container}>
            <Image 
            style={styles.avatar}
            source={{uri: character.thumbnail.path + '.' + character.thumbnail.extension}}/>
            <Text style={styles.text}>{character.name}</Text>
        </View>
    )
}

export const InfoCharacter = memo(InfoCharacterComponent, (prevProps, nextProps) => {
    return Object.is(prevProps.character, nextProps.character);
});