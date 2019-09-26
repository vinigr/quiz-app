import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  padding: 10px;
`;

export const Title = styled.Text`
  font-family: 'Rubik-Medium';
  font-size: 26px;
  margin: 6px 0 2px;
  color: #343434;
`;

export const Description = styled.Text`
  font-family: 'Rubik-Regular';
  font-size: 12px;
  margin: 2px 0 10px;
  color: #4f4f4f;
`;

export const Header = styled.View`
  padding: 10px;
  height: 60%;
  flex-direction: row;
  justify-content: space-between;
`;

export const SubjectName = styled.Text`
  font-family: 'Rubik-Regular';
  font-size: 16px;
  color: #4f4f4f;
`;

export const ViewNotQuiz = styled.View`
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const TextNotQuiz = styled.Text`
  font-family: 'Rubik-Medium';
  font-size: 22px;
  color: #4f4f4f;
  margin-bottom: 10px;
`;

export const ButtonUpdate = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  height: 40px;
  background-color: #54dae5;
  padding: 10px;
  border-radius: 4px;
`;

export const TextUpdate = styled.Text`
  font-family: 'Rubik-Regular';
  font-size: 22px;
  /* color: #4f4f4f; */
`;
