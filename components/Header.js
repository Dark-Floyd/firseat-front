import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
//import Colors from '../constants/colors'
const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>Firseat</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '15%',
    paddingTop: 36,
    backgroundColor: '#18278c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    color: 'white',
    fontSize: 23,
    fontFamily:'sans-serif-condensed'
  },
})

export default Header
