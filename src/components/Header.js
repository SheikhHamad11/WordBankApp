import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Linking,
} from 'react-native';
import React, {useState} from 'react';
import {Modal} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';

const Header = ({modalVisible, setModalVisible}) => {
  const closeModal = () => {
    setModalVisible(false);
  };
  const navigation = useNavigation();
  return (
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
              <TouchableOpacity
                onPress={() => Linking.openURL('http://www.wordbank.org.uk/')}>
                <Icon name="globe-asia" size={30} color="#0274B3" />
              </TouchableOpacity>
            </View>
            <View style={{marginVertical: 4}}>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(false);
                  navigation.navigate('Contact');
                }}>
                <Icon name="envelope" size={30} color="#0274B3" />
              </TouchableOpacity>
            </View>
            <View style={{marginVertical: 4}}>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(false);
                  navigation.navigate('AboutPage');
                }}>
                <Icon name="file-alt" size={30} color="#0274B3" />
              </TouchableOpacity>
            </View>
            {/* <Button title="Close Modal" onPress={closeModal} /> */}
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default Header;

const styles = StyleSheet.create({
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
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
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
