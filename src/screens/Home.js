import {View, Text, StyleSheet, ScrollView, Dimensions} from 'react-native';
import React, {useEffect, useMemo, useState} from 'react';
import Circle from '../components/Circle';
import {useSelector} from 'react-redux';
import {
  newProjectCategories,
  newProjectHeading,
} from '../Redux_Configuration/Selector';
import data from '../data/data.json';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function Home({navigation}) {
  const [index, setindex] = useState(0);
  const [centerClick, setcenterClick] = useState(false);
  const [incomingData, setincomingData] = useState(null);
  const {heading, Category} = useSelector(
    useMemo(
      () => state => ({
        heading: newProjectHeading(state),
        Category: newProjectCategories(state, index),
      }),
      [index],
    ),
  );

  // Function to store data in local storage
  const storeDataLocally = async data => {
    try {
      await AsyncStorage.setItem('data', JSON.stringify(data));
      console.log('Data stored in local storage successfully!');
    } catch (error) {
      console.log('Error storing data in local storage: ', error);
    }
  };
  // Function to retrieve data from local storage
  const retrieveDataLocally = async () => {
    try {
      const jsonData = await AsyncStorage.getItem('data');
      if (jsonData !== null) {
        const data = JSON.parse(jsonData);
        console.log('data', data);
        setincomingData(data);
        return data;
      } else {
        console.log('No data found in local storage!');
        return null;
      }
    } catch (error) {
      console.log('Error retrieving data from local storage: ', error);
      return null;
    }
  };
  const [angle, setangle] = useState(90);
  useEffect(() => {
    if (!centerClick) {
      if (angle === 360 || angle === 0) {
        setindex(0);
      } else if (angle === 90) {
        setindex(1);
      } else if (angle === 180) {
        setindex(2);
      } else if (angle === 270) {
        setindex(3);
      }
    } else {
      navigate();
    }
  }, [angle, centerClick]);
  const navigate = () => {
    // console.log(`HOme index: ${index}`);
    setcenterClick(false);
    navigation.navigate('DetailPage', {index});
  };

  useEffect(() => {
    // Store data in local storage when component mounts
    storeDataLocally(data);
    retrieveDataLocally();
  }, []);

  return (
    <View style={styles.flexContainer}>
      <View>
        <Text style={styles.heading}>{heading}</Text>
      </View>
      <Circle
        angle={angle}
        setAngle={setangle}
        setcenterClick={setcenterClick}
      />

      <View style={{height: 100}}>
        <Text style={styles.heading1}>{Category.title}</Text>
        <Text style={styles.description}>{Category.description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flexContainer: {
    paddingHorizontal: 20,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'white',
    height: Dimensions.get('window').height,
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
  description: {
    marginHorizontal: 10,
    fontSize: 18,
    lineHeight: 25,
    color: 'black',
    textAlign: 'center',
    justifyContent: 'center',
  },
});
