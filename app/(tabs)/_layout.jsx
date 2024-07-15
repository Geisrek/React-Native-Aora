import { View, Text,Image,Button } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { Tabs,Redirect } from 'expo-router'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { useNavigation } from 'expo-router';
import {icons} from '../../constants'
const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View className="flex items-center justify-center pt-[6]  " >
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-5 h-5"
      />
      <Text
        className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
  );
};
const TabsLayouts = () => {
  const navigation=useNavigation();
  React.useLayoutEffect(()=>{
      navigation.setOptions({
          title:'Marnie'
      })
  },[navigation])
  return (
   <>
   <StatusBar />
   <Tabs>
   
        <Tabs.Screen
        
          name="home"
          options={{
            tabBarLabel:'',
            
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.home}
                color={color}
                name="Home"
                focused={focused}
              />
            ),
          }}
        />
       
          <Tabs.Screen
        name='create'
        options={{
          tabBarLabel:'',
          title:'create',
          headerShown:false,
          tabBarIcon:({color,focused})=>(
           <TabIcon
           name='create'
           icon={icons.plus}
           color={color}
           focused={focused}/>)

          
        }
        }/>
          <Tabs.Screen
        name='profile'
        options={{
          tabBarLabel:'',
          title:'Profile',
          headerShown:false,
          tabBarIcon:({color,focused})=>(
           <TabIcon
           name='profile'
           icon={icons.profile}
           color={color}
           focused={focused}/>)

          
        }
        }/>
   </Tabs>
   </>
  )
}

export default TabsLayouts