import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, FlatList,TouchableOpacity } from 'react-native'
import Header from './components/Header'
import { Provider, atom, useAtom } from 'jotai'
import Bus from './components/Bus'
import { useState, useCallback, useEffect } from 'react'
import Station from './components/Station'
import { NativeBaseProvider, Box,Center,VStack,Divider } from 'native-base'
import TicketBar from './components/TicketBar'
import { getAllLines } from './api'
import NfcManager, { NfcTech } from 'react-native-nfc-manager'
const lines_mockup = [
  {
    line: '921',
    frequency: '08:00',
    id: 1,
    company: 'egged',
    start: 'Tel Aviv',
    destination: 'Haifa',
  },
  {
    line: '826',
    frequency: '10:00',
    id: 2,
    company: 'nativ',
    start: 'Tel Aviv',
    destination: 'Jerusalem',
  },
  {
    line: '123',
    frequency: '08:00',
    id: 3,
    company: 'dan',
    start: 'Tel Aviv',
    destination: 'Yad Natan',
  },
  {
    line: '921',
    frequency: '09:00',
    id: 4,
    company: 'egged',
    start: 'Tel Aviv',
    destination: 'Netivot',
  },
  {
    line: '426',
    frequency: '08:00',
    id: 5,
    company: 'nativ',
    start: 'Tel Aviv',
    destination: 'Jaffa',
  },
  {
    line: '545',
    frequency: '08:00',
    id: 6,
    company: 'egged',
    start: 'Tel Aviv',
    destination: 'Eilat',
  },
]

NfcManager.start()
export default function App() {
  async function readNdef() {
    try {
      // register for the NFC tag with NDEF in it
      await NfcManager.requestTechnology(NfcTech.Ndef)
      // the resolved tag object will contain `ndefMessage` property
      const tag = await NfcManager.getTag()
      console.warn('Tag found', tag)
    } catch (ex) {
      console.warn('Oops!', ex)
    } finally {
      // stop the nfc scanning
      NfcManager.cancelTechnologyRequest()
    }
  }

  const [ticket, setTicket] = useState(null)
  const [linesApi, setLinesApi] = useState([])
  const fetchLines = useCallback(async () => {
    const res = await getAllLines()
    setLinesApi(res)
  }, [])
  const renderLines = (lines) => {
    return lines.map((line, i) => (
      <Bus
        style={styles.list}
        key={i}
        line={line.lineNumber}
        frequency={'09:00'}
        start={'X'}
        destination={line.finalDestination}
      ></Bus>
    ))
  }
  useEffect(() => {
    fetchLines()
  }, [])

  const addTicket = (userId, ticket) => {
    setTicket(ticket)
  }
  const removeTicket = () => {
    setTicket(null)
  }

  return (
    <NativeBaseProvider>
      <Provider>
        <View style={styles.container}>
          {/* <Center >
            <TouchableOpacity onPress={readNdef}>
              <Text>Scan a Tag</Text>
            </TouchableOpacity>
          </Center> */}
          <Header />
          <TicketBar ticket={ticket} removeTicket={removeTicket}></TicketBar>
          <Station name={'Tel Aviv'} id={'00456'} />
          
          {/* {renderLines(linesApi)} */}
          <FlatList
            showsVerticalScrollIndicator={false}
            style={styles.list}
            data={lines_mockup}
            renderItem={(itemData) => (
              <Bus
                key={itemData.id}
                line={itemData.item.line}
                frequency={itemData.item.frequency}
                start={itemData.item.start}
                destination={itemData.item.destination}
                addTicket={addTicket}
              ></Bus>
            )}
          ></FlatList>

          <StatusBar style="light" backgroundColor="transparent" />
        </View>
      </Provider>
    </NativeBaseProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  list: {
    width: '85%',
    height: '100%',
    marginBottom: 2,
  },
})
