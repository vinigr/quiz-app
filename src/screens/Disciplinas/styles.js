import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Container = styled.View`
  align-items: center;
  padding-top: 10px;
`;

export const ViewList = styled.View`
  width: 95%;
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

export const Header = styled.View`
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
  width: ${Dimensions.get('window').width * 0.8};
  height: ${Dimensions.get('window').height * 0.3};
  margin: 0 auto;
  border-radius: 5px;
  
`;

export const OptionsModal = styled.TouchableHighlight`
  padding: 5px;
`;

export const OptionsText = styled.Text`
  font-size: 20px;
`;
