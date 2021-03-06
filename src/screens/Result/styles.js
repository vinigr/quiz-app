import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  padding: 10px;
`;

export const Title = styled.Text`
  font-family: 'Rubik-Medium';
  font-size: 24px;
  margin-bottom: 16px;
`;

export const HeadList = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 12px;
`;

export const TextHead = styled.Text`
  font-family: 'Rubik-Medium';
  font-size: 22px;
`;

export const User = styled.View`
  height: 40px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const UserName = styled.Text`
  font-family: 'Rubik-Regular';
  font-size: 18px;
`;

export const UserScore = styled.Text`
  font-family: 'Rubik-Regular';
  font-size: 18px;
`;

export const UserThis = styled.View`
  height: 60px;
  flex-direction: row;
  justify-content: space-between;
  background-color: #68c280;
  border-radius: 4px;
  align-items: center;
  padding: 0 4px;
`;

export const ButtonShowAnswers = styled.TouchableOpacity`
  height: 40px;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 4px;
  align-items: center;
  padding: 0 4px;
  margin: 10px auto;
`;

export const TextButton = styled.Text`
  font-family: 'Rubik-Regular';
  font-size: 16px;
  color: #000;
`;

export const ItemList = styled.View`
  margin-bottom: 20px;
  background-color: #f1f1f1;
  padding: 10px;
  border-radius: 4px;
`;

export const ViewQuestion = styled.View``;

export const TextExplanation = styled.Text`
  font-family: 'Rubik-Regular';
  font-size: 14px;
  color: #000;
  margin-top: 10px;
`;

export const QuestionView = styled.View`
  width: 100%;
  align-items: flex-start;
`;
