import styled from 'styled-components/native';

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
