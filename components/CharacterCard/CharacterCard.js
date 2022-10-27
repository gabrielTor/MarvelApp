import React from 'react';
import { Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function CharacterCard({image, name}) {
	const navigation = useNavigation();
  return (
    <TouchableOpacity 
        style={styles.container}
        onPress={() => navigation.navigate('Detail')}
        >
        <Image 
            style={styles.image}
            source={image}
        />
      <Text style={styles.font}>{name}</Text>
    </TouchableOpacity>
  );
}