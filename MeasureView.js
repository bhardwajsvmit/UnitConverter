import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Keyboard } from 'react-native';
import convert from 'convert-units';
import {Picker} from '@react-native-community/picker'
import {SimpleLineIcons} from '@expo/vector-icons'


const maincolor='#052f5f'

const MeasureView =({measure,value,setValue })=>{
    const units = convert().possibilities(measure)
    const[fromUnit,setFromUnit]=useState(units[0])
    const [toUnit,setToUnit]=useState(units[1])
    const[valueConverted,setValueConverted]=useState('0')
  
    useEffect(() => {
      setValueConverted(
        convert(+value)
        .from(fromUnit)
        .to(toUnit)
        .toFixed(2)
      )
    }, [value,fromUnit,toUnit])
  
  return(
    <View style={styles.container} >
   
   <View style={styles.row} >
   <View style={styles.column}>
     <Picker 
     selectedValue={fromUnit} 
     onValueChange={setFromUnit} 
     >
      {units.map((u,i)=>(
        <Picker.Item label={u} value={u} key={i} />
      ))}
     </Picker>
     </View>
     <View style={styles.column}>
     <TextInput value={value} 
        
        maxLength='10'
        onChangeText={setValue} 
        keyboardType='numeric'
        
        style={{flex:1,fontSize:30,alignSelf:'center',textAlign:'center'}}
        
        />
     </View>
   </View>
  
   <View>
       <TouchableHighlight onPress={Keyboard.dismiss} >
     <SimpleLineIcons 
     name="arrow-down"
     size={40}
     color={maincolor}
     style={{alignSelf:'center' }} />
   </TouchableHighlight>
   </View>
  
   <View style={styles.row} >
       <View style={styles.column}>
     <Picker  
     selectedValue={toUnit} 
     onValueChange={setToUnit} 
     >
      {units.map((u,i)=>(
        <Picker.Item label={u} value={u} key={i} />
      ))}
     </Picker>
     </View>
     <View style={styles.column}>
     <Text style={{fontSize:30,alignSelf:'center',}} >
          {valueConverted}
        </Text>
        
     </View>
   </View>
  
   </View>
  )
  }
  export default MeasureView;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection:'column',
      marginHorizontal:10
    },
    row:{
      flex:1,
      flexDirection:'row',
      justifyContent:'space-around',
    },
    column:{
      flex:1,
      alignSelf:'center'
    },
    input:{
      flex:1,
      height:40,
      borderColor:maincolor,
      borderBottomWidth:1,
      marginRight:20,
      marginLeft:10,
      fontSize:30,
      textAlign:'center',
    }
  });