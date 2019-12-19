import React from "react";
import {  StyleSheet,  ImageBackground,  Dimensions,  StatusBar,  KeyboardAvoidingView,} from "react-native";
import { Block, Checkbox, Text, theme } from "galio-framework";
import { Textarea, Picker, Item } from 'native-base';

import { Button, Icon, Input, Select } from "../../components";
import { Images, argonTheme } from "../../constants";
import * as actionProvinsi from '../redux/actions/actionProvinsi';
import { connect } from 'react-redux'

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
      selected6: "",
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
  onValueChange6(value) {
    this.setState({
      selected6: value
    });
  }

  async componenDidMount() {
    await this.props.handleGetPuk()
    await this.props.handleGetProvinsi()
  }

  render() {
    console.disableYellowBox = ['Warning: Each', 'Warning: Failed'];
    console.log(this.props.puk)
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
                      {/* <Input
                        borderless
                        placeholder="Federasi"
                        iconContent={
                          <Icon
                            size={16}
                            color={argonTheme.COLORS.ICON}
                            name="hat-3"
                            family="ArgonExtra"
                            style={styles.inputIcons}
                          />
                        }
                      /> */}
                    <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                      <Item picker>
                        <Picker
                          mode="dropdown"
                          iosIcon={<Icon name="arrow-down" />}
                          selectedValue={this.state.selected1}
                          onValueChange={this.onValueChange1.bind(this)}
                        >
                          <Picker.Item label="FSPMI" value="FSPMI" />
                        </Picker>
                     </Item>
                    </Block>

                     <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                      <Item picker>
                        <Picker
                          mode="dropdown"
                          iosIcon={<Icon name="arrow-down" />}
                          selectedValue={this.state.selected2}
                          onValueChange={this.onValueChange2.bind(this)}
                        >
                          <Picker.Item label="Pilih SP" value={undefined} color='grey'/>
                          <Picker.Item label="AMK" value="AMK" />
                          <Picker.Item label="EE" value="EE" />
                          <Picker.Item label="LOGAM" value="LOGAM" />
                          <Picker.Item label="SPAI" value="SPAI" />
                          <Picker.Item label="SPPJM" value="SPPJM" />
                        </Picker>
                     </Item>
                    </Block> 
                    </Block>
                    <Block width={width * 0.8}>
                    <Item picker>
                      <Picker
                        mode="dropdown"
                        iosIcon={<Icon name="arrow-down" />}
                        style={{ width: undefined }}
                        selectedValue={this.state.selected3}
                        onValueChange={this.onValueChange3.bind(this)}
                      >
                        <Picker.Item label="Pilih Struktur Lembaga" value={undefined} color='grey'/>
                        <Picker.Item label="Dewan Pengurus Pusat" value="Dewan Pengurus Pusat" />
                        <Picker.Item label="Pengurus Pusat" value="Pengurus Pusat" />
                        <Picker.Item label="Pengurus Wilayah" value="Pengurus Wilayah" />
                        <Picker.Item label="Pengurus Cabang" value="Pengurus Cabang" />
                        <Picker.Item label="Pimpinan Unit Kerja" value="Pimpinan Unit Kerja" />
                        <Picker.Item label="Anggota" value="Anggota" />
                      </Picker>
                    </Item>
                    </Block>
                    {this.state.selected3 != 'Anggota'?
                    
                    <Block width={width * 0.8}>
                      <Item picker>
                        <Picker
                          mode="dropdown"
                          iosIcon={<Icon name="arrow-down" />}
                          selectedValue={this.state.selected4}
                          onValueChange={this.onValueChange4.bind(this)}
                        >
                          <Picker.Item label="Pilih Puk Anda" value={undefined} color='grey'/>
                          {
                            this.props.pukLocal.puk.map((item) =>
                            {
                                return (
                                    <Picker.Item label={item.puk} value={item.puk} key={item.puk} />
                                )
                            })
                        }
                        </Picker>
                      </Item>
                    </Block>
                    
                    :this.state.selected4 == 'Tidak Ada Dalam List'?
                    <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                      <Input
                        borderless
                        placeholder="Tuliskan Nama PUK Anda"
                        onChangeText={(value)=>this.onValueChange4(value)}
                      />
                    </Block>
                    :
                    <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                      <Input
                        borderless
                        placeholder="Jabatan"
                        onChangeText={(value)=>this.onValueChange6(value)}
                      />
                    </Block>
                    }
                    <Block width={width * 0.8}>
                      <Item picker>
                        <Picker
                          mode="dropdown"
                          iosIcon={<Icon name="arrow-down" />}
                          selectedValue={this.state.selected5}
                          onValueChange={this.onValueChange5.bind(this)}
                        >
                          <Picker.Item label="Pilih Provinsi" value={undefined} color='grey'/>
                          {
                            this.props.provinsiLocal.provinsi.semuaprovinsi.map((item) =>
                            {
                                return (
                                    <Picker.Item label={item.nama} value={item.nama} key={item.nama} />
                                )
                            })
                        }
                        </Picker>
                      </Item>
                    </Block>
                    <Block middle>
                      <Button color="primary"  onPress={() => {
                      this.props.navigation.navigate('Register2', {
                        federasi: this.state.selected1,
                        sp: this.state.selected2,
                        struktur_lembaga: this.state.selected3,
                        puk: this.state.selected4,
                        wilayah: this.state.selected5,
                        jabatan: this.state.selected6,
                        });
                      }}
                         style={styles.createButton}
                      >
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

const mapStateToProps = state => {
  return {
    provinsiLocal: state.provinsi,
    pukLocal: state.puk
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleGetProvinsi: () => dispatch(actionProvinsi.handleGetProvinsi()),
    handleGetPuk: () => dispatch(actionProvinsi.handleGetPuk())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);