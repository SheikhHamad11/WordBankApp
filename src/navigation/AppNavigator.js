import {
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import SplashScreen from 'react-native-splash-screen';
import DetailPage from '../screens/DetailPage';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Contact from '../screens/ContactPage';
import Accordion from '../components/Accordion';
import Header from '../components/Header';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AboutPage from '../screens/AboutPage';
const Stack = createStackNavigator();
export default function MyStack() {
  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 500);
  }, []);
  return (
    <>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Contact"
              component={Contact}
              options={{
                headerShown: true,
                headerTitleAlign: 'center',
                headerTitle: 'WORDBANK',
              }}
            />
            <Stack.Screen
              name="AboutPage"
              component={AboutPage}
              options={{
                headerShown: true,
                headerTitleAlign: 'center',
                headerTitle: 'WORDBANK',
              }}
            />
            <Stack.Screen
              name="Accordion"
              component={Accordion}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="DetailPage"
              component={DetailPage}
              options={{
                headerShown: true,
                headerTitleAlign: 'center',
                headerTitle: 'WORDBANK',
                headerShadowVisible: true,
                headerRight: () => (
                  <View style={{marginEnd: 20}}>
                    <TouchableOpacity onPress={() => setModalVisible(true)}>
                      <Icon name="ellipsis-v" size={30} color="#0274B3" />
                    </TouchableOpacity>
                  </View>
                ),
              }}
            />
          </Stack.Navigator>
          <Header
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
          />
        </NavigationContainer>
      </SafeAreaProvider>
    </>
  );
}
