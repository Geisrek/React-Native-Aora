import { View, Text, TouchableOpacity ,Image} from 'react-native'
import React, { useState } from 'react'
import { TextInput ,GestureHandlerRootView } from 'react-native-gesture-handler'
import {icons} from '../constants'
const SearchInput = ({title,value,keyboardType,placeholder,handleChangeText,otherStyles,...props}) => {
    const [showPassword,setShowPassword]=useState(false)
  return (
    <GestureHandlerRootView>
   
      <View className="border-2  w-full h-16 px-4 bg-black-200
      rounded-2xl focus:border-secondary items-center flex-row space-x-4">
       
        <TextInput
        className='text-base mt-0.5 text-white flex-1 font-pregular'
        value={value}
        placeholder='Surch for a video topic'
        onChangeText={handleChangeText}
        placeholderTextColor='#7b7b8b'
        secureTextEntry={title=='Password'&&!showPassword}
        />
      <TouchableOpacity>
        <Image
        source={icons.search}
        className='x-5 h-5'
        resizeMode='contain'
        />
      </TouchableOpacity>
      </View>
   
    </GestureHandlerRootView>
  )
}

export default SearchInput