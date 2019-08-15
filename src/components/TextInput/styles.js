import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  width: 99%;
  height: 50px;
  margin-bottom: 10;
  background-color: ${props => props.containerBgColor};
  border-radius: 4px;
`;

export const IconContainer = styled.View`
  width: 30px;
  margin-left: 5;
  justify-content: center;
  align-items: center;
`;

export const TextInput = styled.TextInput`
  color: #000;
  font-size: 13px;
  width: 100%;
`;

export const TouchableSecure = styled.TouchableHighlight`
  position: absolute;
  right: 10;
`;
