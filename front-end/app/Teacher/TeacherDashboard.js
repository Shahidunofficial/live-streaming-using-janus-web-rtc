import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const TeacherDashboard = () => {
    
  return (
    <View style={Styles.container}>
        <View>My classes</View>
        <View>Finance</View>
        <View>Create class</View>


    </View>
  )
}

export default TeacherDashboard;

const Styles =StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        backgroundColor:"",
    },
    box:{

    },
})