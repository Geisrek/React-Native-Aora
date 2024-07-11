import { View, Text ,Image} from 'react-native'
import React from 'react'
import { images } from '../constants'
import CustomButton from '../components/CustomButton'
import { router } from 'expo-router'
const EmptyState = ({title,subtitle}) => {
  return (
    <View className="justify-center items-center px4">
      <Image source={images.empty} className='h-[270px] w-[215px] ' resizeMethod='contain'/>
      <Text className='font-pmedium text-sm text-gray-100'>{subtitle}</Text>
      <Text className='text-xl text-center font-psemibold text-white mt-2'>{title}</Text>
      <CustomButton
      title='Create video'
      handlePress={()=>router.push('/create')}
      containerStyles='w-full my-5'/>
    </View>
  )
}

export default EmptyState