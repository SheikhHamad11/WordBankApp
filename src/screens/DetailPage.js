import React, {useState} from 'react';
import {
  View,
  Modal,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {List} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {WordBankData} from '../Redux_Configuration/Selector';
const DetailPage = ({route}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const {index} = route.params;
  const data = useSelector(state => WordBankData(state, index));
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
    <ScrollView>
      <View style={styles.container}>
        <View>
          <View style={{marginTop: 10}}>
            <Text style={styles.heading1}>{data.title}</Text>
            <Text style={styles.heading2}>{data.description}</Text>
          </View>
          <List.AccordionGroup>
            {data.subCategories.map((item, ind) => (
              <View key={ind} style={styles.button}>
                <List.Accordion
                  titleStyle={styles.buttonText}
                  title={item.title.toUpperCase()}
                  style={[{backgroundColor: item.color, borderRadius: 5}]}
                  right={() => null}
                  id={ind}>
                  {item.data.map((innerItem, i) => (
                    <List.Item
                      key={i}
                      style={styles.listitem}
                      title={innerItem.title}
                      onPress={() => openModal(innerItem)}
                    />
                  ))}
                </List.Accordion>
              </View>
            ))}
          </List.AccordionGroup>
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(false);
          }}>
          <TouchableOpacity
            activeOpacity={1}
            style={styles.modalContainer}
            onPress={() => setModalVisible(false)}>
            <View style={styles.modalContent}>{modalContent}</View>
          </TouchableOpacity>
        </Modal>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  button: {
    borderRadius: 5,
    marginVertical: 7,
  },
  buttonText: {
    color: 'white',
    padding: 8,
    fontSize: 18,
  },
  heading1: {
    fontSize: 25,
    fontWeight: '900',
    color: 'black',
  },
  heading2: {
    marginVertical: 10,
    fontSize: 19,
    color: 'black',
    justifyContent: 'center',
  },
  listitem: {
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '75%',
  },
  moduleHeading: {color: 'black', fontSize: 18, fontWeight: 'bold'},
  listItemContainer: {flexDirection: 'row'},
  listItemPointer: {marginRight: 8, fontSize: 6, color: 'black', marginTop: 5},
  listitemContent: {color: 'black'},
  listItemBoldWord: {fontWeight: 'bold'},
});
export default DetailPage;
