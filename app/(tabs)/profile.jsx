import { View, Text, SafeAreaView, } from 'react-native'
import React, { useEffect} from 'react'
import { FlatList, GestureHandlerRootView } from 'react-native-gesture-handler'

import SearchInput from '../../components/SearchInput'

import EmptyState from '../../components/EmptyState'
import { searchtPosts}from '../../lib/appwrite'
import useAppwrite from '../../lib/useAppWrite'
import VideoCard from '../../components/VideoCard'

const Profile = () => {
  const {query}=useLocalSearchParams()
  const {data:posts,refetch}=useAppwrite(()=>searchtPosts(query))

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
      <View className='my-6 px-4 '>
             
                 
                   <Text className='font-pmedium text-sm text-gray-100'>Search Results</Text>
                   <Text className='text-2xl font-psemibold text-white '>{query}</Text>
                   <View className='mt-6 mb-8'>
                   <SearchInput initialQuery={query}
                   />
                   </View>
             
              
          </View>)
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