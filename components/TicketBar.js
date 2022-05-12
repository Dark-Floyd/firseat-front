import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Box,Flex,Center } from 'native-base'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
//import Colors from '../constants/colors'
const TicketBar = () => {
  return (
    <View style={styles.header}>
      
      <Box alignSelf={'flex-start'} margin={4}  >
        
        <Flex direction="row"  >
        <MaterialCommunityIcons name="numeric-1-circle" size={24} color="white" />
        <Text style={styles.text}>You've Ordered a ticket</Text>
          </Flex>
      </Box>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    color:'red'
  },
  text: {
    color: 'white',
    fontSize: 18,
  },
})

export default TicketBar
