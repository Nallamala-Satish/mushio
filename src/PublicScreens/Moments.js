import { View, Text,TouchableOpacity,Image,FlatList,SafeAreaView,ScrollView,StyleSheet} from 'react-native'
import React,{useState,useEffect,useRef} from 'react'
import Metrics from '../Constants/Metrics'
import Loader from '../Components/Loader'
import { useIsFocused, useNavigation } from '@react-navigation/native'
import { API_BASE_URL } from '../api/ApiClient'
import { getUserProfileInfo } from '../utils/AsyncStorageHelper'
import Video from 'react-native-video';
import VideoPlayer from 'react-native-video-player'



const Moments = () => {
  const videoPlayer = useRef(null);
  const [loading,setLoading]=useState(false)
  const isFocused=useIsFocused()
  const[momentsArray,setMomentsArray]=useState([]);
  const navigation=useNavigation()
  const data=[
    {id:1,image:require('../assets/images/place1.jpg')},
    {id:2,image:require('../assets/images/place2.jpg')},
    {id:3,image:require('../assets/images/place3.jpg')},
    {id:4,image:require('../assets/images/place4.jpg')},
  ]

  

const Mymoments = async ()=>{
  const res = await getUserProfileInfo()
  console.log(res.accessToken)
  setLoading(true)
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${res.accessToken}`);


var requestOptions = {
method: 'GET',
headers: myHeaders,
redirect: 'follow'
};
console.log(myHeaders)
fetch(`${API_BASE_URL}/api/post/myPosts?postType=moments`, requestOptions)
.then(response => response.json())
.then(result => {
  console.log('..',result.data.list)
  if(result && result.success == true){
    const updatedA = result.data.list.map(item => ({
      files: item.files.map(file => ({
        ...file,
        userId: item._id
      }))
    }));
    let userdata=[]
    updatedA.map((e)=>{
       let a= e.files;
         for(let i=0; i<a.length;i++){
           // console.log('iiiiiiii',a[i])
           userdata.push(a[i])
         }
     })
    setMomentsArray(userdata)
    setLoading(false)
  }
  setLoading(false)
})
.catch(error => {
  console.log('error', error)
  setLoading(false)
});
}

useEffect(()=>{
  Mymoments();
},[isFocused])

const Item= ({item,index})=>{
  // console.log(item)
  return(
    <View style={{alignSelf:'center',borderWidth:1,margin:2,marginLeft:5}}>
        
      <View>
        <TouchableOpacity style={{    }}
        onPress={()=>{
          let id=item.userId
          navigation.navigate('PublicSearchScreen1',{selectedId:id})
          // selectSearchData(id)
       
          }}>
          { item.type == 'video'  ? (
                 < View style={{}}>
                   <VideoPlayer
                     video={{ uri:`${item.url}` }}
                    //  videoWidth={3000}
                    //  videoHeight={2000}
                    //  thumbnail={{ uri: 'https://i.picsum.photos/id/866/1600/900.jpg' }}
                     style={{width:110,height:100,alignSelf:'center',}}
                   />
            </View>
                 ) : item.type == 'image'  ?(
           < View style={{}}>
                  <Image
                  key={index}
                       source={{uri:item.url}}
                       style={{width:110,height:100,alignSelf:'center',}}
                      />
                </View>
           
               ):(null)}
         </TouchableOpacity>
         
      </View>
     
    </View>
  )
}



  return (
    <SafeAreaView style={{width:'100%',alignSelf:'center',}}>
      <Loader loading={loading}></Loader>
      <ScrollView>
      < View style={{}}>
              <FlatList
                numColumns={3}
                // horizontal
                data={momentsArray || []}
                renderItem={Item}
                keyExtractor={item =>item._id}
                />
               </View>
    
         {/* <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          {momentsArray.map((item) => (
             <View key={item._id} style={{ width: '33.33%',padding:1 }}>
        
                   {item.files.map((file) => (
                    // console.log(file)
            <View key={file._id} style={{margin:2}}>
              {file.type === 'image' && (
               <TouchableOpacity style={{backgroundColor:'white',  }}
                onPress={()=>{
                      //   setProfileImg()
                 }}>
                <Image
                  source={{ uri: file.url }}
                  style={{ width: '100%', height: 100, resizeMode: 'cover' }}
                />
                </TouchableOpacity>
              )}
              {file.type === 'video' && (
            <TouchableOpacity style={{backgroundColor:'white',  }}
                 onPress={()=>{
                      //   setProfileImg()
                }}>
                  <VideoPlayer
                  video={{ uri: file.url }}
                  style={{ width: '100%', height: 100, resizeMode: 'cover' }}
                />
                   </TouchableOpacity>
              )}
           
            </View>
          ))}
        
              </View>
          ))}
          </View> */}
         </ScrollView>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  toolbar: {
    marginTop: 30,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
  },
  mediaPlayer: {
    width:100,height:100,
    // position: 'absolute',
    // top: 0,
    // left: 0,
    // bottom: 0,
    // right: 0,
    // backgroundColor: 'black',
    // justifyContent: 'center',
  },
})
export default Moments