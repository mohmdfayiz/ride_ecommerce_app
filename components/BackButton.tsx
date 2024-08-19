import { TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { router } from 'expo-router'
import { ChevronLeft } from '@/constants/icons'

const BackBtn = () => {
    return (
      <TouchableOpacity onPress={() => router.back()} >
        <LinearGradient colors={['#37B6E9', '#4B4CED']} start={{ x: 0, y: 0.5 }} end={{ x: 0.5, y: 1.2 }} className='rounded-xl w-10 h-10 justify-center items-center'>
          <ChevronLeft />
        </LinearGradient>
      </TouchableOpacity >
    )
  }

  export default BackBtn