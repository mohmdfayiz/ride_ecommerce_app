import { View, Text, Image, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Minus, Plus } from '@/constants/icons'
import { CartItem as CartItemProps } from '@/types'

const CartItem = ({ item, handleQuantity }: { item: CartItemProps, handleQuantity: (id: string, quantity: number) => void }) => {
    return (
        <View key={item?.id} className='flex-row items-center justify-between p-4 border-b border-secondary'>
            <View >
                <LinearGradient colors={['#353F54', '#222834']} start={{ x: 0, y: 0.5 }} end={{ x: 0.5, y: 1.2 }} className='rounded-xl h-24 w-32 p-2 justify-center items-center'>
                    <Image source={item?.image} className='h-full w-full' />
                </LinearGradient>
            </View>
            <View className='flex-1 pl-4'>
                <Text className='text-white font-pbold mt-4'>{item?.name}</Text>
                <View className='flex-row flex-1 justify-between items-center'>
                    <Text className='text-skyblue font-pregular text-sm'>${item?.price}</Text>
                    <View className='flex-row gap-x-2'>
                        <TouchableOpacity onPress={() => handleQuantity(item?.id, item?.quantity + 1)}>
                            <LinearGradient colors={['#37B6E9', '#4B4CED']} start={{ x: 0, y: 0.5 }} end={{ x: 0.5, y: 1.2 }} className='rounded-md w-5 h-5 p-3 justify-center items-center'>
                                <Plus />
                            </LinearGradient>
                        </TouchableOpacity>
                        <Text className='text-gray-400 font-pregular'>{item?.quantity}</Text>
                        <TouchableOpacity onPress={() => handleQuantity(item?.id, item?.quantity - 1)} className='rounded-md w-5 h-5 p-3 justify-center items-center bg-secondary'>
                            <Minus />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default CartItem