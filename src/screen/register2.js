import React from "react";
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  KeyboardAvoidingView,
} from "react-native";
import { Block, Checkbox, Text, theme } from "galio-framework";
import { Textarea, Picker, Item } from 'native-base';





import { Button, Icon, Select, Input } from "../../components";
import { Images, argonTheme } from "../../constants";

const { width, height } = Dimensions.get("screen");

class Register extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selected1: "",
      selected2: "",
      selected3: "",
      selected4: "",
      selected5: "",

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

  onValueChange3(value) {
    this.setState({
      selected3: value
    });
  }

  onValueChange4(value) {
    this.setState({
      selected4: value
    });
  }

  onValueChange5(value) {
    this.setState({
      selected5: value
    });
  }


  render() {
    console.disableYellowBox = ['Warning: Each', 'Warning: Failed'];
    const federasi = this.props.navigation.getParam('federasi')
    const sp = this.props.navigation.getParam('sp')
    const struktur_lembaga = this.props.navigation.getParam('struktur_lembaga')
    const puk = this.props.navigation.getParam('puk')
    const wilayah = this.props.navigation.getParam('wilayah')
    const jabatan = this.props.navigation.getParam('jabatan')

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
                        // value={this.state.selected1.toString()}
                        placeholder="Nama"
                        onChangeText={(value)=>this.onValueChange1(value)}
                      />
                      
                    <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                      <Item picker>
                        <Picker
                          mode="dropdown"
                          iosIcon={<Icon name="arrow-down" />}
                          selectedValue={this.state.selected2}
                          onValueChange={this.onValueChange2.bind(this)}
                        >
                          <Picker.Item label="Jenis Kelamin" value={undefined} color='grey'/>
                          <Picker.Item label="Laki-laki" value="Laki-laki" />
                          <Picker.Item label="Perempuan" value="Perempuan" />
                        </Picker>
                     </Item>
                    </Block>
                    <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                      <Item picker>
                        <Picker
                          mode="dropdown"
                          iosIcon={<Icon name="arrow-down" />}
                          selectedValue={this.state.selected3}
                          onValueChange={this.onValueChange3.bind(this)}
                        >
                          <Picker.Item label="Status Karyawan" value={undefined} color='grey'/>
                          <Picker.Item label="PKWT" value="PKWT" />
                          <Picker.Item label="Outsourcing" value="Outsourching" />
                        </Picker>
                     </Item>
                    </Block>
                    </Block>
                    <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                      <Item picker>
                        <Picker
                          mode="dropdown"
                          iosIcon={<Icon name="arrow-down" />}
                          selectedValue={this.state.selected4}
                          onValueChange={this.onValueChange4.bind(this)}
                        >
                          <Picker.Item label="Status PKB" value={undefined} color='grey'/>
                          <Picker.Item label="Ada" value="Ada" />
                          <Picker.Item label="Tidak Ada" value="Tidak Ada" />
                        </Picker>
                     </Item>
                    </Block>
                    <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                      <Textarea rowSpan={2} bordered placeholder='Alamat'
                         onChangeText={(value)=>this.onValueChange5(value)}
                      ></Textarea>
                    </Block>
                    <Block middle>
                      <Button 
                        onPress={()=> {
                        this.props.navigation.navigate('Register3', {
                        federasi: federasi,
                        sp: sp,
                        struktur_lembaga: struktur_lembaga,
                        puk: puk,
                        wilayah: wilayah,
                        nama : this.state.selected1,
                        jenis_kelamin : this.state.selected2,
                        status_karyawan : this.state.selected3,
                        status_pkb : this.state.selected4,
                        alamat : this.state.selected5,
                        jabatan : this.state.selected6, 
                        });
                      }}
                        color="primary" style={styles.createButton}>
                        <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                          Selanjutnya
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

export default Register;
