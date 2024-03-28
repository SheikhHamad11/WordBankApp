import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {List} from 'react-native-paper';
import AccordionItem from './AccordionItem';

const Accordion = ({data, setModalContent, setModalVisible}) => {
  const openModal = content => {
    const list = content.description.map((text, index) => {
      text.trim();
      const parts = text.split(' ');
      const searchValue = '\b';
      const occurrences = [];
      let ind = parts.indexOf(searchValue);
      while (ind !== -1) {
        occurrences.push(ind);
        parts.splice(ind, 1);
        ind = parts.indexOf(searchValue, ind + 1);
      }
      occurrences.forEach(i => {
        parts[i] = <Text style={styles.listItemBoldWord}>{parts[i]}</Text>;
      });
      return (
        <View key={index} style={styles.listItemContainer}>
          <Text style={styles.listItemPointer}>{'\u25A0'}</Text>
          <Text style={styles.listitemContent}>
            {parts.map((part, i) => (
              <>
                {` `}
                {part}
              </>
            ))}
          </Text>
        </View>
      );
    });
    list.unshift(
      <View>
        <Text style={styles.moduleHeading}>{content.title}</Text>
      </View>,
    );
    setModalContent(list);
    setModalVisible(true);
  };
  return (
    <List.AccordionGroup>
      {data.subCategories.map((item, ind) => (
        <View key={ind} style={styles.button}>
          <List.Accordion
            titleStyle={styles.buttonText}
            title={item.title.toUpperCase()}
            style={[{backgroundColor: item.color, borderRadius: 5}]}
            right={() => null}
            id={ind}>
            <AccordionItem data={item.data} openModal={openModal} />
          </List.Accordion>
        </View>
      ))}
    </List.AccordionGroup>
  );
};
const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    marginVertical: 7,
  },
  buttonText: {
    color: 'white',
    padding: 8,
    fontSize: 18,
  },
  moduleHeading: {color: 'black', fontSize: 18, fontWeight: 'bold'},
  listItemContainer: {flexDirection: 'row'},
  listItemPointer: {marginRight: 8, fontSize: 6, color: 'black', marginTop: 5},
  listitemContent: {color: 'black'},
  listItemBoldWord: {fontWeight: 'bold'},
});
export default Accordion;
