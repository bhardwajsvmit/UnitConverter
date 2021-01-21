
import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, View,SafeAreaView, Dimensions} from 'react-native';
import {TabBar,TabView} from 'react-native-tab-view';
import convert from 'convert-units';
import MeasureView from './MeasureView'



const measures = convert().measures()
const maincolor='#052f5f'


const unCamelCase=(value)=>{
  return value.replace(/([A-Z])/g,'$1')
}

export default function App() {


  const [index,setIndex]=useState(0);
  const [routes]=useState(measures.map(m=>({key:m ,title:unCamelCase(m)})))
  const[value,setValue]=useState('0')

  const renderScene =({route}) =>{
    return <MeasureView measure={route.key} value={value} setValue={setValue} />

  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{textTransform:'capitalize',fontSize:40,fontWeight:'bold',alignSelf:'center', marginBottom:10 }}>
        unit converter
      </Text>
      <TabView navigationState={{index,routes}} 
       renderScene={renderScene}
       onIndexChange={setIndex}
       initialLayout={{width:Dimensions.get('window').width}}
       renderTabBar={(props)=>(
         <TabBar {...props} scrollEnabled tabStyle={{width:'auto',backgroundColor:maincolor}} />
       )} >

      </TabView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
 
  
});
