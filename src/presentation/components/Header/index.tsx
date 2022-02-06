import React, { memo } from 'react';

import {
    View,
    Text
} from 'react-native';

import { styles } from './styles';

function HeaderComponent(){
    return (
        <View style={styles.container}>
            <View style={styles.logo}>
                <Text style={styles.title}>BUSCA MARVEL</Text>
                <Text style={styles.subtitle}>TESTE FRONT-END</Text>
            </View>
            <View style={styles.streak}/>
        </View>
    )
}

export const Header = memo(HeaderComponent, () => true);