import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');


export const Container = styled.View`
  padding: 20px 10px;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: 'Rubik-Medium';
  font-size: 24px;
  color: #343434;
  margin-bottom: 20px;
`;

export const ViewImage = styled.View`
  width: 100%;
  align-items: center;
`;

export const Photo = styled.Image`
  height: 100px;
  width: 100px;
  border-radius: 100px;
  margin-bottom: 8px;
`;

export const EditPhoto = styled.TouchableOpacity`
  height: 30px;
  width: 30px;
  position: absolute;
  /* z-index: 1; */
  background-color: #8CE697;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  bottom: 6;
  left: ${(width / 2) + 6};
`;

export const ViewInputs = styled.View`
  width: 100%;
  align-items: center;
  margin-top: 20px;
`;

export const ViewButtons = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
`;

export const ButtonSave = styled.TouchableOpacity`
  width: 40%;
  align-items: center;
  margin-top: 20px;
  background-color: #059451;
  height: 40px;
  border-radius: 4px;
  justify-content: center;
`;

export const ButtonCancel = styled.TouchableOpacity`
  width: 40%;
  align-items: center;
  margin-top: 20px;
  border: 1px;
  border-radius: 4px;
  justify-content: center;
`;

export const TextCancel = styled.Text`
  font-family: 'Rubik-Medium';
  font-size: 16px;
  color: #202020;
`;

export const TextSave = styled.Text`
  font-family: 'Rubik-Medium';
  font-size: 16px;
  color: #fff;
`;

export const TextPassword = styled.Text`
  font-family: 'Rubik-Medium';
  font-size: 18px;
  margin: 0 16px;
  text-decoration: underline;
`;
