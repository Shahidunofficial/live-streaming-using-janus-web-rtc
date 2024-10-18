import { View, Text } from 'react-native'
import React, { useState } from 'react'

export default function AddCourse() {
  const [classname, setClassname]=useState();
  const [image,setImage]=useState();
  const [description,setDescription]=useState();
  
  return (
    <View>
      <Text>AddCourse</Text>
    </View>
  )
}