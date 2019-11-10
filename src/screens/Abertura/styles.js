import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
import Fonts from '../../utils/fonts';

export const Container = styled.View`
  height: 100%;
  justify-content: space-around;
  background-color: #059451;
`;

export const Header = styled.View`
  align-items: center;
  height: 50%;
  justify-content: space-between;
`;

export const ImageLogo = styled.Image`
  align-self: center;
  height: 200;
  width: 200;
`;

export const Title = styled.Text`
  color: #fff;
  font-family: ${Fonts.RubikMedium};
  font-size: 40;
`;

export const InputView = styled.View`
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: #059451;
  margin-top: 10;
  height: 50;
  width: 75%;
`;

export const TextButton = styled.Text`
  color: #fff;
  font-family: ${Fonts.RubikRegular};
  font-size: 25;
`;

export const TextButtonQuiz = styled.Text`
  color: #fff;
  font-family: ${Fonts.RubikRegular};
  font-size: 16;
`;

export const ViewModal = styled.View`
  background-color: #fff;
  width: ${Dimensions.get('window').width * 0.8};
  height: ${Dimensions.get('window').height * 0.3};
  margin: 0 auto;
  padding: 0 6%;
  align-items: center;
  border-radius: 5px;
  justify-content: center;
`;

export const Input = styled.TextInput`
  font-size: 16px;
  color: #000;
  height: 50px;
  width: 100%;
  border: solid #9c9c9c 1px;
  border-radius: 4px;
  margin-bottom: 16px;
  background-color: #f1f1f1;
`;

export const TextModal = styled.Text`
  font-size: 16px;
  margin-bottom: 10px;
`;

export const ButtonModal = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 10px;
  background-color: #e7e7e7;
  border-radius: 4px;
  align-self: flex-end;
  border: solid #9c9c9c 0.5px;
  margin-top: 10px;
`;

export const TextButtonAdd = styled.Text`
  font-size: 16px;
  color: #000;
`;
