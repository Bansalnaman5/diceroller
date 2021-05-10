import React,{useState} from 'react';
import {Text,View,TouchableOpacity,StatusBar,Image,StyleSheet} from 'react-native';
import d1 from './assets/dice1.png'
import d2 from './assets/dice2.png'
import d3 from './assets/dice3.png'
import d4 from './assets/dice4.png'
import d5 from './assets/dice5.png'
import d6 from './assets/dice6.png'

const App=()=>{
  const [uri,setUri]=useState(d1);
  const a=[d1,d2,d3,d4,d5,d6]
  const changeImage=()=>{
    let r=Math.floor(Math.random()*6);
    setUri(a[r]);
  }
  return (
    <>
    <View style={styels.container} > 
    <Image style={styels.img} source={uri} />     
    <TouchableOpacity onPress={changeImage} >
      <Text style={styels.txt} >Roll</Text>
    </TouchableOpacity>
    </View>
    </>
  )
}

const styels=StyleSheet.create({
  container:{
    backgroundColor:'#2E86C1',
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  txt:{
    fontSize:32,
    fontWeight:'bold',
    color:'#5DADE2',
    textTransform:'uppercase',
    backgroundColor:'#1B4F72',
    borderRadius:10,
    padding:10
  },
  img:{
    width:180,
    height:180,
    marginBottom:10
  }
})

export default App;