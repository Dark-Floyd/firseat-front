import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
//import Colors from '../constants/colors'
const Station = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.name}</Text>
      <Text style={styles.headerTitle}>{props.id}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    width: '80%',
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#404da3',
    borderBottomLeftRadius:15,
    borderBottomRightRadius:15,
   
  },
  headerTitle: {
    color: 'white',
   
    fontSize: 18,
    
    

  },
  id: {
     justifyContent: 'center',
    alignItems: 'center',
    justifyContent:'center',
   
    width: '100%',
    color: 'black',
    fontSize: 18,
  },
})

export default Station
