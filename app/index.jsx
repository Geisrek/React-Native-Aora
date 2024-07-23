import { StatusBar } from 'expo-status-bar';
import React from 'react';
 import { Text, View,Image } from 'react-native';
 import { Link ,router,Stack} from 'expo-router';
import CustomButton from '../components/CustomButton';
import { images } from '../constants';

export default function App() {
  
  return (
  <View className="flex-1 items-center justify-center bg-light bg-primary justify-end p-10 h-full">
     <Image source={images.logoSmall} resizeMode='cover' className='absolute top-40'/>
     <Text className='text-white text-3xl font-pbold'>Hello there</Text>
      <CustomButton title='Welcome ' containerStyles='mt-8 w-[300] justify-self-end' handlePress={()=>router.replace('/home')}/>
      
    </View>
  );
}