import { Stack } from "expo-router";
import BackBtn from "@/components/BackButton";
import SearchBtn from "@/components/SearchButton";

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