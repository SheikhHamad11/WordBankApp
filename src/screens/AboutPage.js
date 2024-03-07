import {
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const AboutWordBank = () => {
  return (
    <ScrollView style={{marginVertical: 10}}>
      <View style={styles.flexContainer}>
        <Text style={styles.heading1}>About WORDBANK</Text>
        <Image
          style={styles.image}
          source={require('../../src/Images/icon.png')}
        />
        <Text style={styles.heading2}>
          During academic writing, authors always require a variety of words and
          phrases in order to avoid repetition and overuse. Having a variety of
          words in any piece of academic writing adds flow, strength,
          readability, professionalism and makes the work easy to comprehend and
          follow.
        </Text>

        <Text style={styles.heading2}>
          This smartphone application offers authors a large variety of words to
          choose from. It opens with a paragraph model and displays the four
          stages that constitute a typical paragraph. Tapping each one of these
          stages offers a list of words and phrases relevant to that stage. Each
          of these, in turn, when tapped provide a list of examples of their
          use.
        </Text>

        <Text style={styles.heading2}>
          The key element in its design lies in its simplicity, convenience and
          ease of use. There are no requirements to register or log in and
          neither does it require any other details of the user.
        </Text>
        <Text style={styles.heading2}>
          It has been designed by academics with several years of experience in
          pedagogical practice as it was felt that overuse of certain words and
          phrases leads to poor and sub-standard work. The design is based on an
          established, successful and widely used model of paragraph writing.
        </Text>
        <Text style={styles.heading2}>
          It is free to use with no intrusive ads and given that it is not
          subject or region-specific, it will find wide global appeal.
        </Text>
        <Text style={styles.heading4}>Acknowledgments</Text>
        <Text style={styles.heading2}>
          This application draws inspiration from a number of sources. The
          paragraph model on which it is based has been developed by Sally
          Mitchell and Mike Riddle. The various functions and associated
          processes that emanate from this model are based on the work by
          Nottingham Trent University and Learnhigher.ac.uk. The examples of the
          use of various words and phrases have been contributed by the writing
          mentors based at Liverpool Hope University Library and a number of
          academics from the University of Manchester and Liverpool Hope
          University. The logo was designed by Steve Millard of Brand Harmonics
          Ltd.
        </Text>

        <TouchableOpacity
          onPress={() => Linking.openURL('http://www.brandharmonics.co.uk')}>
          <Text style={styles.heading3}>(www.brandharmonics.co.uk)</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default AboutWordBank;

const styles = StyleSheet.create({
  flexContainer: {
    marginTop: 30,
    marginHorizontal: 18,
    flex: 1,
    height: '100%',
  },
  heading1: {
    fontSize: 25,
    fontWeight: '900',
    color: 'black',
  },
  heading2: {
    marginTop: 10,
    fontSize: 19,
    color: 'black',
  },
  heading4: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: '900',
    color: 'black',
  },
  image: {
    height: 200,
    width: 200,
  },
  heading3: {
    fontSize: 21,
    color: '#337AB7',
  },
});
