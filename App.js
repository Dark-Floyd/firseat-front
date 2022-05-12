import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import Header from './components/Header'
import { Provider, atom, useAtom } from "jotai"; 
import Bus from './components/Bus'
import { useState } from 'react'
import Station from './components/Station'
import { NativeBaseProvider, Box } from "native-base";
import TicketBar from './components/TicketBar';
const lines = [
  { line: '921', frequency: '08:00', id: 1,company:'egged',start:'Tel Aviv',destination:'Haifa'},
  { line: '826', frequency: '10:00', id: 2,company:'nativ',start:'Tel Aviv',destination:'Jerusalem' },
  { line: '123', frequency: '08:00', id: 3,company:'dan',start:'Tel Aviv',destination:'Yad Natan' },
  { line: '921', frequency: '09:00', id: 4,company:'egged',start:'Tel Aviv',destination:'Netivot' },
  { line: '426', frequency: '08:00', id: 5,company:'nativ',start:'Tel Aviv',destination:'Jaffa' },
  { line: '545', frequency: '08:00', id: 6,company:'egged',start:'Tel Aviv',destination:'Eilat' },
]
export default function App() {
  
 
  return (
    <NativeBaseProvider>
    <Provider>
    <View style={styles.container}>
      <Header/>
      <TicketBar></TicketBar>
      <Station name={'Tel Aviv'} id={'00456'} />

      <FlatList
        showsVerticalScrollIndicator={false}
        style={styles.list}
        data={lines}
        renderItem={(itemData) => (
          <Bus
            key={itemData.id}
            line={itemData.item.line}
            frequency={itemData.item.frequency}
            start={itemData.item.start}
            destination={itemData.item.destination}
          ></Bus>
        )}
      ></FlatList>

      <StatusBar style="light" backgroundColor='transparent' />
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
    width: '80%',
    height: '100%',
    marginBottom: 2,
  },
})
