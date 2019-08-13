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
  margin-bottom: 10px;
`;

export const TitleItem = styled.Text`
  font-family: 'Rubik-Medium';
  font-size: 20px;
  margin-bottom: 4px;
`;

export const Header = styled.View`
  padding: 10px;
  height: 60%;
`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 40%;
  padding-left: 10px;
`;

export const InfoExpired = styled.View`
  
`;

export const TextExpiry = styled.Text`
  font-family: 'Rubik-Medium';
  font-size: 14px;
`;

export const DateExpiry = styled.Text`
  font-family: 'Rubik-Regular';
  font-size: 14px;
`;

export const ButtonStart = styled.TouchableOpacity`
  height: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 120px;
  background-color: #8BD6DC;
  border-top-left-radius: 4px;
`;

export const TextButton = styled.Text`
  font-family: 'Rubik-Regular';
  font-size: 18px;
  color: #fff;
  margin-right: 4px;
`;

export const ItemExpired = styled.View`
  height: 100px;
  border-radius: 5px;
  background-color: #ECCA5B;
  margin-bottom: 10px;
`;

export const HeaderExpired = styled.View`
  padding: 10px;
  height: 50%;
`;

export const FooterExpired = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 50%;
  padding: 0 10px;
`;
