import React, { useState } from 'react'
import { View, TextInput, StyleSheet, Button, Modal,Text,Pressable } from 'react-native'

const OrderTicket = (props) => {
  return (
    <View style={styles.centeredView}>
      <Modal visible={props.visible} animationType="slide" >
      <View style={styles.modalView}>
       <View >
       <Text>XXX</Text>
       </View>
       <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
      </View>
    </Modal>
    </View>
    
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
  },
})
export default OrderTicket
