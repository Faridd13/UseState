import { useState } from 'react';
import { View, Text, TextInput, Image, Button, ScrollView, FlatList, StyleSheet, Alert} from 'react-native';

const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [data, setData] = useState([
    { id: 1, name: '1. Polo Giordano Grey', price: 375.000, image: 'https://images.tokopedia.net/img/cache/500-square/VqbcmM/2022/7/30/18777b83-7bb0-46da-8923-e5372a84e5fb.jpg'},
    { id: 2, name: '2. Polo Giordano White', price: 450.000, image: 'https://media.karousell.com/media/photos/products/2023/12/28/polo_giordano_size_l_1703804470_ea4f925f_progressive.jpg'},
    { id: 3, name: '3. Polo Giordano Black', price: 400.000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScs4MNFTuK5BIRjutdJsEfHWUeAC0FEWXlCE-0-Ye-Bw&s'},
    { id: 4, name: '4. Rucas Short Pants', price: 1.300000, image: 'https://assets.voila.id/voila/images/product/rucas/2product-RCSGRNDCOMP001-Xms-2024-02-12T1545260700.jpeg'},
    { id: 5, name: '5. Rucas Long Pants', price: 1.500000, image: 'https://images.tokopedia.net/img/cache/700/VqbcmM/2023/3/26/fd844271-3027-4ffd-9e51-822e98286300.jpg'},
    { id: 6, name: '6. Rucas Long Pants', price: 1.800000, image: 'https://img.lazcdn.com/g/p/a2483082bbbff4ed97c1639584de2173.jpg_720x720q80.jpg'},
    { id: 7, name: '7. Hoodie BRTWL Drippin', price: 250.000, image: 'https://img.lazcdn.com/g/p/25be639465560314e8c1af50835df53e.jpg_720x720q80.jpg'},
    { id: 8, name: '8. Hoodie BRTWL Tengkorak', price: 250.000, image: 'https://static.desty.app/desty-omni/20230531/3eaae9aa00d043fdbe90860d0a56f601.jpg?x-oss-process=image/resize,w_500/format,webp'},
    { id: 9, name: '9. Hoodie BRTWL Decodes', price: 250.000, image: 'https://id-test-11.slatic.net/p/648cdb93442db0cd2c64743e78b3e78f.jpg'},
    { id: 10, name: '10. Rucas Shirt White', price: 750.000, image: 'https://id-test-11.slatic.net/p/f99590ae406102b36ad0437807d8d2ef.jpg'},
    { id: 11, name: '11. Rucas Shirt Tengkorak', price: 1.000000, image: 'https://img.lazcdn.com/g/ff/kf/S8cd0c6ca73184b32b9f831b808c5a49ad.jpg_720x720q80.jpg'},
    { id: 12, name: '12. Rucas Shirt Black', price: 900.000, image: 'https://media.karousell.com/media/photos/products/2024/4/23/rucas_the_initial_black_t_shir_1713893785_1912f0f9_progressive.jpg'},
    { id: 13, name: '13. Nike Air Jordan & Cristian Dior', price: 200000000, image: 'https://cdn.antaranews.com/cache/1200x800/2020/08/25/Air-Jordan-X-Dior.jpg'},
    { id: 14, name: '14. Nike Air Max 97', price: 2.500000, image: 'https://images.tokopedia.net/img/cache/500-square/VqbcmM/2023/2/4/11f0e2e8-7a8f-4dbc-84c9-d5718527b530.jpg'},
    { id: 15, name: '15. Nike Air Jordan 1 Retro High Tie Dye', price: 6.000000, image: 'https://tinkerlust.s3.ap-southeast-1.amazonaws.com/products/9888120d-8e91-4323-92a9-47c46908f47c/original/1280x1280/13022023224614865_MP-18503-SU-1.jpg'},
  ]);

  const handleLogin = () => {
    // belum tak isiin
  };

  const handleListItemPress = (item) => {
    Alert.alert(
      item.name,
      `Price : ${item.price}`,
      [
        {
          text: 'OK',
          onPress: () => console.log('OK Pressed'),
        },
      ],
      {
        cancelable: true,
      }
      // item.name,
      // <View>
      //   <Image source={{ uri: item.image }} style={{ width: 20, height: 20 }} />
      //   <Text>Price : {item.price}</Text>
      // </View>,
      // [
      //   {
      //     text: 'OK',
      //     onPress: () => console.log('OK Pressed'),
      //   },
      // ],
      // {
      //   cancelable: true,
      // }
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>AKELOY PRODUCTION</Text>
      <Image
        source={{ uri: 'https://static.desty.app/desty-page/hRRCYxKv8Ag1OXg7c2o79.png' }}
        style={styles.image}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Button title="Login" type="primary" onPress={handleLogin} />
      <Text style={styles.texttengah}>Outfit Recomendation</Text>
      <ScrollView>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <ListItem item={item} onPress={handleListItemPress} />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </ScrollView>
    </View>
  );
};

const ListItem = ({ item, onPress }) => {
  return (
    <View style={styles.listItem}>
      <Text>{item.name}</Text>
      <Image source={{ uri: item.image }} style={styles.imageitem} />
      <Button title="Cek Harga Item" onPress={() => onPress(item)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    marginHorizontal: 45,
  },
  texttengah: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginVertical: 20,
    marginHorizontal: 120,
  },
  imageitem: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginVertical: 20,
  },
  listItem: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
});

export default App;