import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import Image from 'react-native-scalable-image';

export const Container = styled.ScrollView`
  padding: 0 6px;
  width: 100%;
`;

export const StateQuestions = styled.View`
  padding: 10px;
  width: 100px;
  height: 80px;
`;

export const TextState = styled.Text`
  font-family: 'Rubik-Regular';
  font-size: 20px;
`;

export const QuestionView = styled.View`
  width: 100%;
  align-items: center;
`;

export const QuestionText = styled.Text`
  font-family: 'Rubik-Regular';
  font-size: 24px;
  margin-bottom: 16px;
`;

export const ImageQuestion = styled(Image).attrs({
  width: Dimensions.get('window').width,
  height: 500,
})`
  margin-bottom: 20px;
  border-radius: 4px;
`;

export const OptionsTF = styled.View`
  width: 100%;
  flex-direction: row;
`;

export const OptionTF = styled.TouchableHighlight`
  width: 40%;
`;

export const TextOption = styled.Text`
  font-size: 20px;
`;

export const OptionsME = styled.View`
  width: 100%;
`;

export const OptionME = styled.TouchableHighlight`
  width: 100%;
  padding: 6px;
  margin-bottom: 10px;
  background-color: aliceblue;
  border-radius: 2px;
`;
