import React, { useState } from 'react'
import { Text, View, StyleSheet, Pressable,TouchableOpacity } from 'react-native'
import { Box, Flex, Center } from 'native-base'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import TicketModal from './TicketModal'

//import Colors from '../constants/colors'
const TicketBar = (props) => {
  const [showModal, setShowModal] = useState(false)
  if (props.ticket)
    return (
      <View style={styles.header}>
        <Center>
          <TicketModal
            isOpen={showModal}
            ticket={props.ticket}
            close={() => setShowModal(false)}
            removeTicket={props.removeTicket}
          />
        </Center>
        <TouchableOpacity onPress={() => setShowModal(true)} style={styles.header}>
          <View  >
            <Box alignSelf={'flex-start'} margin={4}>
              <Flex direction="row">
              <MaterialCommunityIcons name="ticket-confirmation" size={24} color="white" style={styles.icon} />
                <Text style={styles.text}>You've Ordered a ticket</Text>
              </Flex>
            </Box>
          </View>
        </TouchableOpacity>
      </View>
    )
  else return null
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    backgroundColor: '#34a36c',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius:13,
    borderBottomRightRadius:13,
    margin:0
    

  },
  text: {
    color: 'white',
    fontSize: 18,
  },
  icon:{
    paddingRight:5
  }
})

export default TicketBar
