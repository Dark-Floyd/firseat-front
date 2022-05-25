import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, FlatList } from 'react-native'
import Header from './components/Header'
import { Provider, atom, useAtom } from 'jotai'
import Bus from './components/Bus'
import { useState, useCallback, useEffect } from 'react'
import Station from './components/Station'
import { NativeBaseProvider, Center } from 'native-base'
import TicketBar from './components/TicketBar'
import { getAllLines, getStation } from './api'
import NfcManager, { NfcTech } from 'react-native-nfc-manager'
import { MaterialCommunityIcons } from '@expo/vector-icons'

try {
  NfcManager.start()
} catch (error) {
  console.log(error)
}

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
  const [stationApi, setStationApi] = useState(null)

  const fetchStation = useCallback(async () => {
    const res_station = await getStation()
    setStationApi(res_station)
  }, [])

  const fetchLines = useCallback(async () => {
    const res = await getAllLines()
    setLinesApi(res)
  }, [])
  const renderLines = (lines) => {
    return (
      <FlatList
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
            ticket={ticket}
          ></Bus>
        )}
      ></FlatList>
    )
  }
  useEffect(() => {
    fetchLines()
    fetchStation()
  }, [])
  renderStation = (station) => {
    console.log(station)
    return <Station name={station.name} id={station.stationNumber} />
  }
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
          <Center>
            {/* <MaterialCommunityIcons name="cellphone-nfc" size={80} color="white" />
            <Button onPress={readNdef} variant="outline" colorScheme={"dark"} borderRadius={20} margin={5}>
              <Text style={{color:'white',fontSize:30}}>Press to Scan</Text>
            </Button> */}
          </Center>
          <Header />
          <TicketBar ticket={ticket} removeTicket={removeTicket}></TicketBar>
          {stationApi ? renderStation(stationApi) : null}
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
    color: 'white',
  },
  list: {
    width: '85%',
    height: '100%',
    marginBottom: 2,
  },
})
