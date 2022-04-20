import React from 'react';
import {Image, StyleSheet, TextInput, View} from 'react-native';
import colors from '../styles/colors';
import fontfamily from '../styles/fontFamily';
import {moderateScale, moderateScaleVertical} from '../styles/responsiveSize';

const TextInputComponent = ({
  image = '',
  img = '',
  placeholder = '',
  placeholderTextColor = '',
  leftImage = false,
  rightImage = false,
  onchangetext,
  keyboardtype,
  value = '',
  ...props
}) => {
  return (
    <View style={styles.viewcss}>
      {leftImage && (
        <View style={{flex: 0.15}}>
          <Image source={image} style={styles.image} />
        </View>
      )}

      <View style={{flex: 0.7, marginLeft: moderateScale(5)}}>
        <TextInput
          {...props}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          style={styles.inputtext}
          keyboardType={keyboardtype}
          value={value}
          onChangeText={onchangetext}
          keyboardAppearance={'dark'}
        />
      </View>

      {rightImage && (
        <View style={{flex: 0.15, alignItems: 'flex-end'}}>
          <Image source={img} style={styles.image} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: moderateScale(30),
    width: moderateScale(30),
    marginHorizontal: moderateScale(5),
  },
  viewcss: {
    flexDirection: 'row',
    marginHorizontal: moderateScale(10),
    marginVertical: moderateScaleVertical(10),
    alignItems: 'center',
    borderColor: colors.lightGreyBg,
    borderWidth: 1,
    flex: 1,
  },
  inputtext: {
    paddingVertical: moderateScaleVertical(10),
    color: 'black',
    fontFamily: fontfamily.Mulish_Medium,
  },
});

export default TextInputComponent;
