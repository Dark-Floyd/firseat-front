import { Center, Modal, Button, useToast, Box } from 'native-base'
import React from 'react'
import { StyleSheet, Text } from 'react-native'
const TicketModal = (props) => {
  const toast = useToast()
  const id = 'toast-id-2'
  const removeTicket = () => {
    if (!toast.isActive(id)) {
      toast.show({
        id,
        title: `Removed from line ${props.ticket.lineId} to ${props.ticket.destination}`,
        placement: 'top',
      })
      props.removeTicket(1)
      props.close()
    }
  }
  return (
    <Center>
      <Modal isOpen={props.isOpen} onClose={props.close} style={styles.modal}>
        <Modal.Content maxWidth="450px" style={styles.modalContent}>
          <Modal.Body style={styles.body}>
            <Center>
              <Box style={styles.box}>
                <Text style={styles.lineHeader}>Line</Text>
                <Text style={styles.line}>{props.ticket.lineId}</Text>
                <Text style={styles.lineHeader}>Time</Text>
                <Text style={styles.line}> {props.ticket.time}</Text>
                <Text style={styles.lineHeader}>Destination</Text>
                <Text style={styles.line}> {props.ticket.destination}</Text>
              </Box>
            </Center>
          </Modal.Body>
          <Modal.Footer style={styles.footer}>
            <Button.Group space={20}>
              <Button
                variant="solid"
                colorScheme="red"
                onPress={() => removeTicket()}
                style={styles.button}
              >
                Remove Ticket
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
export default TicketModal
