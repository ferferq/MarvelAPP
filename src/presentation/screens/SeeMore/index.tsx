import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useSeeMore } from '../../hooks';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { navigationProps } from '../../../main/routes/routes';

export function SeeMore() {
  const { info } = useSeeMore();
  const navigator = useNavigation<navigationProps>();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => { navigator.navigate('home') }}
        >
          <Icon
            name='left'
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.containerInfo}>
        <Image
          style={styles.avatar}
          source={{ uri: info.imageUri }} />
        <Text style={styles.text}>{info.name}</Text>
        <Text style={styles.text}>Descrição:</Text>
        <Text style={styles.description}>{info.description.length > 1 ? info.description : 'Sem descrição'}</Text>
      </View>
    </View>
  );
}