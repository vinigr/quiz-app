import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  width: 100%;
`;

export const ViewList = styled.View`
  width: 95%;
  margin-top: 10px;
`;

export const ItemList = styled.View`
  width: 100%;
  flex-direction: row;
  background-color: #5ECDD5;
  height: 80px;
  border-radius: 8px;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const ViewLeft = styled.View`
  width: 65%;
  justify-content: space-between;
  padding: 10px;
`;

export const TitleItem = styled.Text`
  font-family: 'Rubik-Medium';
  font-size: 20px;
  margin-bottom: 4px;
`;

export const DateDispute = styled.Text`
  font-family: 'Rubik-Regular';
  font-size: 14px;
`;

export const ViewRight = styled.View`
  width: 35%;
  flex-direction: row;
  justify-content: space-between;
  height: 100%;
`;

export const ViewScore = styled.View`
  width: 70%;
  align-items: flex-end;
  padding: 10px 0;
`;

export const TextScore = styled.Text`
  font-family: 'Rubik-Medium';
  font-size: 16px;
`;

export const ButtonDetails = styled.TouchableOpacity`
  background-color: #fff;
  opacity: 0.4;
  height: 100%;
  justify-content: center;
`;
