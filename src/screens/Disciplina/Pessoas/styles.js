import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const Container = styled.View`
  padding: 16px;
`;

export const Title = styled.Text`
  font-family: 'Rubik-Regular';
  font-size: 26px;
  color: #03512D;
  margin-top: 20px;
`;

export const User = styled.View`
  height: 50px;
  flex-direction: row;
  align-items: center;
  margin: 10px 5px;
`;

export const ImageUser = styled.Image`
  height: 40px;
  width: 40px;
  margin-right: 10px;
  border-radius: 20px;
`;

export const TextUser = styled.Text`
  font-family: 'Rubik-Regular';
  font-size: 16px;
`;
