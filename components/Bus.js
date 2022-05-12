import React from 'react'
import { useState } from 'react'
import { Center, Modal, FormControl, Button, Input } from 'native-base'

import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import Window from './Window'
const Bus = (props) => {
  const [isOrderTicket, setIsOrderTicket] = useState(false)
  const [showModal, setShowModal] = useState(false)
  return (
    <View>
      <Center>
        <Window
          isOpen={isOrderTicket}
          close={() => setIsOrderTicket(false)}
          line={props.line}
          start={props.start}
          destination={props.destination}
          frequency={props.frequency}
        />
      </Center>
     

      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => setIsOrderTicket(true)}
      >
        <View style={styles.card}>
          <Text style={styles.headerTitle}>{props.line}</Text>
          <Text>Next Bus: {props.frequency}</Text>
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
    padding: 20,
    margin: 10,
    height: 120,
    alignItems: 'flex-start',
    borderRadius: 15,
    marginVertical: 5,
  },
  headerTitle: {
    color: 'black',
    fontSize: 18,
    color: 'green',
    fontWeight: 'bold',
    width: '100%',
  },
})

export default Bus
