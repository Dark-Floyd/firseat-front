import React from 'react'
import { useState } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import OrderTicket from './OrderTicket'
const Bus = (props) => {
  const [isOrderTicket, setIsOrderTicket] = useState(false)

  return (
    <View>
      <OrderTicket visible={isOrderTicket} />
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => setIsOrderTicket(!isOrderTicket)}
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
