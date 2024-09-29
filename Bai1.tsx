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
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
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
});
export default App;

