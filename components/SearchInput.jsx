import { View, Text, TouchableOpacity ,Image, Alert} from 'react-native'
import React, { useState } from 'react'
import { TextInput ,GestureHandlerRootView } from 'react-native-gesture-handler'
import {icons} from '../constants'
import {router, usePathname} from 'expo-router'
const SearchInput = ({initialQuery}) => {
   const pathname=usePathname()
   const [query, setQuery]=useState(initialQuery||'')
  return (
    <GestureHandlerRootView>
   
      <View className="border-2  w-full h-16 px-4 bg-black-200
      rounded-2xl focus:border-secondary items-center flex-row space-x-4">
       
        <TextInput
        className='text-base mt-0.5 text-white flex-1 font-pregular'
        value={query}
        placeholder='Surch for a video topic'
        onChangeText={(e)=>setQuery(e)}
        placeholderTextColor='#CDCDE0'
        
        />
      <TouchableOpacity
      onPress={()=>{
        if(!query){
          return Alert.alert('Missing query','Please input something to search result across database')
        }
        if(pathname.startsWith('/search')) router.setParams({query})
        else router.push(`/search/${query}`)
      }}>
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