import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {List, Button, Modal} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
  InsertReferenceWithIds,
  SumUp,
  createSequence,
  showContrast,
  titlesWithIds,
} from '../components/ListItems';
// import Collapsible from 'react-native-collapsible';

export default function SupportPage({navigation, route}) {
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
            <Text style={styles.heading1}>4. Implications</Text>
            <Text style={styles.heading2}>
            Identify the significance (and then link to the next point, which may provide further backing or may even be a counter-argument)
            </Text>
          </View>

         

          <View>
           <List.AccordionGroup>
            <List.Accordion
              titleStyle={{color: 'white', padding: 8, fontSize: 18}}
              title="SHOW CAUSE AND EFFECT"
              style={[styles.button, styles.button4]}
              id="4"
              right={() => null}>
              {titlesWithIds.map((item, index) => (
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
              title="SUM UP /SUMMARIZE"
              style={[styles.button, styles.button2]}
              id="2"
              right={() => null}>
              {SumUp.map((item, index) => (
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
        </View>

        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={closeModal}>
          <TouchableOpacity
            activeOpacity={1}
            onPressOut={closeModal}
            style={styles.overlay}>
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <View style={{marginVertical: 4}}>
                  <TouchableOpacity
                    onPress={() =>
                      Linking.openURL('http://www.wordbank.org.uk/')
                    }>
                    <Icon name="globe-asia" size={30} color="#0274B3" />
                  </TouchableOpacity>
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
  },
  heading1: {
    fontSize: 25,
    fontWeight: '900',
    color: 'black',
  },
  heading2: {
    marginVertical: 10,
    fontSize: 20,
    color: 'black',
    // textAlign: 'center',
    // justifyContent: 'center',
  },
  listitem:{
    borderBottomWidth:1,
    borderColor:"#E8E8E8"
  },
  button: {
    marginVertical: 7,
    width: 350,
    borderRadius: 5,
    fontWeight: '500',
    lineHeight: 1.1,
  },
  button1: {
    backgroundColor: '#548DD4',
  },
  button2: {
    backgroundColor: '#F79647',
  },
  button3: {
    backgroundColor: '#009180',
  },
  button4: {
    backgroundColor: '#CD00FF',
  },

  modalContainer: {
    flex: 1,
    paddingTop: 1000,
    paddingEnd: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    marginEnd: 10,
    padding: 10,
    borderRadius: 10,
    elevation: 5,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});
