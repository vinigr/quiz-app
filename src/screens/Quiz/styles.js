import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
import Image from 'react-native-scalable-image';

export const Container = styled.ScrollView`
  padding: 0 6px;
  width: 100%;
`;

export const Header = styled.View`
  padding: 20px 10px;
  width: 100%;
  height: 80px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const StateQuestions = styled.View`
  width: 130px;
  height: 80px;
  justify-content: center;
`;

export const TextState = styled.Text`
  font-family: 'Rubik-Regular';
  font-size: 20px;
`;

export const ColorQuiz = styled.View`
  width: 50px;
  height: 50px;
  background-color: #${props => props.color};
  border-radius: 40px;
`;

export const QuestionView = styled.View`
  width: 100%;
  align-items: center;
`;

export const QuestionText = styled.Text`
  font-family: 'Rubik-Regular';
  font-size: 20;
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

export const OptionTF = styled.TouchableHighlight.attrs({
  underlayColor: '#DADC2E',
})`
  width: 40%;
  align-items: center;
  padding: 6px 0;
  border-radius: 4px;
  background-color: ${props => (props.correct ? '#C9CB32' : '#fff')};
  border: ${props => (props.correct ? 'none' : '#757575')};
`;

export const OptionTFCorrect = styled.View`
  width: 40%;
  align-items: center;
  padding: 6px 0;
  border-radius: 4px;
  background-color: ${props => (props.correct ? 'green' : '#fff')};
  border: ${props => (props.optionSelect ? '#DDDF31' : '#757575')};
`;

export const OptionTFError = styled.View`
  width: 40%;
  align-items: center;
  padding: 6px 0;
  border-radius: 4px;
  background-color: ${props => (props.incorrect ? 'red' : '#fff')};
  border: ${props => (props.optionSelect ? '#DDDF31' : '#757575')};
`;

export const TextOption = styled.Text`
  font-size: 20px;
  font-family: 'Rubik-Regular';
  color: ${props => (props.correct ? '#FFF' : '#000')};
`;

export const OptionsME = styled.View`
  width: 100%;
`;

export const OptionME = styled.TouchableHighlight.attrs({
  underlayColor: '#E1E365',
})`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  background-color: ${props => (props.correct ? '#C9CB32' : '#fff')};
  border: ${props => (props.correct ? 'none' : '#757575')};
`;

export const OptionMECorrect = styled.View`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  background-color: ${props => (props.correct ? 'green' : 'red')};
  border: ${props => (props.correct ? '#C9CB32' : 'none')};
`;

export const OptionMEError = styled.View`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  background-color: #fff;
  border: ${props => (props.incorrect ? '#C9CB32' : '#757575')};
`;

export const Actions = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  margin: 30px 0 20px;
`;

export const ButtonActions = styled.TouchableOpacity`
  width: 40%;
  padding: 10px;
  border-radius: 3px;
  background-color: ${props => props.color};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TextActions = styled.Text`
  font-size: 20px;
  font-family: 'Rubik-Medium';
  color: #fff;
`;

export const ViewError = styled.View`
  width: 100%;
  margin: 10px auto;
  align-items: center;
`;

export const ViewModalAlert = styled.View`
  background-color: #fff;
  width: ${Dimensions.get('window').width * 0.7};
  height: ${Dimensions.get('window').height * 0.3};
  padding: 10px;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  border-radius: 4px;
`;

export const TitleModal = styled.Text`
  font-size: 18px;
  margin-bottom: 10px;
`;

export const TextInfo = styled.Text`
  font-size: 14px;
  text-align: center;
  margin-bottom: 8px;
`;

export const ViewButtons = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
  margin-top: 18px;
`;

export const ButtonModal = styled.TouchableOpacity`
  border-color: #757575;
  border-width: 1px;
  align-items: center;
  padding: 10px;
  border-radius: 4px;
  width: 48%;
`;

export const TextButton = styled.Text`
  color: #757575;
  font-size: 14px;
  text-transform: uppercase;
`;
