import { View, Text,SafeAreaView,TouchableOpacity,Alert,TextInput,ScrollView, useColorScheme } from 'react-native'
import React,{useState} from 'react'
import Entypo from 'react-native-vector-icons/Entypo';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Metrics from '../Constants/Metrics';
import { useDispatch } from 'react-redux';
import { saveUserProfileInfo, saveUserType } from '../utils/AsyncStorageHelper';
import { logout } from '../Redux/reducer/User';
import {  Switch } from 'react-native-paper';
import { clearusertype } from '../Redux/reducer/userType';
import { MAIN_ROUTE } from '../routes/RouteConst';

const EditProfile = () => {
  const navigation=useNavigation()
  const theme = useColorScheme()
const[name,setName]=useState('')
const[phoneNo,setPhoneNo]=useState('')
const [dob,setDob]=useState('')
const [isSwitchOn, setIsSwitchOn] = useState(false);
const[bio,setBio]=useState('')
const[artist,setArtist]=useState('')

const dispatch = useDispatch()

const onLogoutPress = async (props) => {
   await saveUserType({})
    await saveUserProfileInfo({})
    dispatch(logout());
    navigation.navigate('Login')
};

const onToggleSwitch = () => {
  setIsSwitchOn(!isSwitchOn);
  if(!isSwitchOn){
     
       dispatch(clearusertype());
    navigation.reset({
      index: 0,
      routes: [{name: MAIN_ROUTE}],
    });
  }
}

  return (
    <SafeAreaView style={{width:'100%',backgroundColor:theme ==='dark'?'black':'white',flex:1}}>
     <View style={{margin:10,flexDirection:'row',justifyContent:'space-between'}}>
     <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        
        <Ionicons
            onPress={() => {
               navigation.goBack()
            }}
            style={{
              paddingRight: 5
            }}
            name={'arrow-back'}
            size={40}
            color={theme ==='dark'?'white':'black'}
          />
         <Text style={{paddingLeft:10,color:theme ==='dark'?'white':'black',fontWeight:'bold',fontSize:30}}>{'Settings'}</Text>
         </View>
         {/* <View style={{bottom:10}}>
               <Entypo
                  name="menu"
                   size={40}
                   style={{color:'black',}}
                  onPress={()=>{ navigation.dispatch(DrawerActions.openDrawer());}}
                 /> 
        </View> */}
    </View>

    <View>
    <ScrollView>

      {/* <View style={{alignSelf:'center',padding:10, width: '90%',}}>
        <View style={{}}>
        <Text style={{fontSize:15,fontWeight:'bold',color:'black',marginLeft:20}}>User Name  : </Text>
             <TextInput
                   value={name}
                   placeholder={'Enter username'}
                   placeholderTextColor={'grey'}
                   style={{padding:10,backgroundColor:'white',borderRadius:5,margin:10,width:'90%',marginLeft: Metrics.rfv(20),}}
                   onChangeText={text => {
                   setName(text);
                   }}
                 />
        </View>
        <View style={{}}>
        <Text style={{fontSize:15,fontWeight:'bold',color:'black',marginLeft:20}}>Type of Artist  : </Text>
               <TextInput
                   value={artist}
                   placeholder={'Enter type of artist'}
                   placeholderTextColor={'grey'}
                   style={{padding:10,backgroundColor:'white',borderRadius:5,margin:10,width:'90%',marginLeft: Metrics.rfv(20),}}
                   onChangeText={text => {
                   setArtist(text);
                   }}
                 />
        </View>
        <View style={{}}>
        <Text style={{fontSize:15,fontWeight:'bold',color:'black',marginLeft:20}}>Dob  : </Text>
               <TextInput
                   value={dob}
                   placeholder={'Enter dob'}
                   placeholderTextColor={'grey'}
                   style={{padding:10,backgroundColor:'white',borderRadius:5,margin:10,width:'90%',marginLeft: Metrics.rfv(20),}}
                   onChangeText={text => {
                   setDob(text);
                   }}
                 />
        </View>
        <View style={{}}>
        <Text style={{fontSize:15,fontWeight:'bold',color:'black',marginLeft:20}}>Audio bio  : </Text>
               <TextInput
                   value={bio}
                   placeholder={'Enter Audio bio'}
                   placeholderTextColor={'grey'}
                   style={{padding:10,backgroundColor:'white',borderRadius:5,margin:10,width:'90%',marginLeft: Metrics.rfv(20),}}
                   onChangeText={text => {
                   setBio(text);
                   }}
                 />
        </View>
        <View style={{}}>
        <Text style={{fontSize:15,fontWeight:'bold',color:'black',marginLeft:20}}>Phone number  : </Text>
              <TextInput
                   value={phoneNo}
                   placeholder={'Enter phoneNo'}
                   placeholderTextColor={'grey'}
                   style={{padding:10,backgroundColor:'white',borderRadius:5,margin:10,width:'90%',marginLeft: Metrics.rfv(20),}}
                   onChangeText={text => {
                   setPhoneNo(text);
                   }}
                 />
        </View>

        <TouchableOpacity style={{backgroundColor:'black',width:200,padding:10,
          alignSelf:'center',marginTop:20,borderRadius:5}}
          onPress={()=>{
             
          }}>
      <Text style={{alignSelf:'center',color:'white'}}>Submit</Text>
     </TouchableOpacity>
      </View> */}
     
      <View style={{marginLeft:50,marginTop:30}}>
      <View style={{flexDirection:'row',}}>
      <Text style={{color:theme ==='dark'?'white':'black',fontSize:25,fontWeight:'bold',margin:10}}>Private mode</Text>
      <Switch
              style={{
                transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }],marginLeft:30
              }}
              color={theme === 'dark' ? 'white':'black'}
              value={!isSwitchOn}
              onValueChange={onToggleSwitch}
            />
      </View>
      <TouchableOpacity onPress={()=>{navigation.navigate('About')}}>
            <Text style={{color:theme ==='dark'?'white':'black',fontSize:25,fontWeight:'bold',margin:10}}>Privacy</Text>
           </TouchableOpacity>
           <TouchableOpacity onPress={()=>{navigation.navigate('Support')}}>
            <Text style={{color:theme ==='dark'?'white':'black',fontSize:25,fontWeight:'bold',margin:10}}>Help</Text>
           </TouchableOpacity>
       </View>
       <View style={{alignSelf:'center',flex:1,marginTop: Metrics.rfv(30)}}>
                   <TouchableOpacity onPress={()=>{
                      Alert.alert("Logout", "Are you want Logout ?",
                      [
                        { text: "Cancel", onPress: () => { } },
                        { text: "Ok", onPress: () => onLogoutPress() }
                      ])
                   }}
                    style={{backgroundColor:theme ==='dark'?'white':'black',padding:10,borderRadius:5,width:150,}}>
                        <Text style={{alignSelf:'center',color:theme ==='dark'?'black':'white'}}>Logout</Text>
                   </TouchableOpacity>
                   </View>
      </ScrollView>
    </View>
    </SafeAreaView>
  )
}

export default EditProfile