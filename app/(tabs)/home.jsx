import { View, Text, SafeAreaView,Image } from 'react-native'
import React from 'react'
import { useNavigation } from 'expo-router'
import { FlatList, GestureHandlerRootView } from 'react-native-gesture-handler'
import { images } from '../../constants'
import SearchInput from '../../components/SearchInput'
const Home = () => {
   
  return (
    <GestureHandlerRootView>
    <SafeAreaView className='bg-primary'>
        <FlatList
        data={[{id:0},{id:0}]}
        keyExtractor={(item)=>item.$id}
        renderItem={({item})=>(
            <Text className='text-3xl text-white'>{item.id}</Text>
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
        />
    </SafeAreaView>
    </GestureHandlerRootView>
  )
}

export default Home