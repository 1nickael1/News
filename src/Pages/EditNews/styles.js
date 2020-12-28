import styled from 'styled-components/native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const Container = styled.View`
  flex: 1;
  /* justify-content: center; */
  align-items: center;
  width: ${wp(100)}px;
`;

export const Content = styled.ScrollView``;

export const InputTitle = styled.TextInput`
  margin-top: ${hp(5)}px;
  border-radius: ${wp(10)}px;
  border-width: ${wp(0.5)}px;
  border-color: #999;
  width: ${wp(70)}px;
  padding-left: ${wp(5)}px;
  padding-right: ${wp(5)}px;
`;

export const ButtonView = styled.TouchableOpacity`
  margin-top: ${hp(5)}px;
  height: ${hp(5)}px;
  width: ${wp(70)}px;
  background-color: #777;
  border-radius: ${wp(10)}px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-size: ${wp(5)}px;
  color: #fff;
`;
