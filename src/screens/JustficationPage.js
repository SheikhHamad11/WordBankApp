import {View, Text, StyleSheet, ScrollView, Dimensions} from 'react-native';
import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {List, Button, Modal} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
  InsertReferenceWithIds,
  createSequence,
  showContrast,
} from '../components/ListItems';
// import Collapsible from 'react-native-collapsible';

export default function JustificationPage({navigation, route}) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [visible, setVisible] = useState(false);
  const containerStyle = {backgroundColor: 'white', padding: 20};
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const closeModal = () => {
    setModalVisible(false);
  };
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      <ScrollView>
        <View style={styles.flexContainer}>
          <View style={{marginTop: 30}}>
            <Text style={styles.heading1}>2. Justification</Text>
            <Text style={styles.heading2}>
              Unpack the controlling statement:Explain it and Analyze it.
            </Text>
          </View>

          <List.AccordionGroup>
            <List.Accordion
              titleStyle={{color: 'white', padding: 8, fontSize: 18}}
              title="CREATE SEQUENCE"
              style={[styles.button, styles.button1]}
              right={() => null}

              id="1">
              {createSequence.map((item, index) => (
                <List.Item
                  onPress={() => setModalVisible(true)}
                  key={item.id}
                  style={styles.listitem}
                  title={item.title}
                />
              ))}
              <Button title="press" onPress={() => setModalVisible(true)} />
            </List.Accordion>
            <List.Accordion
              titleStyle={{color: 'white', padding: 8, fontSize: 18}}
              title="SHOW CONTRAST"
              style={[styles.button, styles.button2]}
              right={() => null}
              id="2">
              {showContrast.map((item, index) => (
                <List.Item
                  onPress={() => setModalVisible(true)}
                  key={item.id}
                  style={styles.listitem}
                  title={item.title}
                />
              ))}
            </List.Accordion>
            <List.Accordion
              titleStyle={{color: 'white', padding: 8, fontSize: 18}}
              title="INSERT REFERENCE"
              style={[styles.button, styles.button3]}
              right={() => null}
              id="3">
              {InsertReferenceWithIds.map((item, index) => (
                <List.Item
                  onPress={() => setModalVisible(true)}
                  key={item.id}
                  style={styles.listitem}
                  title={item.title}
                />
              ))}
            </List.Accordion>
          </List.AccordionGroup>
        </View>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={closeModal}
          style={styles.mainContainer}>
          <TouchableOpacity
            activeOpacity={1}
            onPressOut={closeModal}
            style={styles.overlay}>
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <View style={{marginVertical: 4}}>
                  <Text style={styles.heading1}>Firstly</Text>
                  <Text style={{color: 'black'}}>
                    It has been shown,
                    <Text style={{fontWeight: '900', color: 'black'}}>
                      firstly{' '}
                    </Text>
                    , that the missionary journeys cannot...
                  </Text>
                  <Text style={{color: 'black'}}>
                    👥It has been shown,
                    <Text style={{fontWeight: '900', color: 'black'}}>
                      firstly{' '}
                    </Text>
                    , that the missionary journeys cannot...
                  </Text>
                  <Text style={{color: 'black'}}>
                    It has been shown,
                    <Text style={{fontWeight: '900', color: 'black'}}>
                      firstly{' '}
                    </Text>
                    , that the missionary journeys cannot...
                  </Text>
                </View>

                {/* <Button title="Close Modal" onPress={closeModal} /> */}
              </View>
            </View>
          </TouchableOpacity>
        </Modal>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  flexContainer: {
    // justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    height: '100%',
    backgroundColor: 'white',
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
    borderColor: '#E8E8E8',
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
  mainContainer: {
    justifyContent: 'flex-start',
    flex: 1,
  },
  modalContainer: {
    width: '100%',
    height: Dimensions.get('window').height,
    // flex: 1,
    paddingTop: 60,
    // paddingEnd: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    marginEnd: 10,
    padding: 10,
    borderRadius: 10,
    // elevation: 5,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});
