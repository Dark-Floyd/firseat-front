import React from 'react'
import { useState } from 'react'
import { Center } from 'native-base'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import OrderTicketModal from './OrderTicketModal'
const Bus = (props) => {
  const [isOrderTicket, setIsOrderTicket] = useState(false)

  return (
    <View>
      <Center>
        <OrderTicketModal
          isOpen={isOrderTicket}
          close={() => setIsOrderTicket(false)}
          line={props.line}
          start={props.start}
          destination={props.destination}
          frequency={props.frequency}
          addTicket={props.addTicket}
        />
      </Center>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => setIsOrderTicket(true)}
      >
        <View style={styles.card}>
          <Text style={styles.headerTitle}>{props.line}</Text>

          <Text style={styles.details}>Destination: {props.destination}</Text>
          <Text style={styles.details}>Next Bus: {props.frequency}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: 'white',
    margin: 10,
    height: 100,
    borderRadius: 15,
    marginVertical: 5,

  },
  headerTitle: {
    borderTopLeftRadius:15,
    borderTopRightRadius:15,
    color: 'black',
    fontSize: 18,
    color: '#34a36c',
    fontWeight: 'bold',
    width: '100%',
  
    backgroundColor: '#404da3',
    justifyContent: 'center',
    paddingLeft: 15,
  },
  details: {
    color: 'grey',
    borderBottomWidth: 0.5,
    paddingLeft: 5,
  },
})

export default Bus
