import { View,Image, Text ,SafeAreaView,ScrollView} from 'react-native'
import React, { useState } from 'react'
import {images} from '../../constants'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { Link } from 'expo-router'
import { getCurrentUser } from '../../lib/appwrite'
import { useGlobalContext } from '../../context/GlobalProvider'
const SignIn = () => {
  const {setUser,setIsLogged}=useGlobalContext()
    const [form,setForm]=useState({
        Email:'',
        password:''
    });
    const [isSubmiting, setIsSubmiting] = useState(false)
    const Submit=async()=>{
      if(!form.Email||!form.password){
          Alert.alert('Error','Please fill in all the fields')
      }
      setIsSubmiting(true)
      try{
  
  const result=await getCurrentUser()
  setUser(result)
  setIsLogged(true)
   router.replace('/home')
  }
   catch(error){
    Alert.alert('Error',error.message)
   }finally{
      setIsSubmiting(false)
   }
  }
  return (
    <SafeAreaView className="bg-primary h-full ">
      <ScrollView >
        <View className="w-full flex gap-y-1 justify-center min-h-[83vh] pt-40 px-4 my-6 ">
          <Image source={images.logo} resizeMode='contain' className='w-[115px] h-[35px]'/>
          <Text className="text-white text-2xl text-semibold font-psemibold mt-10">Welcome to Aora</Text>
          <FormField
          otherStyles='1'
          title='Email'
          value={form.Email}
          handleChangeText={(e)=>setForm({...form,Email:e})}
          keyboardType='email-address'
          />
           <FormField
            otherStyles='1'
          title='Password'
          value={form.password}
          handleChangeText={(e)=>setForm({...form,password:e})}
          />
          
          <CustomButton
          title='Sign In'
          handlePress={Submit}
          containerStyles='mt-10'
          isLoading={isSubmiting}/>
          <View className="justify-center  flex-row gap-5">
            <Text className="text-lg text-gray-100 font-pregular">
                Don't have an account?
            </Text>
            <Link href='/sign-up' className='text-lg text-gray-100 font-psemibold text-secondary '>Sign up</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn
//min-h-[85vh]