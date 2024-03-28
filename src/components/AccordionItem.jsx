import {StyleSheet} from 'react-native';
import React from 'react';
import {List} from 'react-native-paper';

const AccordionItem = ({data = [], openModal}) => {
  return data.map((innerItem, i) => (
    <List.Item
      key={i}
      style={styles.listitem}
      title={innerItem.title}
      onPress={() => openModal(innerItem)}
    />
  ));
};

export default AccordionItem;

const styles = StyleSheet.create({
  listitem: {
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
});
