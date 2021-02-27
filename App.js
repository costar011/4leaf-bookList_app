import React from 'react';
import {
  StatusBar,
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  FlatList,
} from 'react-native';

const booklist = [
  {
    id: 'book1',
    title: '언어의 온도',
    author: `이기주`,
  },
  {
    id: 'book2',
    title: '리액트를 다루는 기술',
    author: `김민준`,
  },
  {
    id: 'book3',
    title: 'Node.js 교과사',
    author: `최원영`,
  },
  {
    id: 'book4',
    title: '자바의 정석',
    author: `남긍석`,
  },
  {
    id: 'book5',
    title: '연애의 고수가 되는 법',
    author: `낙타`,
  },
];

const Item = ({title, author}) => {
  return (
    <View style={styles.item}>
      <Text>{title}</Text>
      <Text>{author}</Text>
    </View>
  );
};

const App = () => {
  const renderItem = ({item}) => {
    return <Item title={item.title} author={item.author} />; // {}를 쓴 후 return 써야함 안그러면 화면에 안나온다.
  };
  return (
    <View style={styles.container}>
      <View style={styles.topbox}>
        <Text style={styles.topfont}>Shop</Text>
      </View>
      <View style={styles.middlebox}>
        <Text style={styles.middlefont}>Book List</Text>
      </View>

      <SafeAreaView style={styles.container}>
        <FlatList
          data={booklist}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: `#a4b0be`,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  topbox: {
    height: 200,
    backgroundColor: `#b2bec3`,

    alignItems: `flex-start`,
    justifyContent: `center`,
  },
  topfont: {
    fontSize: 30,
    marginLeft: 20,
    marginTop: 20,
  },
  middlebox: {
    width: 420,
    height: 200,
    backgroundColor: `#636e72`,

    alignItems: `center`,
    justifyContent: `center`,
  },
  middlefont: {
    fontSize: 30,
    textDecorationLine: `underline`,
    color: `#fff`,
  },
});

export default App;
