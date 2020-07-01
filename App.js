import React from 'react';
import {View, Text, Dimensions,ActivityIndicator,Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import CustomDrawerComponent from './src/components/CustomDrawerComponent';
import LoginScreen from './src/AuthStack/LoginScreen';
import RegisterScreen from './src/AuthStack/RegisterScreen';
import HomeScreen from './src/screens/HomeScreen';
import Category from './src/screens/Category';
import Basket from './src/screens/Basket';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomHeader from './src/components/CustomHeader';
import Detail from './src/screens/Detail';
import TermsConditions from './src/screens/TermsConditions';
import EditBasket from './src/screens/EditBasket';
import Payment from './src/screens/Payment';
import CreditCard from './src/screens/CreditCard';
import Address from './src/screens/Address';
import Shipping from './src/screens/Shipping';
import SplashScreen from './src/AuthStack/SplashScreen';
import WelcomeScreen from './src/AuthStack/WelcomeScreen';

import {AuthContext} from './src/AuthStack/context';

import FbLogin from './src/AuthStack/FbLogin';
import GoogleLogin from './src/AuthStack/GoogleLogin';
import * as firebase from 'firebase'
import {firebaseConfig} from './src/model/Config';
firebase.initializeApp(firebaseConfig);

const Stack = createStackNavigator();
const HomeStack = createStackNavigator();
const Drawer = createDrawerNavigator();
const PayMentStack = createStackNavigator();
const CheckoutTab = createMaterialTopTabNavigator();

function PayMentStackNavigator() {
  return (
    <PayMentStack.Navigator screenOptions={{headerShown: false}}>
      <PayMentStack.Screen name="Payment" component={Payment} />
      <PayMentStack.Screen name="CreditCard" component={CreditCard} />
    </PayMentStack.Navigator>
  );
}

function CheckoutTabNavigator() {
  return (
    <CheckoutTab.Navigator
      initialRouteName="Address"
      tabBarOptions={{
        activeTintColor: '#000',
        labelStyle: {fontSize: 17},
        indicatorStyle: {backgroundColor: 'black', width: 100, marginLeft: 20},
        style: {backgroundColor: 'white', elevation: 0},
      }}>
      <CheckoutTab.Screen name="Address" component={Address} />
      <CheckoutTab.Screen name="Shipping" component={Shipping} />
      <CheckoutTab.Screen name="Payment" component={PayMentStackNavigator} />
    </CheckoutTab.Navigator>
  );
}

function HomeStackScreen({navigation}) {
  return (
    <HomeStack.Navigator initialRouteName="Home">
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          //headerTransparent: true,
          // headerTitle: "Home",
          // headerTitleStyle: {
          //   color: "white",

          // },
          // headerStyle: {
          //   backgroundColor: "#804F53",

          // },
          // headerLeft:()=> (
          //   <Icon
          //     onPress={() => navigation.openDrawer()}
          //     name="md-menu"
          //     color="white"
          //     size={30}
          //     style={{
          //       paddingLeft: 10
          //     }}
          //   />
          // ),
        }}
      />
      <HomeStack.Screen
        name="Category"
        component={Category}
        options={{
          headerShown: false,
          //title:({route})=>route.params.item.name,
          //   headerTitle:'Category',
          // headerTitleStyle: {
          //   color: "white"
          // },
          // headerStyle: {
          //   backgroundColor: "#804F53"
          // },
          // headerLeft: ()=>(
          //   <Icon
          //     onPress={() => navigation.openDrawer()}
          //     name="md-menu"
          //     color="white"
          //     size={30}
          //     style={{
          //       paddingLeft: 10
          //     }}
          //   />
          // ),
          // headerRight:()=> (
          //   <Icon
          //     onPress={() => navigation.navigate("basket")}
          //     name="md-cart"
          //     color="white"
          //     size={30}
          //     style={{
          //       paddingRight: 10
          //      }}
          //         />
          // )
        }}
      />
      <HomeStack.Screen
        name="basket"
        component={Basket}
        options={{
          headerShown: false,
          // headerTitle:'Basket',
          // headerTitleStyle:{
          //     color:'white'
          // },
          // headerStyle:{
          //   backgroundColor:"#804F53"
          // },
          // headerLeft :()=>(
          //     <Icon
          //         onPress ={()=>navigation.openDrawer()}
          //          name ="md-menu"
          //          size={30}
          //          color='white'
          //          style={{
          //                paddingLeft:10
          //          }}
          //     />
          // )
        }}
      />
      <HomeStack.Screen
        name="Checkout"
        component={CheckoutTabNavigator}
        options={{
          headerTitle: 'Checkout',
          headerTitleStyle: {
            color: 'black',
            textAlign: 'center',
            elevation: 0,
          },

          headerStyle: {
            backgroundColor: 'white',
            //textAlign:'center'
          },
          headerLeft: () => (
            <Icon
              onPress={() => navigation.openDrawer()}
              name="md-menu"
              size={30}
              color="black"
              style={{
                paddingLeft: 10,
              }}
            />
          ),
        }}
      />
      <HomeStack.Screen
        name="Detail"
        component={Detail}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name="TermsConditions"
        component={TermsConditions}
        options={{
          headerTitleStyle: {
            color: 'white',
          },
          headerStyle: {
            backgroundColor: '#804F53',
          },
          headerTitle: 'Terms & Conditions',
          headerLeft: null,
          headerRight: () => (
            <Icon
              onPress={() => navigation.navigate('CreditCard')}
              name="ios-close"
              color="white"
              size={50}
              style={{
                paddingRight: 10,
              }}
            />
          ),
        }}
      />
      <HomeStack.Screen
        name="EditBasket"
        component={EditBasket}
        options={{
          headerTitleStyle: {
            color: 'white',
          },
          headerStyle: {
            backgroundColor: '#804F53',
          },
          headerTitle: 'Edit Basket Item',
          headerLeft: null,
          headerRight: () => (
            <Icon
              onPress={() => navigation.navigate('basket')}
              name="ios-checkmark"
              color="white"
              size={50}
              style={{
                paddingRight: 10,
              }}
            />
          ),
        }}
      />
    </HomeStack.Navigator>
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerType="fade"
      drawerStyle={{
        //backgroundColor: '#c6cbef',
        width: Dimensions.get('window').width - 100,
      }}
      drawerContent={props => <CustomDrawerComponent {...props} />}>
      <Drawer.Screen name="Home" component={HomeStackScreen} />
    </Drawer.Navigator>
  );
}

function RootStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="splash" component={SplashScreen} />
      <Stack.Screen name="welcome" component={WelcomeScreen} />
      <Stack.Screen name="fb" component={FbLogin} />
      <Stack.Screen name="GoogleS" component={GoogleLogin} />
      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="register" component={RegisterScreen} />
      <Stack.Screen name="Home" component={MyDrawer} />
    </Stack.Navigator>
  );
}

const App = () => {
  // const [isLoading, setIsLoading] = React.useState(true);
  // const [userToken, setUserToken] = React.useState(null);

  // const initialLoginState = {
  //   isLoading: true,
  //   userName: null,
  //   userToken: null,
  // };

  // const loginReducer = (prevState, action) => {
  //   switch (action.type) {
  //     case 'RETRIEVE_TOKEN':
  //       return {
  //         ...prevState,
  //         userToken: action.token,
  //         isLoading: false,
  //       };
  //     case 'LOGIN':
  //       return {
  //         ...prevState,
  //         userName: action.id,
  //         userToken: action.token,
  //         isLoading: false,
  //       };
  //     case 'LOGOUT':
  //       return {
  //         ...prevState,
  //         userName: null,
  //         userToken: null,
  //         isLoading: false,
  //       };
  //     case 'REGISTER':
  //       return {
  //         ...prevState,
  //         userName: action.id,
  //         userToken: action.token,
  //         isLoading: false,
  //       };
  //   }
  // };

  // const [loginState, dispatch] = React.useReducer(
  //   loginReducer,
  //   initialLoginState,
  // );

  // const authContext = React.useMemo(
  //   () => ({
  //     signIn: async foundUser => {
  //       // setUserToken('fgkj');
  //       // setIsLoading(false);
  //       const userToken = String(foundUser[0].userToken);
  //       const userName = foundUser[0].username;

  //       try {
  //         await AsyncStorage.setItem('userToken', userToken);
  //       } catch (e) {
  //         console.log(e);
  //       }
  //       // console.log('user token: ', userToken);
  //       dispatch({type: 'LOGIN', id: userName, token: userToken});
  //     },
  //     signOut: async () => {
  //       // setUserToken(null);
  //       // setIsLoading(false);
  //       try {
  //         await AsyncStorage.removeItem('userToken');
  //       } catch (e) {
  //         console.log(e);
  //       }
  //       dispatch({type: 'LOGOUT'});
  //     },
  //     signUp: () => {
  //       // setUserToken('fgkj');
  //       // setIsLoading(false);
  //     },
  //   }),
  //   [],
  // );

  // React.useEffect(() => {
  //   setTimeout(async () => {
  //     // setIsLoading(false);
  //     let userToken;
  //     userToken = null;
  //     try {
  //       userToken = await AsyncStorage.getItem('userToken');
  //     } catch (e) {
  //       console.log(e);
  //     }
  //     // console.log('user token: ', userToken);
  //     dispatch({type: 'RETRIEVE_TOKEN', token: userToken});
  //   }, 1000);
  // }, []);

 
  return (
    // <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <RootStack/>
      </NavigationContainer>
    // </AuthContext.Provider>
  );
};

export default App;
