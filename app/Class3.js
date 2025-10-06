import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const index = () => {
  return (
    <View style={styles.index}>
      <Text>index</Text>
      <Image source={{uri: "https://m.media-amazon.com/images/M/MV5BODljZTZkODQtOWRjNC00NjY1LTg5MjktMzI3NTkwMzk4NGE5XkEyXkFqcGc@._V1_QL75_UX291_.jpg"}}
      style={{width:200,height:200,borderRadius:200}}
      />
      <Image source={{uri:"https://m.media-amazon.co;;lllm/images/M/MV5BZWIxYWYzZDItOWIxMy00MmJmLTg2YjgtZmYzNzgzNWJiOGQ1XkEyXkFqcGc@._V1_QL75_UX291_.jpg"}}
style={{width:200,height:200}}
      />
<TouchableOpacity style={styles.olamideButton}>/
  <Text style={{color:"white"}}>Press Me</Text>
</TouchableOpacity>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  index:{
    flex:1,
    backgroundColor:"white",
    paddingLeft:20,
    paddingTop:20,
    paddingRight:20,
  },
  olamideButton:{
    height:40,
    backgroundColor:"blue",
    borderRadius:5,
    justifyContent:"center",
    alignItems:"center",
  }
})
