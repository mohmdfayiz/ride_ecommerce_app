import { useEffect, useState } from 'react'
import { View, Text, Image, ImageBackground, ScrollView, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Href, router } from 'expo-router'
import { BlurView } from 'expo-blur'
import ProductCard from '@/components/ProductCard'
import { useAppSelector, useAppDispatch } from '@/hooks/storeHook'
import { addItem, removeItem } from '@/store/favouriteSlice'
import { HomeBg, RoadBike1 } from '@/constants/images'
import { PRODUCTS, TABS, CATEGORIES } from '@/constants/data'

const Home = () => {

  const [products, setProducts] = useState(PRODUCTS)
  const [filter, setFilter] = useState('All')
  const { items } = useAppSelector(state => state.favourite)
  const dispatch = useAppDispatch()

  const handleFavourite = (id: string) => {
    if (items.includes(id)) {
      return dispatch(removeItem(id))
    }
    dispatch(addItem(id))
  }

  const filterProduct = (category: string) => {
    if (category === 'All') { return setProducts(PRODUCTS) }
    const filtered = PRODUCTS.filter((product) => product.category === category)
    setProducts(filtered)
  }

  useEffect(() => {
    filterProduct(filter)
  }, [filter])

  return (
    <View className='flex-1 bg-primary'>
      <ImageBackground source={HomeBg} className='absolute h-screen top-10 bottom-0 left-0 right-0 -z-10' imageStyle={{ opacity: 0.6 }} />
      <ScrollView className='p-4'>

        {/* banner */}
        <View className='h-56 w-full'>
          <BlurView experimentalBlurMethod='dimezisBlurView' tint='dark' intensity={100} className='flex-1 justify-center items-center p-5 rounded-3xl overflow-hidden border-2 border-secondary'>
            <Image source={RoadBike1} className='h-40 w-72' />
            <Text className='text-gray-400 font-bold text-2xl absolute bottom-3 left-4'>30% Off</Text>
          </BlurView>
        </View>

        {/* filter */}
        <View className='my-5 flex-row items-center justify-around'>
          {
            filter === 'All' ?
              (<TouchableOpacity className='h-14 w-14 rounded-xl ' >
                <LinearGradient colors={['#37B6E9', '#4B4CED']} start={{ x: 0, y: 0.5 }} end={{ x: 0.5, y: 1.2 }} className='rounded-xl h-full justify-center items-center'>
                  <Text className='text-white font-psemibold text-base'>All</Text>
                </LinearGradient>
              </TouchableOpacity>)
              :
              (<TouchableOpacity onPress={() => setFilter('All')} className='h-14 w-14 items-center justify-center rounded-xl border border-secondary bg-tertiary/70' >
                <Text className='text-gray-400  font-psemibold text-base'>All</Text>
              </TouchableOpacity>)
          }
          {
            CATEGORIES.map((category) => (
              filter === category.name ?
                (<TouchableOpacity key={category.id} className='h-14 w-14 rounded-xl' >
                  <LinearGradient colors={['#37B6E9', '#4B4CED']} start={{ x: 0, y: 0.5 }} end={{ x: 0.5, y: 1.2 }} className='rounded-xl h-full justify-center items-center'>
                    <category.selectedIcon />
                  </LinearGradient>
                </TouchableOpacity>)
                :
                (<TouchableOpacity key={category.id} onPress={() => setFilter(category.name)} className='h-14 w-14 items-center justify-center rounded-xl border border-secondary bg-tertiary/70' >
                  <category.icon />
                </TouchableOpacity>)
            ))
          }
        </View>

        {/* Products */}
        <View className='flex-row flex-1 flex-wrap mb-5 justify-between'>
          {products.map((product) => (
            <ProductCard product={product} key={product.id} isFavourite={items.includes(product.id)} handleFavourite={handleFavourite} />
          ))}
        </View>
      </ScrollView>

      {/* tabs */}
      <View className='h-14 flex-row justify-around items-center bg-primary/70'>
        {
          TABS.map((tab, index) => (
            index === 0 ? (
              <TouchableOpacity key={tab.id}>
                <LinearGradient colors={['#37B6E9', '#4B4CED']} start={{ x: 0, y: 0.5 }} end={{ x: 0.5, y: 1.2 }} className='rounded-xl px-4 py-2 justify-center items-center'>
                  <tab.icon />
                </LinearGradient>
              </TouchableOpacity>
            ) :
              (
                <TouchableOpacity key={tab.id} className='px-4 py-2' onPress={() => router.push(tab.screen as Href<string>)}>
                  <tab.icon />
                </TouchableOpacity>)
          ))
        }
      </View>
    </View>
  )
}

export default Home;