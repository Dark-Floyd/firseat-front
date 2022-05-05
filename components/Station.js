import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
//import Colors from '../constants/colors'
const Station = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.name}</Text>
      <Text style={styles.id}>{props.id}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    width: '80%',
    height: '15%',
    paddingTop: 36,
    backgroundColor: '#ffd817',
    margin: 4,
    borderRadius: 10,
    borderWidth: 2,
  },
  headerTitle: {
    color: 'black',
    fontSize: 18,
    padding:2,
  },
  id: {
    borderBottomWidth: 2,
    borderTopWidth: 2,
    padding: 2,
    width: '100%',
    color: 'black',
    fontSize: 18,
  },
})

export default Station
