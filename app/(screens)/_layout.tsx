import { router, Stack } from "expo-router";
import { TouchableOpacity } from "react-native";
import { Search, ChevronLeft } from "@/constants/icons";
import { LinearGradient } from "expo-linear-gradient";

const SearchBtn = () => {
  return (
    <TouchableOpacity>
      <LinearGradient colors={['#37B6E9', '#4B4CED']} start={{ x: 0, y: 0.5 }} end={{ x: 0.5, y: 1.2 }} className='rounded-xl w-10 h-10 justify-center items-center'>
        <Search />
      </LinearGradient>
    </TouchableOpacity >
  )
}

const BackBtn = () => {
  return (
    <TouchableOpacity onPress={() => router.back()} >
      <LinearGradient colors={['#37B6E9', '#4B4CED']} start={{ x: 0, y: 0.5 }} end={{ x: 0.5, y: 1.2 }} className='rounded-xl w-10 h-10 justify-center items-center'>
        <ChevronLeft />
      </LinearGradient>
    </TouchableOpacity >
  )
}

const ScreenLayout = () => {
  return (
    <Stack screenOptions={{ animation: "slide_from_right" }}>
      <Stack.Screen
        name="index"
        options={{
          headerShown: true,
          headerTitle: "Choose Your Bike",
          headerTitleStyle: {
            color: "#f2f2f2",
            fontFamily: "Poppins-Bold",
          },
          headerRight: () => <SearchBtn />,
          headerStyle: {
            backgroundColor: "#242C3B",
          },
          headerBlurEffect: "extraLight",
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="cart"
        options={{
          headerShown: true,
          headerTitle: "My Shopping Cart",
          headerTitleStyle: {
            color: "#f2f2f2",
            fontFamily: "Poppins-Bold",
          },
          headerLeft: () => <BackBtn />,
          headerStyle: {
            backgroundColor: "#242C3B",
          },
          headerBlurEffect: "extraLight",
          headerShadowVisible: false,
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="profile"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="product/[id]"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="map"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="orders"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  )
}

export default ScreenLayout