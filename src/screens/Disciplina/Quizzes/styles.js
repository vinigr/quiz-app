import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
`;

export const ViewList = styled.View`
  width: 95%;
  margin-top: 10px;
`;

export const QuizItem = styled.View`
  height: 100px;
  border-radius: 5px;
  background-color: #66BFC5;
`;

export const TitleItem = styled.Text`
  font-family: 'Rubik-Medium';
  font-size: 20px;
  margin-bottom: 4px;
`;

export const Header = styled.View`
  padding: 10px;
  height: 50%;
`;

export const Footer = styled.View`
  padding: 10px;
  flex-direction: row;
  justify-content: flex-end;
  height: 50%;
`;

export const ButtonStart = styled.TouchableOpacity`
  background-color: #49B03C;
  border-radius: 4px;
  padding: 8px;
`;

export const TextButton = styled.Text`
  font-family: 'Rubik-Regular';
  font-size: 18px;
  color: #fff;
`;
