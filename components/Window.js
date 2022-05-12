import {
  Center,
  Modal,
  FormControl,
  Button,
  Input,
  VStack,
  Stack,
  Icon,
  useToast 
} from 'native-base'
import React from 'react'
import { View, TextInput, StyleSheet, Text, Pressable,} from 'react-native'
import { FontAwesome5, FontAwesome } from '@expo/vector-icons'
const Window = (props) => {

  const toast = useToast();
  const id = "test-toast";

  const orderHandler =()=>{
    if (!toast.isActive(id)) {
      toast.show({
        id,
        title: `You Ordered a Ticket to ${props.frequency}`,
        placement: "top"
      });

      
    }
    
    // save the time of the trip
    // call api of saving ticket
    // toast there is order
    // light icon in header
  }

  // isOpen prop closeWindow prop
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
                {props.frequency}
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

           <Center>
           <Button
              w="128"
              variant="solid"
              colorScheme="green"
              onPress={orderHandler}
              rounded="xl"
            >
              Order
            </Button>
           </Center>
          </Modal.Body>
          <Modal.Footer style={styles.footer}>
            <Button.Group space={4}>
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
export default Window
