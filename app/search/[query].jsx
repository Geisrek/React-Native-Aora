import { View, Text, SafeAreaView,Image, RefreshControl,Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from 'expo-router'
import { FlatList, GestureHandlerRootView } from 'react-native-gesture-handler'
import { images } from '../../constants'
import SearchInput from '../../components/SearchInput'
import Trending from '../../components/Trending'
import EmptyState from '../../components/EmptyState'
import {getAllPosts, getLatestPosts, searchtPosts}from '../../lib/appwrite'
import useAppwrite from '../../lib/useAppWrite'
import VideoCard from '../../components/VideoCard'
const Search = () => {
  const {query}=useLocalSearchParams()
  const {data:posts,refetch}=useAppwrite(searchtPosts(query))

useEffect(()=>{},[query])
return (
  <GestureHandlerRootView>
  <SafeAreaView className='bg-primary h-full'>
      <FlatList
      data={posts.documents}
      keyExtractor={(item)=>item.$id}
      renderItem={({item})=>(
         <VideoCard video={item}/>
      )}
      ListHeaderComponent={()=>(
      <View className='my-6 px-4 space-y-6'>
              <View className='justify-between items-start flex-row mb-6'>
                  <View>
                   <Text className='font-pmedium text-sm text-gray-100'>Welcome back</Text>
                   <Text className='text-2xl font-psemibold text-white '>Comrade</Text>
                   </View>
                   <View className='mt-1.5'>
                      <Image
                      source={images.logoSmall}
                      className='w-9 h-10'
                      resizeMode='contain'
                      />
                     
                   </View>
              </View>
              <SearchInput/>
              
              
          </View>)
      }
      ListEmptyComponent={()=>(<EmptyState
      title='No video found'
      subtitle='Be the first one to upload the videos'
      />)}
      />
  </SafeAreaView>
  </GestureHandlerRootView>
)
}

export default Search