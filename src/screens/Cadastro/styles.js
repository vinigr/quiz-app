import styled from 'styled-components/native';
import Fonts from '../../utils/fonts';

export const Container = styled.View`
  padding: 15px;
  height: 100%;
  justify-content: space-between;
`;

export const ViewInputs = styled.View`
  display: flex;
  align-items: center;
`;

export const TextButton = styled.Text`
  color: #fff;
  font-size: 25px;
  font-family: ${Fonts.RubikRegular};
`;

export const ViewLogin = styled.View`
  display: flex; 
  bottom: 0; 
  align-items: center;
`;

export const TextConta = styled.Text`
  font-size: 16px;
  font-family: ${Fonts.RubikRegular};
`;

export const TextLogin = styled.Text`
  font-size: 18px;
  text-decoration-line: underline;
  color: #000;
`;
