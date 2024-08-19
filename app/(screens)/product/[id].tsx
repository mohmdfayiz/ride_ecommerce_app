import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useLocalSearchParams, router } from 'expo-router'
import { PRODUCTS } from '@/constants/data'
import { ProductBg } from '@/constants/images'
import { LinearGradient } from 'expo-linear-gradient'
import { ChevronLeft } from '@/constants/icons'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useAppSelector, useAppDispatch } from '@/hooks/storeHook';
import { addItem } from '@/store/cartSlice'
import { Product } from '@/types'

const BackBtn = ({ handlePress, tab }: { handlePress: () => void, tab: string | null }) => {
    return (
        <TouchableOpacity onPress={handlePress} className='absolute top-2 left-4'>
            <LinearGradient colors={['#37B6E9', '#4B4CED']} start={{ x: 0, y: 0.5 }} end={{ x: 0.5, y: 1.2 }} className='rounded-xl w-10 h-10 justify-center items-center'>
                <View className={tab ? '-rotate-90' : ''}>
                    <ChevronLeft />
                </View>
            </LinearGradient>
        </TouchableOpacity >
    )
}

const product = () => {

    const [tab, setTab] = useState<string | null>(null)
    const { items } = useAppSelector(state => state.cart)

    const { id } = useLocalSearchParams()
    const product = PRODUCTS.find(product => product.id === id)
    const dispatch = useAppDispatch()

    const handlePress = () => {
        tab ? setTab(null) : router.back()
    }

    const handleAddCart = (product: Product) => {
        dispatch(addItem({ ...product, quantity: 1 }))
        router.push('/cart')
    }

    return (
        <SafeAreaView className='bg-primary'>
            <ImageBackground source={ProductBg} className='absolute h-screen top-0 bottom-0 left-0 -right-16 -z-10' imageStyle={{ opacity: 0.6 }} />
            <View className='flex h-full'>
                {/* Header */}
                <View className='flex-row justify-center items-center p-4'>
                    <BackBtn handlePress={handlePress} tab={tab} />
                    <Text className='text-white font-pbold text-xl'>{product?.name}</Text>
                </View>

                {/* Details */}
                <View className='flex-1 items-center justify-center'>
                    <Image source={product?.image} className='h-64 w-80 object-cover' />
                </View>

                {/* Description */}
                <View className={`bg-tertiary rounded-t-3xl transition-all ${tab ? 'h-96' : 'h-20'}`}>
                    <View className='flex-row justify-around items-center p-4'>
                        <TouchableOpacity onPress={() => setTab('description')} className='px-6 py-2 border border-secondary shadow-inner rounded-lg'><Text className={`font-pregular text-base ${tab === 'description' ? 'text-skyblue' : 'text-gray-500'}`}>Description</Text></TouchableOpacity>
                        <TouchableOpacity onPress={() => setTab('specification')} className='px-6 py-2 border border-secondary shadow-inner rounded-lg'><Text className={`font-pregular text-base ${tab === 'specification' ? 'text-skyblue' : 'text-gray-500'}`}>Specification</Text></TouchableOpacity>
                    </View>
                    <View className={`${tab ? 'block mt-4 flex-1' : 'hidden'}`}>
                        <View className='px-4'>
                            <Text className='text-white font-pbold text-lg'>{product?.name}</Text>
                            <Text className='text-gray-500 font-pregular text-sm mt-2'>{product?.description}</Text>
                        </View>
                        <View className='absolute bottom-0 left-0 right-0 bg-secondary rounded-t-3xl flex-row justify-between items-center p-5'>
                            <Text className='text-skyblue font-pregular text-xl'>$ {product?.price}</Text>
                            {
                                items.find(item => item.id === product?.id) ? (
                                    <TouchableOpacity className='rounded-xl' onPress={() => router.push('/cart')}>
                                        <LinearGradient colors={['#37B6E9', '#4B4CED']} start={{ x: 0, y: 0.5 }} end={{ x: 1.5, y: 1 }} className='rounded-xl justify-center items-center px-6 py-2'>
                                            <Text className='text-white font-pregular text-base'>Go to cart</Text>
                                        </LinearGradient>
                                    </TouchableOpacity>
                                ) : (
                                    <TouchableOpacity className='rounded-xl' onPress={() => handleAddCart(product!)}>
                                        <LinearGradient colors={['#37B6E9', '#4B4CED']} start={{ x: 0, y: 0.5 }} end={{ x: 1.5, y: 1 }} className='rounded-xl justify-center items-center px-6 py-2'>
                                            <Text className='text-white font-pregular text-base'>Add to cart</Text>
                                        </LinearGradient>
                                    </TouchableOpacity>)
                            }
                        </View>
                    </View>
                </View>

            </View>
        </SafeAreaView>
    )
}

export default product