import { StatusBar } from 'expo-status-bar';
import React from 'react';
 import { Text, View } from 'react-native';
 import { Link ,Stack} from 'expo-router';

export default function App() {
  return (
  <View className="flex-1 items-center justify-center bg-light">
      <Text className="fg-red text-3xl font-pblack">I love you Marnie</Text>
      <StatusBar style="auto" />
      <Link href="/home">Go to Home</Link>
      <Link href="/sign-in">Go to Home</Link>
    </View>
  );
}