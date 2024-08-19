import { View, Text, TouchableOpacity, Image } from 'react-native'
import { BlurView } from 'expo-blur'
import { Href, Link } from 'expo-router'
import { Favourite, Heart } from '@/constants/icons'
import { Product } from '@/types'

const ProductCard = ({ product, isFavourite, handleFavourite }: { product: Product, isFavourite: boolean, handleFavourite: (id: string) => void }) => {
    return (
        <View key={product.id} className='h-56 w-[48%] relative mb-2'>
            <TouchableOpacity onPress={() => handleFavourite(product.id)} className='absolute z-10 top-4 right-4'>
                {isFavourite ? <Favourite /> : <Heart />}
            </TouchableOpacity>
            <BlurView experimentalBlurMethod='dimezisBlurView' tint='dark' intensity={100} className='flex-1 overflow-hidden rounded-3xl border border-secondary'>
                <Link href={`/product/${product.id}` as Href<string>}>
                    <View className='gap-y-1 p-4'>
                        <Image source={product.image} className='h-28 w-36 object-contain' />
                        <View>
                            <Text className='text-gray-500 font-psemibold'>{product.category}</Text>
                            <Text className='text-white font-pbold text-base'>{product.name}</Text>
                            <Text className='text-gray-500 font-psemibold'>${product.price}</Text>
                        </View>
                    </View>
                </Link>
            </BlurView>
        </View>
    )
}

export default ProductCard