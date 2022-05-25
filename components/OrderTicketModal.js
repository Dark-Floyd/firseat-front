import { Center, Modal, Button, useToast, Box } from 'native-base'
import React from 'react'
import { StyleSheet, Text } from 'react-native'
const OrderTicketModal = (props) => {
  const toast = useToast()
  const id = 'toast-id-1'

  const orderHandler = () => {
    console.log(props.ticket)
    if (props.ticket) {
      toast.show({
        id,
        title: `You already ordered a ticket`,
        placement: 'top',
      })
    } else if (!toast.isActive(id)) {
      toast.show({
        id,
        title: `You Ordered a Ticket to ${props.frequency}`,
        placement: 'top',
      })
      props.addTicket(1, {
        lineId: props.line,
        time: props.frequency,
        destination: props.destination,
      })
      props.close()
    }
  }
  return (
    <Center>
      <Modal isOpen={props.isOpen} style={styles.modal}>
        <Modal.Content maxWidth="450px" style={styles.modalContent}>
          <Modal.Body style={styles.body}>
            <Center>
              <Box style={styles.box}>
                <Text style={styles.lineHeader}>Line</Text>
                <Text style={styles.line}>{props.line}</Text>
                <Text style={styles.lineHeader}>Time</Text>
                <Text style={styles.line}> {props.frequency}</Text>
                <Text style={styles.lineHeader}>Destination</Text>
                <Text style={styles.line}> {props.destination}</Text>
              </Box>
            </Center>
          </Modal.Body>
          <Modal.Footer style={styles.footer}>
            <Button.Group space={20}>
              <Button
                w="100"
                variant="outline"
                colorScheme="green"
                onPress={orderHandler}
                rounded="xl"
                style={styles.button}
              >
                Order
              </Button>
              <Button variant="ghost" colorScheme="red" onPress={props.close}>
                Cancel
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
  )
}
const styles = StyleSheet.create({
  body: {
    backgroundColor: '#303F9F',
    color: '#3f51b5',
  },
  box: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 180,
  },
  line: {
    color: 'white',
    padding: 2,
  },
  lineHeader: {
    color: 'white',
    padding: 2,
    fontWeight: 'bold',
  },
  modal: {
    color: '#3f51b5',
    borderBottomColor: 'transparent',
  },
  modalContent: {
    borderRadius: 30,
  },
  footer: {
    borderTopColor: 'transparent',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#404da3',
    borderRadius: 15,
  },
})
export default OrderTicketModal
