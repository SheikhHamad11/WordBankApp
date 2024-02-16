import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Circle from '../components/Circle';
export default function Home({navigation}) {
  const [angle, setangle] = useState();
  return (
    <ScrollView>
      <View style={styles.flexContainer}>
        <View style={{marginTop: 30}}>
          <Text style={styles.heading}>Paragraph Structure</Text>
        </View>
        <Circle angle={angle} setAngle={setangle} />

        <View style={{marginTop: 10}}>
          <Text style={styles.heading1}>1. Claim</Text>
          <Text style={styles.heading2}>
            Introduce the paragraph by making your point(this sentence directs
            the rest of your paragraph)
          </Text>
        </View>

        {/* <View style={{marginTop: 30}}>
          <Text style={styles.heading1}>2. Justification</Text>
          <Text style={styles.heading2}>
            Unpack the controlling statement:Explain it and Analyze it.
          </Text>
        </View>
        <View style={{marginTop: 30}}>
          <Text style={styles.heading1}>3. Support</Text>
          <Text style={styles.heading2}>
            Use theory to analyse furthur,including referenced evidence and
            examples
          </Text>
        </View>

        <View style={{marginTop: 30}}>
          <Text style={styles.heading1}>4. Implications</Text>
          <Text style={styles.heading2}>
            Identify the significance (and then link to the next point, which
            may provide further backing or may even be a counter-argument)
          </Text>
        </View> */}

        <View style={{marginTop: 30}}>
          <Button
            color={'green'}
            style={styles.button}
            onPress={() => {
              navigation.navigate('ClaimPage');
            }}
            title="Go To ClaimPage"
          />
        </View>
        <View style={{marginTop: 10}}>
          <Button
            color={'green'}
            style={styles.button}
            onPress={() => {
              navigation.navigate('JustificationPage');
            }}
            title="Go To JustificationPage"
          />
        </View>

        <View style={{marginTop: 10}}>
          <Button
            color={'green'}
            style={styles.button}
            onPress={() => {
              navigation.navigate('SupportPage');
            }}
            title="Go To SupportPage"
          />
        </View>
        <View style={{marginTop: 10}}>
          <Button
            color={'green'}
            style={styles.button}
            onPress={() => {
              navigation.navigate('ImplicationsPage');
            }}
            title="Go To ImplicationsPage"
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  flexContainer: {
    // justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'white',
    height: Dimensions.get('window').height,
  },
  flexCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 300,
    width: 300,
  },
  heading: {
    fontSize: 30,
    fontWeight: '900',
    color: 'black',
  },
  heading1: {
    fontSize: 25,
    fontWeight: '900',
    color: 'black',
    textAlign: 'center',
  },
  heading2: {
    // marginHorizontal:25,
    fontSize: 21,
    // fontWeight: '900',
    color: 'black',
    textAlign: 'center',
    justifyContent: 'center',
  },

  h1: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'black',
  },

  gallery: {
    width: 200,
    height: 200,
    backgroundColor: 'gray',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'black',
  },
});
