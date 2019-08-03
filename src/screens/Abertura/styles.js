import styled from 'styled-components/native';
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
