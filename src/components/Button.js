import React from "react";
import { View,Text, TouchableOpacity,Image } from "react-native";

const Button = ({ backgroundColor, text, onPress, fullWidth,logo }) => {
  return (
    
     
   <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.5}
      style={{
        flexDirection:'row',
        //justifyContent:'space-between',
        alignItems:'stretch',
        backgroundColor: backgroundColor,
        width: fullWidth ? null : 150,
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        borderRadius: 4,
        shadowOffset: { width: 2, height: 4 },
        shadowColor: "#000",
        shadowOpacity: 0.4,
        elevation: 4
      }}
    >
     <Image source ={logo} style ={{width:30,height:30}}/>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "500",
          color: "white",
          paddingHorizontal:10,
          textAlign:'center'
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
    
  );
};

export default Button;