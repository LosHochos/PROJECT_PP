import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import styles from './App_Styles'
import TopComponente from './assets/compomentes/TopComponente';



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
          <Text style={styles.Titles_Style}>PARASCHOLAR DOCUMENTS</Text>
          <View style={styles.Elements_Style}>
          <TopComponente></TopComponente>
          </View>
        </View>
      
        <View style={styles.Down_Style}>
        <Text style={styles.Titles_Style}>PROFESIONAL DOCUMENTS</Text>
          <TopComponente></TopComponente>
        </View>

      </View>
    </View> 
 
  )
  
}