import {
    Center,
    Modal,
    FormControl,
    Button,
    Input,
    VStack,
    Stack,
    Icon,
    useToast,
    usePlatformProps,
  } from 'native-base'
  import React from 'react'
  import { View, TextInput, StyleSheet, Text, Pressable } from 'react-native'
  import { FontAwesome5, FontAwesome } from '@expo/vector-icons'
  const TicketModal = (props) => {
    const toast = useToast()
    const id = 'test-2'
  
    const removeTicket = () => {
      if (!toast.isActive(id)) {
        toast.show({
          id,
          title: `Ticket removed ${props.ticket.lineId}`,
          placement: 'top',
        })
        props.removeTicket(1)
        props.close()
      }
    }
    return (
      <Center>
        <Modal isOpen={props.isOpen} onClose={props.close} style={styles.modal}>
          <Modal.Content maxWidth="450px">
            <Modal.CloseButton />
            <Modal.Header style={styles.header}>Order Ticket</Modal.Header>
            <Modal.Body>
              <Center>
                <Stack direction="row" mb="5" mt="1.5" space={1}>
                  <Center
                    size="20"
                    h="20"
                    bg="primary.400"
                    rounded="2xl"
                    _text={{
                      color: 'warmGray.50',
                      fontWeight: 'medium',
                    }}
                    shadow={'3'}
                  >
          
                    <FontAwesome5 name="clock" size={24} color="white" />
                    {props.ticket.lineId}
                    {console.log(props.ticket)}
                  </Center>
                  <Center
                    bg="primary.500"
                    size="20"
                    h="20"
                    rounded="2xl"
                    _text={{
                      color: 'warmGray.50',
                      fontWeight: 'medium',
                    }}
                    shadow={'3'}
                  >
                    <FontAwesome name="road" size={24} color="white" />
                    {props.destination}
                  </Center>
                  <Center
                    size="20"
                    h="20"
                    bg="primary.700"
                    rounded="2xl"
                    _text={{
                      color: 'warmGray.50',
                      fontWeight: 'medium',
                    }}
                    shadow={'3'}
                  >
                    <FontAwesome5 name="bus" size={24} color="white" />
                    {props.line}
                  </Center>
                </Stack>
              </Center>
  
             
            </Modal.Body>
            <Modal.Footer style={styles.footer}>
              <Button.Group space={4}>
                <Button variant="solid" colorScheme="red" onPress={()=>removeTicket()}>
                  Remove Ticket
                </Button>
                <Button variant="solid" colorScheme="red" onPress={props.close}>
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
    header: {
      backgroundColor: '#303F9F',
      color: '#3f51b5',
    },
    modal: {
      color: '#3f51b5',
    },
    footer: {
      borderTopColor: 'transparent',
    },
  })
  export default TicketModal;
  