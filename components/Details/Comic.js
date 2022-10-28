import { Text, View, Image } from 'react-native';

export default function Comic({ name, image }) {

    return (
      <View style={{margin: 10}}>
        <Image
            style={{width: 400, height: '95%'}}
            source={{uri: image}}
        />
        <Text style={{textAlign: 'center', fontSize: 25}}>{name}</Text>
      </View>
    )
}