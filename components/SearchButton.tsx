import { TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Search } from "@/constants/icons";


const SearchBtn = () => {
    return (
      <TouchableOpacity>
        <LinearGradient colors={['#37B6E9', '#4B4CED']} start={{ x: 0, y: 0.5 }} end={{ x: 0.5, y: 1.2 }} className='rounded-xl w-10 h-10 justify-center items-center'>
          <Search />
        </LinearGradient>
      </TouchableOpacity >
    )
  }

  export default SearchBtn;