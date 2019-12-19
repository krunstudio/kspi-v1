import React from "react";
import {
  ImageBackground,
  Image,
  StyleSheet,
  StatusBar,
  Dimensions,
  View
} from "react-native";
import { Block, Button, Text, theme } from "galio-framework";

const { height, width } = Dimensions.get("screen");

import argonTheme from "../../constants/Theme";
import Images from "../../constants/Images";

class Onboarding extends React.Component {
  render() {
    console.disableYellowBox = ['Warning: Each', 'Warning: Failed'];
    const { navigation } = this.props;
    return (
      <Block flex style={styles.container}>
        <StatusBar hidden />
        <Block flex center>
        <ImageBackground
            source={Images.Onboarding}
            style={{ height, width, zIndex: 1 }}
          />
        </Block>
        {/* <Block center>
          <Image source={Images.LogoOnboarding} style={styles.logo} />
        </Block> */}
        <Block flex space="between" style={styles.padded}>
            <Block flex space="around" style={{ zIndex: 2 }}>
              <Block style={styles.title}>
                <Block center>
                  <Text color="white" size={25}>
                    KONFEDERASI SERIKAT PEKERJA INDONESIA
                  </Text>
                </Block>
                {/* <Block>
                  <Text color="white" size={60}>
                    
                  </Text>
                </Block>
                <Block style={styles.subTitle}>
                  <Text color="white" size={16}>
                   
                  </Text>
                </Block> */}
              </Block>
              <Block center>
                <Button
                  style={styles.button}
                  color={argonTheme.COLORS.SECONDARY}
                  onPress={() => navigation.navigate("Register")}
                  textStyle={{ color: argonTheme.COLORS.BLACK }}
                >
                  DAFTAR SEBAGAI ANGGOTA
                </Button>
                {/* <Button
                  style={styles.button2}
                  color={argonTheme.COLORS.SECONDARY}
                  onPress={() => navigation.navigate("Kartunama")}
                  textStyle={{ color: argonTheme.COLORS.BLACK }}
                >
                  LIHAT DATA ANGGOTA
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
  button2: {
    width: width - theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0,
    marginTop:10
  },
  logo: {
    width: 225,
    height: 200,
    zIndex: 2,
    position: 'relative',
    marginTop: '-0%'
  },
  title: {
    marginTop:'-35%',
  },
  subTitle: {
    marginTop: 20
  }
});

export default Onboarding;
