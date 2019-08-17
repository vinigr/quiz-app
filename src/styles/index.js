import styled from 'styled-components/native';
import Fonts from '../utils/fonts';

export const Button = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #059451;
  margin-top: 15;
  height: 50;
  width: 99%;
`;

export const TitleAuth = styled.Text`
  margin-top: 30;
  margin-bottom: 20;
  color: #000;
  font-family: 'Rubik-Medium';
  font-size: 35;
`;

export const ViewError = styled.View`
  width: 100%;
  margin: 0 auto 10px;
  display: flex;
  align-items: center;
`;

export const TextError = styled.Text`
  color: #d41919;
  font-size: 18px;
  font-family: ${Fonts.RubikRegular};
`;

export const TextSuccess = styled.Text`
  color: #059451;
  font-size: 18px;
  font-family: ${Fonts.RubikRegular};
`;
