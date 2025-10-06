import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const index = () => {
  return (
    <View style={{flex:1,backgroundColor:"white",paddingTop:20 ,alignItems:"center"}}>
      <Text style={{fontWeight:"thin",color:'black'}} >English  (US) </Text>
<Image source={{uri:"https://th.bing.com/th?q=Facebook+Logo+Design+PNG&w=120&h=120&c=1&rs=1&qlt=70&o=7&cb=1&pid=InlineBlock&rm=3&mkt=en-WW&cc=NG&setlang=en&adlt=moderate&t=1&mw=247"}}
style={{width:70,height:70, alignSelf: 'center'}}
/>
<Image source={{uri:"https://tse2.mm.bing.net/th/id/OIP.A2NZUWjRKNi18Bis2FpE6QHaLH?rs=1&pid=ImgDetMain&o=7&rm=3"}}
style={{width:200,height:200 ,borderRadius:200,borderWidth:2, alignSelf: 'center' }}
/>
<View style={{ paddingTop:5,backgroundColor:"black",height:20,}}></View>
<Text style={{fontWeight:"900"}}>Jewoola Favour</Text>
<Text>. 9+ notifications</Text>
<View style={{paddingTop:25}}></View>
<Text >By proceeding,you agree to MTN's Terms</Text>
<Text>which includes letting Facebook request and</Text>
<Text >receive your phone number.Change Settings</Text>
<TouchableOpacity style={styles.favourButton}>
  <Text style={{color:"white" }}>Log In</Text>
</TouchableOpacity>
<View style={{marginTop:10}}>

<Text style={{paddingTop:10,fontWeight:"500"}}>Log into another account</Text>
</View>
<View style={{paddingTop:15}}></View>
<Text >Create new Account</Text>
  </View>
)
}
    
    
    
  


export default index

const styles = StyleSheet.create({
favourButton:{
  height:40,
  width:300,
  backgroundColor:"blue",
  borderRadius:15,
  justifyContent:"center",
  alignItems:"center",
  marginTop:20,


}

})


  
  


