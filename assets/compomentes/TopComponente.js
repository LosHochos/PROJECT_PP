import React from 'react'
import {View, TouchableOpacity, Image} from 'react-native'
import styles from '../../App_Styles'

const TopComponente = (props) => { 
    return (
        <View style={[styles.Elements_Style, styles.elevation]}>
        <TouchableOpacity onPress={()=>{}}>
            <Image style={styles.downloadIcon_Style} source={require('../icons/download_icon.png')}/>
          </TouchableOpacity>
        </View>
    )
  
}

export default TopComponente;

