import { StyleSheet, View } from 'react-native'

const index = () => {
  return (
    <View style={styles.ade}>
      <View style={styles.box1}>

<View style={styles.box2}>
  <View style={styles.box3}></View>
<View style={styles.box4}></View>
<View style={styles.box5}></View>
</View>



      </View>

    </View>
  )
}

export default index

const styles = StyleSheet.create({
  ade:{
    flex:1,
    backgroundColor:"white",
justifyContent:"center",
alignItems:"center",
flexDirection:"row",
  },
  box1:{
height:300,
width:300,
backgroundColor:"yellow",
borderRadius:150,
borderWidth:4,
justifyContent:"center",
alignItems:"center",
flexDirection:"row",
  },
box2:{
  height:210,
  width:210,
  backgroundColor:"green",
  borderWidth:4,
  flexDirection:"row",

},
box3:{
  height:50,
  width:50,
  backgroundColor:"white",
  borderWidth:4,
  borderRadius:30,
  flexDirection:"row",
  marginRight:15,
},

box4:{
  height:50,
  width:50,
  backgroundColor:"white",
  borderWidth:4,
  borderRadius:30,
  flexDirection:"row",
  marginRight:15,
},
box5:{
  height:50,
  width:50,
  backgroundColor:"white",
  borderWidth:4,
  borderRadius:30,
  flexDirection:"row",
  marginLeft:15,
}


  
})