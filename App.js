import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import Header from './components/Header'
import { Provider, atom, useAtom } from "jotai"; 
import Bus from './components/Bus'
import { useState } from 'react'
import Station from './components/Station'
const OrderTicketModalVisible = atom(false);
const lines = [
  { line: '921', frequency: '08:00', id: 1,company:'egged' },
  { line: '826', frequency: '10:00', id: 2,company:'nativ' },
  { line: '123', frequency: '08:00', id: 3,company:'dan' },
  { line: '921', frequency: '09:00', id: 4,company:'egged' },
  { line: '426', frequency: '08:00', id: 5,company:'nativ' },
  { line: '545', frequency: '08:00', id: 6,company:'egged' },
]
export default function App() {
  const [isOrderTicket, setIsOrderTicket] = useState(false)
 
  return (
    <Provider>
    <View style={styles.container}>
      <Header title="Firseat" />
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
            onPress={setIsOrderTicket}
            visible={isOrderTicket}
          ></Bus>
        )}
      ></FlatList>

      <StatusBar style="auto" />
    </View>
    </Provider>
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
