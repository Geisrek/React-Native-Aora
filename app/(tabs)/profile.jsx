import { View, Text, SafeAreaView, Image} from 'react-native'
import React, { useEffect} from 'react'
import { FlatList, GestureHandlerRootView } from 'react-native-gesture-handler'

import SearchInput from '../../components/SearchInput'

import EmptyState from '../../components/EmptyState'
import {  getUsertPosts}from '../../lib/appwrite'
import useAppwrite from '../../lib/useAppWrite'
import VideoCard from '../../components/VideoCard'
import {useGlobalContext} from '../../context/GlobalProvider'
import { TouchableOpacity } from 'react-native-web'
import { icons } from '../../constants'
import { Avatars } from 'react-native-appwrite'
import InfoBox from '../../components/InfoBox'
const Profile = () => {
  const {user,setUser,setIsLoggedIn}=useGlobalContext()
  const {query}=useLocalSearchParams()
  const {data:posts}=useAppwrite(()=>getUsertPosts(user.$id))
  const logout=()=>{

  }

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
        <View className="w-full justify-center items-center mt-6 mb-12 px-4">
        <TouchableOpacity
        className='justify-end w-full mb-10'
        onPress={logout}>
          <Image
          source={icons.logout}
          className="w-6 h-6"
          resizeMode='contain'
          />
        </TouchableOpacity>
        <View className='w-16 h-16 border border-secondary rounded-lg justify-center items-center'>
         <Image
         source={{uri:user?.avatar}}
         className='w-[90%] h-[90%] rounded-lg '
         resizeMode='cover'
         />
         <InfoBox
         title={user?.username}
         containerStyles='mt-5'
         titleStiles='text-lg'
         />
         <View className='mt-5 flex-row'>
         <InfoBox
         title={posts.length||0}
         subtitle="Posts"
         containerStyles='mr-10'
         titleStiles='text-xl'
         />
           <InfoBox
         title='1.5k'
         subtitle='Followers'
       
         titleStiles='text-lg'
         />
         </View>
        </View>
        </View>
      )
      }
      ListEmptyComponent={()=>(<EmptyState
      title='No video found'
      subtitle='No videos found for this query'
      />)}
      />
  </SafeAreaView>
  </GestureHandlerRootView>
)
}

export default Profile