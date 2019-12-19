import React from "react";
import {
  ImageBackground,
  Image,
  StyleSheet,
  StatusBar,
  Dimensions,
  View,
  Alert
} from "react-native";
import { Block, Button, Text, theme } from "galio-framework";
import CameraRoll from "@react-native-community/cameraroll";
import { captureScreen } from "react-native-view-shot";
import { Icon } from "native-base";

const { height, width } = Dimensions.get("screen");

import argonTheme from "../../constants/Theme";
import Images from "../../constants/Images";




class Onboarding extends React.Component {

  constructor(){
    super();
    this.state={
      imageURI: '',
      btnHide: true,
      btnSave: true,
    }
  }
  takeScreenShot=async()=>{
    await this.setState({btnHide: false})
    await this.setState({btnSave: false})
    captureScreen({
      format: "jpg",
      quality: 0.8
    })
    .then(
      uri => this.setState({ imageURI : uri }),
      console.log('Success'),
      error => console.error("Oops, Something Went Wrong", error),
      await this.setState({btnSave: true}),
      await this.ScreenFunction()
    );
  }

  ScreenFunction=async()=>{
    console.log(this.state.imageURI)
    if(this.state.imageURI !== ''){
      CameraRoll.saveToCameraRoll(this.state.imageURI,'photo')
      Alert.alert('Berhasil Menyimpan')
    } else {
      alert('gagal')
    }
  }

  render() {
    console.disableYellowBox = ['Warning: Each', 'Warning: Failed'];
    const { navigation } = this.props;

    console.log('ya' + this.props.navigation.getParam('foto'))
    return (
      <Block flex style={styles.container}>
        <StatusBar hidden />
        <Block flex center>
        <ImageBackground
            source={{uri : 'https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}}
            style={{ height, width, zIndex: 1 }}
          />
        </Block>
        <Block center>
          <Image source={Images.LogoOnboarding} style={styles.logo}/>
        </Block>
        <Block flex space="between" style={styles.padded}>
            <Block flex space="around">
              <Block>
                <Block  style={styles.title}>
                  <Text color="white" size={25} style={{transform: [{ rotate: "90deg" }] }}>
                    KARTU ANGGOTA
                  </Text>
                </Block>
                <Block  style={styles.download}>
                {
                  this.state.btnHide == true || this.state.btnSave == true ?
                  <View>
                    <Icon name='download' style={{color:"white"}} onPress={() => this.takeScreenShot()} />
                  </View>
                :
                  <View>

                  </View>
                }
                  
                  
                </Block>
                <Block  style={styles.nomor}>
                  <Text color="white" size={25} style={{transform: [{ rotate: "90deg" }] }}>
                  {this.props.navigation.getParam('foto')}
                  </Text>
                </Block>
                <Block  style={styles.nama}>
                  <Text color="white" size={27} style={{transform: [{ rotate: "90deg" }] }}>
                  {this.props.navigation.getParam('nama')}
                  </Text>
                </Block>
                <Block  style={styles.jabatan}>
                  <Text color="white" size={18} style={{transform: [{ rotate: "90deg" }] }}>
                  {/* struktur_lembaga---SP---Federasi---Wilayah---Alamat */}
                  {this.props.navigation.getParam('struktur_lembaga')} {}
                  {this.props.navigation.getParam('sp')} {}
                  {this.props.navigation.getParam('federasi')} {} 
                  {this.props.navigation.getParam('wilayah')} {}
                  {this.props.navigation.getParam('alamat')}
                  </Text>
                </Block>
                <Block style={styles.subTitle}>
                  <Text color="white" size={16}>
                   
                  </Text>
                </Block>
              </Block>
              <Block center>
                {/* <Button
                  style={styles.button}
                  color={argonTheme.COLORS.SECONDARY}
                  onPress={() => navigation.navigate("Register")}
                  textStyle={{ color: argonTheme.COLORS.BLACK }}
                >
                  DAFTAR SEBAGAI ANGGOTA
                </Button> */}
              </Block>
          </Block>
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.COLORS.BLACK
  },
  padded: {
    paddingHorizontal: theme.SIZES.BASE * 2,
    position: "relative",
    bottom: theme.SIZES.BASE,
    zIndex: 2,
  },
  button: {
    width: width - theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0
  },
  logo: {
    width: 225,
    tintColor:'white',
    height: 210,
    zIndex: 2,
    position: 'absolute',
    marginTop: '-20%',
    transform: [{ rotate: "90deg" }]
  },
  title: {
    marginTop:'-27%',
    marginRight:'-80%'
  },
  download: {
    color:"white",
    marginTop:'70%',
    marginLeft:'70%',
    transform: [{ rotate: "90deg" }],
    position:'absolute'
  },
  nomor: {
    marginTop:'-40%',
    marginLeft:'-50%'
  },
  nama: {
    marginTop:'-30%',
    marginLeft:'-70%'
  },
  jabatan: {
    marginTop:'-17%',
    marginLeft:'-90%'
  },
  subTitle: {
    marginTop: 20
  }
});

export default Onboarding;
