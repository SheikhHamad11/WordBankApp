import React from 'react';
import {Modal, StyleSheet, TouchableOpacity, View} from 'react-native';

const AccordionDetailPoup = ({modalVisible, setModalVisible, modalContent}) => {
  return (
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
  );
};

export default AccordionDetailPoup;

const styles = StyleSheet.create({
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
});
