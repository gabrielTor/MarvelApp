import React from 'react';
import { Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function CharacterCard({image, name, id}) {

  const navigation = useNavigation();

  return (
    <TouchableOpacity 
        style={styles.container}
        onPress={() => navigation.navigate('Details', { id })}
        >
        <Image 
            style={styles.image}
            source={{uri: image}}
        />
      <Text style={styles.font}>{name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    container:{
      color: 'blue',
      alignItems: 'center',
    },
    image:{
      width: 250,
      height: 250
    },
    font:{
      fontWeight: 'bold',
      fontSize: 30
    }
  });