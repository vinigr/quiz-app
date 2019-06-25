import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(LinearGradient).attrs({
  colors: ['#F7FEFC', '#fff'],
  start: { x: 0.5, y: 0 },
  end: { x: 0.5, y: 1.0 },
})`  
  align-items: center;
  background-color: #FAFAFA;
  padding-top: 30px;
  height: 100%;
`;

export const Header = styled.View`
  
`;

export const Photo = styled.Image`
  height: 150px;
  width: 150px;
  border-radius: 100px;
  margin-bottom: 8px;
`;

export const Name = styled.Text`
  font-family: 'Rubik-Medium';
  font-size: 25px;
  color: #272727;
`;

export const Menu = styled.View`
  width: 95%;
  margin-top: 35px;
`;

export const Option = styled.TouchableOpacity`
  background-color: #F3F3F3;
  width: 100%;
  height: 50px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding: 0 10px 0 10px;
`;

export const OptionTextIcon = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const TextOption = styled.Text`
  font-family: 'Rubik-Regular';
  margin-left: 10px;
  font-size: 15px;
  color: #4F4F4F;
`;
