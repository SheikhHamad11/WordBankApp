import React, {useState} from 'react';
import {
  View,
  Modal,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Button, List} from 'react-native-paper';
import {
  SumUp,
  titlesWithIds,
  showContrast,
  createSequence,
  InsertReferenceWithIds,
} from '../components/ListItems';

const SupportPage = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const openModal = content => {
    setModalContent(content);
    setModalVisible(true);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <View style={{marginTop: 20}}>
            <Text style={styles.heading1}>3. Support</Text>
            <Text style={styles.heading2}>
              Use theory to analyse furthur,including referenced evidence and
              examples
            </Text>
          </View>

          <List.AccordionGroup>
            <List.Accordion
              titleStyle={styles.buttonText}
              title="CREATE SEQUENCE"
              style={[styles.button, styles.button2]}
              right={() => null}
              id="1">
              {createSequence.map((item, index) => (
                <List.Item
                  key={item.id}
                  style={styles.listitem}
                  title={item.title}
                  onPress={() => openModal(item.title)}
                />
              ))}
            </List.Accordion>
          
            <List.Accordion
              titleStyle={styles.buttonText}
              title="INSERT REFERENCE"
              style={[styles.button, styles.button3]}
              id="3"
              right={() => null}>
              {InsertReferenceWithIds.map((item, index) => (
                <List.Item
                  key={item.id}
                  style={styles.listitem}
                  title={item.title}
                  onPress={() => openModal(item.title)}
                />
              ))}
            </List.Accordion>
            <List.Accordion
              titleStyle={styles.buttonText}
              title="SHOW CAUSE AND EFFECT"
              style={[styles.button, styles.button4]}
              id="4"
              right={() => null}>
              {titlesWithIds.map((item, index) => (
                <List.Item
                  key={item.id}
                  style={styles.listitem}
                  title={item.title}
                  onPress={() => openModal(item.title)}
                />
              ))}
            </List.Accordion>
            <List.Accordion
              titleStyle={styles.buttonText}
              title="SHOW CONTRAST"
              style={[styles.button, styles.button2]}
              right={() => null}
              id="2">
              {showContrast.map((item, index) => (
                <List.Item
                  key={item.id}
                  style={styles.listitem}
                  title={item.title}
                  onPress={() => openModal(item.title)}
                />
              ))}
            </List.Accordion>
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
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>{modalContent}</Text>
            </View>
          </TouchableOpacity>
        </Modal>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    padding: 20,
  },
  button: {
    backgroundColor: 'lightblue',
    borderRadius: 5,
    marginVertical: 5,
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
    // textAlign:'center'
  },
  heading2: {
    marginVertical: 10,
    fontSize: 21,
    // fontWeight: '900',
    color: 'black',
    // textAlign:'center',
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
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  modalText: {
    fontSize: 18,
    textAlign: 'center',
    color: 'black',
  },
  button: {
    marginVertical: 7,
    width: 350,
    // padding: 20,
    // color: 'white',
    borderRadius: 5,
    fontSize: 27,
    fontWeight: '100',
  },
  button1: {
    backgroundColor: '#548DD4',
  },
  button2: {
    backgroundColor: '#76923D',
  },
  button3: {
    backgroundColor: '#009180',
  },
  button4: {
    backgroundColor: '#CD00FF',
  },
});

export default SupportPage;
