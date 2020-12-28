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

export const HeaderView = styled.View`
  background-color: #999;
  width: ${wp(100)}px;
  justify-content: center;
  align-items: center;
`;

export const HeaderText = styled.Text`
  font-size: ${wp(8)}px;
  color: #000;
`;

export const NewsContent = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  margin-bottom: ${hp(5)}px;
`;

export const Line = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: #999;
  width: ${wp(80)}px;
  margin-top: ${hp(3)}px;
`;

export const TitleView = styled.View`
  margin-top: ${hp(5)}px;
  padding-left: ${wp(5)}px;
  padding-right: ${wp(5)}px;
`;
export const TitleText = styled.Text`
  font-size: ${wp(8)}px;
  color: #000;
`;

export const DescriptionView = styled.View`
  margin-top: ${hp(3)}px;
  padding-left: ${wp(5)}px;
  padding-right: ${wp(5)}px;
`;
export const DescriptionText = styled.Text`
  font-size: ${wp(5)}px;
  color: #000;
  text-align: justify;
`;

export const AuthorView = styled.View`
  margin-top: ${hp(3)}px;
`;
export const AuthorText = styled.Text`
  font-size: ${wp(5)}px;
  color: #000;
  font-style: italic;
  font-weight: bold;
`;
