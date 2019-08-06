import styled from 'styled-components/native';
import { Dimensions, StyleSheet } from 'react-native';

export const Container = styled.View`
  align-items: center;
  padding-top: 10px;
  flex: 1;
  width: 100%;
`;

export const HeaderBar = styled.View`
  flex-direction: row;
  height: 50px;
  position: absolute;
  top: 0;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  padding: 0 10px;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: rgba(0, 0, 0, 0.2);
`;

export const ViewList = styled.View`
  width: 95%;
  margin-top: 50px;
`;

export const ItemList = styled.TouchableOpacity`
  width: 100%;
  background-color: #E16F4A;
  height: 120px;
  padding: 10px;
  border-radius: 8px;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const HeaderSubject = styled.View`
  flex-direction: row;
  justify-content: space-between; 
`;


export const ViewSubject = styled.View`
  width: 85%;
`;

export const TitleItem = styled.Text`
  font-family: 'Rubik-Medium';
  font-size: 20px;
  margin-bottom: 4px;
`;

export const TopicItem = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-family: 'Rubik-Regular';
  font-size: 12px;
`;

export const TouchableIcon = styled.TouchableOpacity`
  
`;

export const ViewTeacher = styled.View`
  
`;

export const NameTeacher = styled.Text`
  font-family: 'Rubik-Regular';
  font-size: 14px;
`;

export const ViewModal = styled.View`
  background-color: #fff; 
  width: ${Dimensions.get('window').width * 0.6};
  height: ${Dimensions.get('window').height * 0.1};
  margin: 0 auto;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`;

export const OptionsModal = styled.TouchableHighlight.attrs({
  underlayColor: '#DCDCDC',
})`
  padding: 5px 10px;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;

export const OptionsText = styled.Text`
  font-size: 18px;
  color: #000;
  font-family: 'Rubik-Regular';
`;

export const ViewModalAdd = styled.View`
  background-color: #fff; 
  width: ${Dimensions.get('window').width * 0.8};
  height: ${Dimensions.get('window').height * 0.3};
  margin: 0 auto;
  align-items: center;
  border-radius: 5px;
  justify-content: center;
`;

export const TextModalAdd = styled.Text`
  font-size: 14px;
  color: #000;
  text-align: left;
  width: 80%;
  margin-bottom: 10px;
`;

export const InputCode = styled.TextInput.attrs({
  autoCapitalize: 'characters',
  placeholder: 'Código',
  maxLength: 8,
})`
  font-size: 16px;
  color: #000;
  height: 50px;
  width: 80%;
  border: solid #097CBD 1px;
  border-radius: 4px;
  margin-bottom: 10px;
`;

export const ButtonAdd = styled.TouchableOpacity`
  padding: 10px;
  background-color: #F3F3F3;
`;

export const TextAdd = styled.Text`
  font-size: 16px;
  color: #000;
`;
