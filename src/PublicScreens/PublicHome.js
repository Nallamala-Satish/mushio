import { View, Text,SafeAreaView,Image,TouchableOpacity, ScrollView, FlatList } from 'react-native'
import React,{useState} from 'react'
import Loader from '../Components/Loader'
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { useNavigation } from '@react-navigation/native';
import Metrics from '../Constants/Metrics';
import { Card } from 'react-native-paper';
import { Badge } from 'react-native-elements';

const PublicHome = () => {
  const navigation=useNavigation()
  const[loading,setLoading]=useState(false)

  const data=[
    {id:1,image:require('../assets/images/place1.jpg')},
    {id:2,image:require('../assets/images/place2.jpg')},
    {id:3,image:require('../assets/images/place3.jpg')},
    {id:4,image:require('../assets/images/place4.jpg')},
  ]
const Item= ({item})=>{
  return(
    <View style={{margin:5,alignSelf:'center', width:"100%"}}>
        <View style={{borderWidth:0.5,marginTop:10}}/>
      <View>
        <TouchableOpacity style={{ width:"100%"   }}
        onPress={()=>{
        //   setProfileImg()
          }}>
          <Image
          style={{
            width:"99%",alignSelf:'center'
            }}
           source={item.image}
         />
         </TouchableOpacity>
          <View style={{flexDirection:'row',justifyContent:'space-around',margin:5}}> 
              <Entypo
                  name="eye"
                   size={25}
                   style={{color:'black'}}
                 onPress={()=>{ navigation.navigate('')}} 
                 />
                   <FontAwesome
                  name="comment-o"
                   size={25}
                   style={{color:'black'}}
                 onPress={()=>{ navigation.navigate('')}} 
                 />
                   <EvilIcons
                  name="sc-telegram"
                   size={30}
                   style={{color:'black'}}
                 onPress={()=>{ navigation.navigate('')}} 
                 />
          </View>
      </View>
      <View style={{borderWidth:0.5,marginTop:10}}/>
    </View>
  )
}

  return (
    <SafeAreaView style={{alignSelf:'center',width:'100%',flex:1,marginBottom:250,}}>
    <Loader loading={loading}></Loader>
      <View>
      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
          <View>
        <TouchableOpacity style={{backgroundColor:'white', width:Metrics.rfv(60),height:Metrics.rfv(60),borderRadius:Metrics.rfv(10),}}
        onPress={()=>{
        //   setProfileImg()
          }}>
          <Image
          style={{
             width:Metrics.rfv(60),height:Metrics.rfv(60),margin:Metrics.rfv(0),borderRadius:Metrics.rfv(10),
            }}
           source={require('../assets/images/image3.jpg')}
         />
         </TouchableOpacity>
      </View>
          <View style={{marginTop:Metrics.rfv(-10)}}>
          <Badge
              value={ '1' }
              containerStyle={{
                top: Metrics.rfv(20),
                left: Metrics.rfv(5),
              }}></Badge>
               <Fontisto
                  name="hipchat"
                   size={30}
                   style={{color:'black',marginRight:20,margin:10}}
                 onPress={()=>{ navigation.navigate('ChatScreen')}} 
                 /> 
                
      </View>
      </View>
      <View style={{marginTop:5}}>
      <View style={{borderWidth:0.5,marginTop:10}}/>
      <View style={{flexDirection:'row',margin:10}}>
         <TouchableOpacity style={{backgroundColor:'white', width:Metrics.rfv(35),height:Metrics.rfv(35),borderRadius:Metrics.rfv(30),}}
        onPress={()=>{
        //   setProfileImg()
          }}>
          <Image
          style={{
             width:Metrics.rfv(30),height:Metrics.rfv(30),margin:Metrics.rfv(3),borderRadius:Metrics.rfv(30),
            }}
           source={require('../assets/images/profileImg.png')}
         />
         </TouchableOpacity>
         <Text style={{paddingLeft:10,color:'black',fontWeight:'bold',fontSize:20}}>{'Satish'}</Text>
         </View>
       <View style={{borderWidth:0.5,}}/>
           <ScrollView>
             <View style={{flex:2}}>
                 <FlatList
                 data={data}
                 renderItem={Item}
                 keyExtractor={item =>item.id}
                 />
             </View>
           </ScrollView>
      </View>
    
    </View>
    </SafeAreaView>
  )
}

export default PublicHome