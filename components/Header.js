import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Box } from 'native-base'
//import Colors from '../constants/colors'
const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>Firseat</Text>
      <Box alignSelf={'flex-end'} margin={3} display='none'>
        <MaterialCommunityIcons
          name="ticket-confirmation"
          size={24}
          color="white"
          
        />
      </Box>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '15%',
    paddingTop: 36,
    backgroundColor: 'navy',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
  },
})

export default Header
