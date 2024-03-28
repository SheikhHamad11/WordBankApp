import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {WordBankData} from '../Redux_Configuration/Selector';
import Accordion from '../components/Accordion';
import AccordionDetailPoup from '../components/AccordionDetailPoup';
import {useWordBank} from '../Context_Configuration/Main_Context';
const DetailPage = ({route}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const {index} = route.params;
  const data = WordBankData(useWordBank(), index);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <View style={{marginTop: 10}}>
            <Text style={styles.heading1}>{data.title}</Text>
            <Text style={styles.heading2}>{data.description}</Text>
          </View>
          <Accordion
            data={data}
            setModalContent={setModalContent}
            setModalVisible={setModalVisible}
          />
        </View>
        <AccordionDetailPoup
          modalVisible={modalVisible}
          modalContent={modalContent}
          setModalVisible={setModalVisible}
        />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
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
});
export default DetailPage;
