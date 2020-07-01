// import React from 'react'
// import { View, Text,ScrollView } from 'react-native'
// import HomeCategory from '../components/HomeCategory'

// export default function HomeScreen(props) {
//     return (
//         <View style={{flex:1}}>
//            <ScrollView>
//            <HomeCategory 
//                             imageUri ={{uri:'https://images.pexels.com/photos/974911/pexels-photo-974911.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}}
//                             titleFirst="Womens"
//                             titleSecond="Fashion"
//                             subTitle="Spring Season. Opened!"
//                             screenProps="Super"
//                             {...props}
//             />
//             <HomeCategory
//                         imageUri={{uri:'https://images.pexels.com/photos/842811/pexels-photo-842811.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}}
//                         titleFirst="Mens"
//                         titleSecond="Fashion"
//                         subTitle="Pure. Old Fashioned."
//                         {...props}
//           />
//           <HomeCategory
//                         imageUri={{uri:'https://images.pexels.com/photos/1619705/pexels-photo-1619705.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}}
//                         titleFirst="Kids"
//                         titleSecond="Fashion"
//                         subTitle="For the smallest."
//                         {...props}
//           />

// </ScrollView>
//         </View>
//     )
// }


import React, { Component } from "react";
import { View, ScrollView } from "react-native";
import HomeCategory from "../components/HomeCategory";
import CustomHeader from "../components/CustomHeader";

const  HomeScreen = (props) =>{
  return (
      <View
        style={{
          flex: 1
        }}
      >
        <CustomHeader  navigation ={props.navigation}headerName ="Home"/>
           {/* <Text>{name}</Text> */}
        <ScrollView scrollEnabled>
       
          <HomeCategory
           imageUri ={{uri:'https://images.pexels.com/photos/974911/pexels-photo-974911.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}}
                            
            titleFirst="Womens"
            titleSecond="Fashion"
            subTitle="Spring Season. Opened!"
            screenProps="Super"
             {...props}
          />
          <HomeCategory
           imageUri={{uri:'https://images.pexels.com/photos/842811/pexels-photo-842811.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}}
                       
            titleFirst="Mens"
            titleSecond="Fashion"
            subTitle="Pure. Old Fashioned."
           {...props}
          />
          <HomeCategory
              imageUri={{uri:'https://images.pexels.com/photos/1619705/pexels-photo-1619705.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}}
                        
            titleFirst="Kids"
            titleSecond="Fashion"
            subTitle="For the smallest."
            {...props}
          />
         
        </ScrollView>
      
      </View>
    );
  }


export default HomeScreen;