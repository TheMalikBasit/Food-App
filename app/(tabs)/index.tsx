import Front from '@/components/Front'
import  AllFoods from '@/components/Menu';
import Simplified from '@/components/Simplified';
import { View } from 'react-native'

export default function HomeScreen1(){
  return(
    <View style = {{flex: 1}}>
      <Simplified myProps={AllFoods}/>
    </View>
  );
}