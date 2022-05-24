import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, FlatList } from 'react-native'
import Header from './components/Header'
import { Provider, atom, useAtom } from 'jotai'
import Bus from './components/Bus'
import { useState, useCallback, useEffect } from 'react'
import Station from './components/Station'
import { NativeBaseProvider, Box,Center,VStack,Divider,Button } from 'native-base'
import TicketBar from './components/TicketBar'
import { getAllLines, getStation } from './api'
import NfcManager, { NfcTech } from 'react-native-nfc-manager'
import { MaterialCommunityIcons } from '@expo/vector-icons';
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
  const [stationsApi, setStationsApi] = useState([])

  const fetchStations = useCallback(async () => {
    const res_stations = await getStation()
    setStationsApi(res_stations)
  }, [])




  const fetchLines = useCallback(async () => {
    const res = await getAllLines()
    setLinesApi(res)
  }, [])
  const renderLines = (lines) => {
    return(<FlatList
      showsVerticalScrollIndicator={false}
      style={styles.list}
      data={lines}
      renderItem={(itemData) => (
        <Bus
          key={itemData.id}
          line={itemData.item.lineNumber}
          frequency={itemData.item.time}
          start={itemData.item.start}
          destination={itemData.item.finalDestination}
          addTicket={addTicket}
          availableSeats={itemData.item.availableSeats}
        ></Bus>
      )}
    ></FlatList>
  );
  }
  useEffect(() => {
    fetchLines()
    fetchStations()
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
          <Center >
          {/* <MaterialCommunityIcons name="cellphone-nfc" size={80} color="white" />
            <Button onPress={readNdef} variant="outline" colorScheme={"dark"} borderRadius={20} margin={5}>
              <Text style={{color:'white',fontSize:30}}>Press to Scan</Text>
            </Button> */}
          </Center>
          <Header />
          <TicketBar ticket={ticket} removeTicket={removeTicket}></TicketBar>
          <Station name={"stationsApi[0].name"} id={"stationsApi[0].stationNumber"} />
          {renderLines(linesApi)}
          <StatusBar style="light" backgroundColor="transparent" />
        </View>
      </Provider>
    </NativeBaseProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    color:'white'
    
  },
  list: {
    width: '85%',
    height: '100%',
    marginBottom: 2,
  },
})
