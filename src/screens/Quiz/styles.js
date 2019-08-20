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
  justify-content: space-around;
`;

export const OptionTF = styled.TouchableOpacity`
  width: 40%;
  align-items: center;
  padding: 6px 0;
  border-radius: 2px;
  border: #757575;
`;

export const TextOption = styled.Text`
  font-size: 20px;
  color: ${props => (props.correct ? '#fff' : '#000')};
`;

export const OptionsME = styled.View`
  width: 100%;
`;

export const OptionME = styled.TouchableHighlight.attrs({
  underlayColor: '#757575',
})`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  background-color: ${props => (props.correct ? 'green' : '#fff')};
  border: ${props => (props.correct ? 'none' : '#757575')};;
`;
