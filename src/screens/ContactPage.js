import {Linking, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Contact = () => {
  const openEmailLink = () => {
    Linking.openURL(`mailto:contact@www.newProject.org.uk`);
  };
  return (
    <View style={styles.flexContainer}>
      <View style={{marginTop: 30}}>
        <Text style={styles.heading1}>Contact</Text>
        <Text style={styles.heading2}>To contact, please email us at:</Text>
        <TouchableOpacity onPress={openEmailLink}>
          <Text style={styles.heading3}>contact@www.newProject.org.uk</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Contact;

const styles = StyleSheet.create({
  flexContainer: {
    // justifyContent: 'center',
    // alignItems: 'center',
    marginLeft: 20,
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
    fontSize: 21,
    color: 'black',
  },
  heading3: {
    fontSize: 21,
    color: '#337AB7',
  },
});
