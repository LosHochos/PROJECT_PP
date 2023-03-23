import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

export default function App() {
  const onPressPara = () => console.log("Downloading Parascholar document");
  const onPressProf = () => console.log("Downloading Profesional document");
  return (
    <View style={styles.Base_Style}>
      <View style={styles.Container_Style}>
        
        <View style={styles.Top_Style}>
          <View style={styles.topIcon_Style}>
              <Image style={styles.logoIcon_Style} source={require('./assets/icons/documents_icon.png')}/>
          </View>
        </View>
       
        <View style={styles.Center_Style}>
          <View style={styles.Id_Style}>
            <Text>ID</Text>
          </View>
          <Text style={styles.Titles_Style}>PARASCHOLAR DOCUMENTSSSSS</Text>
          <View style={styles.Elements_Style}>
            <TouchableOpacity onPress={onPressPara}>
              <Image style={styles.downloadIcon_Style} source={require('./assets/icons/download_icon.png')}/>
            </TouchableOpacity> 
          </View>
        </View>
      
        <View style={styles.Down_Style}>
        <Text style={styles.Titles_Style}>PROFESIONAL DOCUMENTS</Text>
          <View style={[styles.Elements_Style, styles.elevation]}>
          <TouchableOpacity onPress={onPressProf}>
              <Image style={styles.downloadIcon_Style} source={require('./assets/icons/download_icon.png')}/>
            </TouchableOpacity>
          </View>
        </View>

      </View>
    </View> 
 
  )
 
}
  
const styles = StyleSheet.create({

  Base_Style: {
    width: '100%',
    padding: 30,
    flex:1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'stretch'
  },

  Container_Style:{
    backgroundColor: '#D9E0EF',
    width: '100%',
    height: '90%',
    justifyContent: 'center',
    alignItems: 'stretch',
    flexDirection: 'column',
    borderRadius: 15,
  },

  topIcon_Style:{
    width: 130,
    height: 130,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 7,
    borderColor: '#870D0D' ,
    borderRadius: 100
  },

  Top_Style:{
    width: '100%',
    height: '15%',
    backgroundColor: '#090D36',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    elevation: 20,
   
  },

  Id_Style:{
    width: '100%',
    height: '15%',
    backgroundColor: '#F0F2F8',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },

  Center_Style:{
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: 35,
    flex:1,
    width: '100%',
    height: '45%',
    backgroundColor: '#D9E0EF',
  },
  
  Elements_Style:{
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    flex:1,
  },

  Down_Style: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: 2,
    flex:1,
    width: '100%',
    height: '45%',
    backgroundColor: '#D9E0EF',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },

  Foot_Style:{
    width: '50px',
    height: '50px',
    backgroundColor: '#fff',
    borderRadius: 40,
  },

  //Text

  Titles_Style:{
    fontFamily: 'sans-serif',
    fontSize: 20,
    fontWeight: 'bold'

  },

  idText_Style:{
    fontFamily: 'sans-serif',
    fontSize: 5,
    fontWeight: 'bold',
    color: '#D9D9D9',
  },
  //icons

  logoIcon_Style: {
    width: 115,
    height: 115,
    borderRadius: 100,
    opacity: 0.5,
  },

  downloadIcon_Style:{
    width: 70,
    height: 70,
    borderRadius: 15,
    borderWidth: 5,

  },

  //shadow

  elevation: {
    
    shadowColor: '#52006A',
  },

  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },



});
