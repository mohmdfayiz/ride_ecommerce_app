import { useState } from 'react'
import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import Toast from 'react-native-toast-message';
import CartItem from '@/components/CartItem';
import { useAppSelector, useAppDispatch } from '@/hooks/storeHook'
import { removeItem, updateQuantity, resetCart } from '@/store/cartSlice'
import { COUPONS } from '@/constants/data'
import { ChevronRight } from '@/constants/icons'

const cart = () => {

  const [coupon, setCoupon] = useState({ code: '', discount: 0, value: 0 })
  const [slide, setSlide] = useState(false)
  const { items } = useAppSelector(state => state.cart)

  const dispatch = useAppDispatch()
  const total = items?.reduce((acc, item) => acc + item.quantity * item.price, 0)

  const handleCheckout = () => {
    setSlide(!slide)
    Toast.show({
      type: 'success',
      text1: 'Checkout Successful',
    })
    setTimeout(() => { dispatch(resetCart()) }, 2000)
  }

  const handleQuantity = (id: string, quantity: number) => {
    if (quantity < 1) {
      return dispatch(removeItem(id))
    }
    dispatch(updateQuantity({ id, quantity }))
  }

  const handleCouponApply = (code: string) => {
    const coupon = COUPONS.find(item => item.code === code)
    if (coupon) {
      const discountValue = (total * coupon.discount) / 100
      setCoupon({ ...coupon, value: discountValue })
    } else {
      Toast.show({
        type: 'error',
        text1: 'Invalid Coupon',
      })
    }
  }

  if (items?.length === 0) {
    return (
      <View className='h-full bg-primary'>
        <View className='flex-1 items-center justify-center'>
          <Text className='text-white font-pbold'>Cart is empty</Text>
        </View>
      </View>
    )
  }

  return (
    <View className='h-full bg-primary'>
      <ScrollView className='max-h-[50vh]'>
        {
          items?.map((item) => (<CartItem key={item?.id} item={item} handleQuantity={handleQuantity} />))
        }
      </ScrollView>

      <View className='p-4'>
        <TextInput className='bg-tertiary px-4 py-3 rounded-xl font-pregular text-gray-400' onChangeText={text => setCoupon({ ...coupon, code: text })} />
        <TouchableOpacity onPress={() => handleCouponApply(coupon.code)} className='absolute right-4 translate-y-4'>
          <LinearGradient colors={['#37B6E9', '#4B4CED']} start={{ x: 0, y: 0.5 }} end={{ x: 0.5, y: 1.2 }} className='rounded-xl px-6 py-3 justify-center items-center'>
            <Text className='text-white font-pbold'>Apply</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>

      <View>
        <Text className='text-gray-400 text-center font-pregular'>Your bag qualifies for free shipping</Text>
        <View className='flex gap-1 mt-2 px-4'>
          <View className='flex-row justify-between'>
            <Text className='text-white font-psemibold'>Subtotal:</Text>
            <Text className='text-gray-400 font-pregular'>${total}</Text>
          </View>
          <View className='flex-row justify-between'>
            <Text className='text-white font-psemibold'>Delivery fee:</Text>
            <Text className='text-gray-400 font-pregular'>$0</Text>
          </View>
          <View className='flex-row justify-between'>
            <Text className='text-white font-psemibold'>Discount:</Text>
            <Text className='text-gray-400 font-pregular'>{coupon.discount ? coupon.discount + '%' : '-'}</Text>
          </View>
          <View className='flex-row justify-between'>
            <Text className='text-white font-psemibold'>Total:</Text>
            <Text className='text-skyblue font-pregular'>${total - coupon?.value}</Text>
          </View>
        </View>
      </View>

      <View className='flex w-full py-2 flex-row justify-center items-center'>
        <View className={`w-36 h-12 bg-tertiary rounded-xl flex-row items-center ${slide ? 'justify-end' : ''} transition-all`}>
          <CheckoutBtn handleCheckout={handleCheckout} />
          {!slide && <Text className='text-gray-400 font-pregular ml-4'>Checkout</Text>}
        </View>
      </View>
    </View>
  )
}

const CheckoutBtn = ({ handleCheckout }: { handleCheckout: () => void }) => {
  return (
    <TouchableOpacity onPress={handleCheckout}>
      <LinearGradient colors={['#37B6E9', '#4B4CED']} start={{ x: 0, y: 0.5 }} end={{ x: 0.5, y: 1.2 }} className='rounded-xl w-10 h-10 justify-center items-center'>
        <ChevronRight />
      </LinearGradient>
    </TouchableOpacity >
  )
}

export default cart