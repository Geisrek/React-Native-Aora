import { View,Image, Text ,SafeAreaView,ScrollView} from 'react-native'
import React, { useState } from 'react'
import {images} from '../../constants'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { Link } from 'expo-router'
import { createUser } from '../../lib/appwrite'
const SignUp = () => {
    const [form,setForm]=useState({
        Email:'',
        password:'',
        username:''
    });
    const [isSubmiting, setIsSubmiting] = useState(false)
    const Submit=()=>{
     createUser()
    }
  return (
    <SafeAreaView className="bg-primary h-full ">
      <ScrollView >
        <View className="w-full flex gap-y-1 justify-center min-h-[83vh] pt-20 px-4 my-6 ">
          <Image source={images.logo} resizeMode='contain' className='w-[115px] h-[35px]'/>
          <Text className="text-white text-2xl text-semibold font-psemibold mt-10">Welcome to Aora</Text>
          
          <FormField
          otherStyles='1'
          title='Username'
          value={form.username}
          handleChangeText={(e)=>setForm({...form,username:e})}
          
          />
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
          containerStyles='mt-1'
          isLoading={isSubmiting}/>
          <View className="justify-center  flex-row gap-0 ml-10 mr-10 w-[70vw]">
            <Text className="text-lg text-gray-100 font-pregular">
Have an account already?            </Text>
            <Link href='/sign-in' className='text-lg text-gray-100 font-psemibold text-secondary '>Sign in</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp
//min-h-[85vh]