import { Text, SafeAreaView, StyleSheet,Image ,View,Button,TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center',backgroundColor:'white' }}>
      <Image
        source={require('./assets/vs_blue.png')}
      />
      <Text style={styles.text_1}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
      <View style={styles.row}>
        <View>
          <View style={styles.row}>
            <Image source={require('./assets/star.png')}/>
            <Image source={require('./assets/star.png')}/>
            <Image source={require('./assets/star.png')}/>
            <Image source={require('./assets/star.png')}/>
            <Image source={require('./assets/star.png')}/>
          </View>
          <Text style={styles.text_2}>1.790.000 đ</Text>
        </View>
        <View>
          <Text style={styles.text_3}>(Xem 828 đánh giá)</Text>
          <Text style={styles.text_4}>1.790.000 đ<Image source={require('./assets/Line 1.png')} style={styles.text_line}/></Text>
        </View>
      </View>
      <View style={styles.row}>
        <Text style={styles.text_5}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
        <Image source={require('./assets/Group 1.png')}/>
      </View>
      <TouchableOpacity style={styles.btn_mau}
        onPress={() => navigation.navigate('Details')}
      >
        <View style={styles.row}>
          <Text style={styles.btn_text1}>4 MÀU-CHỌN MÀU</Text>
          <Image source={require('./assets/Vector.png')}/>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn_mua}
        onPress={() => navigation.navigate('Details')}
      >
        <Text style={styles.btn_text2}>CHỌN MUA</Text>
      </TouchableOpacity>
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1,backgroundColor:'white',width:360}}>
      <View style={styles.row}>
        <Image source={require('./assets/vs_blue.png')} style={{width:112,height:132,marginLeft:4}}/>
        <Text style={styles.text_dt}>Điện Thoại Vsmart Joy 3 Hàng chính hãng</Text>
      </View>
      <View style={{backgroundColor:'#C4C4C4',marginTop:27}}>
        <Text style={styles.text_mau}>Chọn một màu bên dưới:</Text>
        <View style={{flexDirection:'column',marginTop:34,justifyContent:'space-between',height:350,alignItems:'center'}}>
          <TouchableOpacity style={styles.btn_xanh}></TouchableOpacity>
          <TouchableOpacity style={styles.btn_do}></TouchableOpacity>
          <TouchableOpacity style={styles.btn_den}></TouchableOpacity>
          <TouchableOpacity style={styles.btn_xanhduong}></TouchableOpacity>
        </View>
        <TouchableOpacity style={{width:326,height:44,alignItems:'center',borderRadius:10}}>
          <Text></Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Details">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  text_1:{
      fontFamily:'Roboto',
      fontWeight:400,
      fontSize:15,
  },
  row:{
    flexDirection:'row',
    // justifyContent:'space-around',
    // alignContent:'space-around',
  },
  text_2:{
    fontFamily:'Roboto',
    fontWeight:700,
    fontSize:18,
  },
  text_3:{
    fontFamily:'Roboto',
      fontWeight:400,
      fontSize:15,
  },
  text_4:{
    fontFamily:'Roboto',
    fontWeight:400,
    fontSize:15,
    position:'relative',
    color:'#00000094',

  },
  text_line:{
    position:'absolute',
    top:10,
    left:0,
  },
  btn_mau:{
    width:290,
    height:34,
    borderWidth:1,
    borderColor:'#C4C4C4',
    borderRadius:10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn_text1:{
    fontFamily:'Roboto',
    fontWeight:400,
    fontSize:15,
  },
  text_5:{
    fontFamily:'Roboto',
    fontWeight:700,
    fontSize:12,
    color:'#FA0000',
  },
  btn_mua:{
    width:290,
    height:44,
    borderWidth:1,
    borderColor:'#C4C4C4',
    borderRadius:10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#EE0A0A',
    marginTop:50
  },
  btn_text2:{
    fontFamily:'Roboto',
    fontWeight:400,
    fontSize:15,
    color:'#fff',
  },
  text_dt:{
    fontFamily:'Roboto',
    fontWeight:400,
    fontSize:15,
    width:164,
    height:36,
    marginTop:17,
    marginLeft:10
  },
  text_mau:{
    fontFamily:'Roboto',
    fontWeight:400,
    fontSize:18,
    marginLeft:17,
    marginTop:10
  },
  btn_xanh:{
    width:85,
    height:80,
    backgroundColor:'#C5F1FB',
  },
  btn_do:{
    width:85,
    height:80,
    backgroundColor:'#F30D0D',
  },
  btn_den:{
    width:85,
    height:80,
    backgroundColor:'#000000',
  },
  btn_xanhduong:{
    width:85,
    height:80,
    backgroundColor:'#234896',
  },
});
export default App;

