import { View, Image, Text, StyleSheet } from 'react-native';

export default function Information({ image, name, description }) {
    return (
      <View style={styles.container}>
        <Image 
          style={styles.image}
          source={{uri: image}}
        />
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    )
}

const styles = StyleSheet.create({
    container:{
      color: 'blue',
      alignItems: 'center'
    },
    title:{
        marginTop: '10%',
        fontWeight: 'bold',
        fontSize: 50
    },
    description:{
        width: 30,
        height: 30
    }
  });