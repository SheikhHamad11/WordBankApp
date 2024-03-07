import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {List} from 'react-native-paper';

const ListItem = ({title}) => (
  <List.Item title={title} style={styles.listItem} />
);
const ListWithTitles = () => {
  const titles = [
    'Firstly',
    'Secondly',
    'Lastly',
    'To Begin with',
    'In addition',
    'Moreover',
    'Consequently',
    'Furthermore',
    'Subsequently',
    'Regardless of',
    'Despite',
  ];
  return (
    <View style={styles.container}>
      <FlatList
        data={titles}
        renderItem={({item}) => <ListItem title={item} />}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatListContent: {
    paddingHorizontal: 16,
  },
  listItem: {},
});
export default ListWithTitles;
