import { View, Text, TouchableOpacity ,Image} from 'react-native'
import React, { useState } from 'react'
import { TextInput ,GestureHandlerRootView } from 'react-native-gesture-handler'
import {icons} from '../constants'
const FormField = ({title,value,keyboardType,placeholder,handleChangeText,otherStyles,...props}) => {
    const [showPassword,setShowPassword]=useState(false)
  return (
    <GestureHandlerRootView>
    <View className={`space-y- ${otherStyles}`}>
      <Text className="text-base text-gray-100 font-pmedium">{title}</Text>
      <View className="border-2  w-full h-16 px-4 bg-black-200
      rounded-2xl focus:border-secondary items-center flex-row">
       
        <TextInput
        className='text-white flex-1 font-psemibold'
        value={value}
        placeholder={placeholder}
        onChangeText={handleChangeText}
        placeholderTextColor='#7b7b8b'
        secureTextEntry={title=='Password'&&!showPassword}
        />
       {title=='Password'&& (
        <TouchableOpacity
        onPress={()=>setShowPassword(!showPassword)}>
            <Image source={showPassword?icons.eye:icons.eyeHide} className='w-6 h-6 'resizeMethod='contain'/>
        </TouchableOpacity>
       )}
      </View>
    </View>
    </GestureHandlerRootView>
  )
}

export default FormField