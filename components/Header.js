import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
//import Colors from '../constants/colors'
const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    header:{
        width:'100%',
        height:'13%',
        paddingTop:36,
        backgroundColor:'navy',
        alignItems:'center',
        justifyContent:'center'

    },
    headerTitle:{
        color:'white',
        fontSize:18,

    }
})

export default Header;
