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

export const ViewRecuperacao = styled.View`
  display: flex;
  align-items: flex-end;
`;

export const TextRecuperacao = styled.Text`
  font-size: 15px;
  font-family: ${Fonts.RubikRegular};
  margin-top: 3px;
`;

export const TextButton = styled.Text`
  font-size: 25px;
  font-family: ${Fonts.RubikRegular};
  color: #fff;
`;

export const ViewCadastro = styled.View`
  display: flex; 
  bottom: 0; 
  align-items: center;
`;

export const TextCadastro = styled.Text`
  font-size: 18px;
  text-decoration-line: underline;
  color: #000;
`;
