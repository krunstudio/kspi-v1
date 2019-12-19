import React from "react";
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  KeyboardAvoidingView,
} from "react-native";
import { Block, Checkbox, Text, theme } from "galio-framework";
import * as actionMember from '../redux/actions/actionMember';
import { connect } from 'react-redux'


import { Button, Icon, Input, Select } from "../../components";
import { Images, argonTheme } from "../../constants";

const { width, height } = Dimensions.get("screen");

class Register extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selected1: "",
      selected2: "",
      selected3: "",
    };
  }

  onValueChange1(value) {
    this.setState({
      selected1: value
    });
  }

  onValueChange2(value) {
    this.setState({
      selected2: value
    });
  }



  handleAddMember = async () =>
  {
      const federasi = this.props.navigation.getParam('federasi')
      const sp = this.props.navigation.getParam('sp')
      const struktur_lembaga = this.props.navigation.getParam('struktur_lembaga')
      const puk = this.props.navigation.getParam('puk')
      const wilayah = this.props.navigation.getParam('wilayah')
      const nama = this.props.navigation.getParam('nama')
      const jenis_kelamin = this.props.navigation.getParam('jenis_kelamin')
      const status_karyawan = this.props.navigation.getParam('status_karyawan')
      const status_pkb = this.props.navigation.getParam('status_pkb')
      const alamat = this.props.navigation.getParam('alamat')
      const hp = this.state.selected1;
      const email = this.state.selected2;
      const jabatan = this.props.navigation.getParam('jabatan')
      if (struktur_lembaga=="Dewan Pengurus Pusat"){
        this.setState({
          selected3: "0000 0000 0000 0001" 
        });
      }else if(struktur_lembaga=="Pengurus Pusat"){
        await this.setState({
          selected3: "0100 0000 0000 0001"
        });
      }
      else if(struktur_lembaga=="Pengurus Wilayah"){
       await this.setState({
          selected3: "0200 0000 0000 0001"
        });
      }else if(struktur_lembaga=="Pengurus Cabang"){
        await this.setState({
          selected3: "0300 0000 0000 0001"
        });
      }
      else if(struktur_lembaga=="Konsulat Cabang"){
       await this.setState({
          selected3: "0400 0000 0000 0001"
        });
      }
      else{
       await this.setState({
          selected3: "0500 0000 0000 0001"
        });
      }
      const foto = this.state.selected3;
      if (hp == '' || email == '')
      {
          alert('Field is Required');
      } else
      {
        await this.props.addMember(
            federasi,
            sp, 
            struktur_lembaga, 
            puk, wilayah, nama, 
            jenis_kelamin, 
            status_karyawan, 
            status_pkb, 
            alamat,
            hp, 
            email, 
            foto,
            jabatan
        )
        this.props.navigation.navigate('Kartunama', {
          nama: nama,
          foto: foto,
          puk:  puk,
          sp :  sp,
          federasi : federasi,
          struktur_lembaga: struktur_lembaga,
          alamat:   alamat,
          wilayah: wilayah,
          jabatan: jabatan,
            }
          )
      }
  };


  render() {
    console.disableYellowBox = ['Warning: Each', 'Warning: Failed'];
    console.log('ya' + this.props.navigation.getParam('struktur_lembaga'))
    console.log(this.state.selected3)
    return (
      <Block flex middle>
        <StatusBar hidden />
        <ImageBackground
          source={Images.RegisterBackground}
          style={{ width, height, zIndex: 1 }}
        >
          <Block flex middle>
            <Block style={styles.registerContainer}>
              
              <Block flex>
                <Block flex={0.17} middle>
                  <Text color="#8898AA" size={14}>
                    Form Pendaftaran Anggota
                  </Text>
                </Block>
                <Block flex center>
                  <KeyboardAvoidingView
                    style={{ flex: 1 }}
                    behavior="padding"
                    enabled
                  >
                    <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                      <Input
                        borderless
                        placeholder="HP/Telp"
                        keyboardType="number"
                        onChangeText={(value)=>this.onValueChange1(value)}
                        iconContent={
                          <Icon
                            size={16}
                            color={argonTheme.COLORS.ICON}
                            name="hat-3"
                            family="ArgonExtra"
                            style={styles.inputIcons}
                          />
                        }
                      />
                      <Input
                        borderless
                        placeholder="Email"
                        keyboardType='email-address'
                        onChangeText={(value)=>this.onValueChange2(value)}
                        iconContent={
                          <Icon
                            size={16}
                            color={argonTheme.COLORS.ICON}
                            name="hat-3"
                            family="ArgonExtra"
                            style={styles.inputIcons}
                          />
                        }
                      />
                    </Block>
                    <Block middle>
                      <Button color="primary" style={styles.createButton} onPress={() =>
                        {
                            this.handleAddMember()
                        }}>
                        <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                          Submit
                        </Text>
                      </Button>
                    </Block>
                  </KeyboardAvoidingView>
                </Block>
              </Block>
            </Block>
          </Block>
        </ImageBackground>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  registerContainer: {
    width: width * 0.9,
    height: height * 0.78,
    backgroundColor: "#F4F5F7",
    borderRadius: 4,
    shadowColor: argonTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1,
    overflow: "hidden"
  },
  socialConnect: {
    backgroundColor: argonTheme.COLORS.WHITE,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "#8898AA"
  },
  socialButtons: {
    width: 120,
    height: 40,
    backgroundColor: "#fff",
    shadowColor: argonTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1
  },
  socialTextButtons: {
    color: argonTheme.COLORS.PRIMARY,
    fontWeight: "800",
    fontSize: 14
  },
  inputIcons: {
    marginRight: 12
  },
  passwordCheck: {
    paddingLeft: 15,
    paddingTop: 13,
    paddingBottom: 30
  },
  createButton: {
    width: width * 0.5,
    marginTop: 25
  }
});


const mapStateToProps = state => {
  return {
    addMember: state.addMember,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addMember: (
      federasi,
      sp,
      struktur_lembaga,
      puk,
      wilayah,
      nama,
      jenis_kelamin,
      status_karyawan,
      status_pkb,
      alamat,
      hp,
      email,
      foto) => dispatch(
        actionMember.handleAddMember(
          federasi,
          sp,
          struktur_lembaga,
          puk,
          wilayah,
          nama,
          jenis_kelamin,
          status_karyawan,
          status_pkb,
          alamat,
          hp,
          email,
          foto)
        ),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);