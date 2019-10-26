import styled from "styled-components/native";
import { Dimensions } from "react-native";

export const Container = styled.SafeAreaView`
  align-items: center;
  background-color: #fafafa;
  padding-top: 30px;
  height: ${Dimensions.get("window").height - 50};
  justify-content: space-around;
`;

export const Header = styled.View``;

export const Photo = styled.Image`
  height: 150px;
  width: 150px;
  border-radius: 100px;
  margin-bottom: 8px;
`;

export const Name = styled.Text`
  font-family: "Rubik-Medium";
  font-size: 25px;
  color: #272727;
  text-align: center;
`;

export const Menu = styled.View`
  width: 95%;
  margin-top: 35px;
`;

export const Option = styled.TouchableOpacity`
  background-color: #f3f3f3;
  width: 100%;
  height: 50px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  border-radius: 5px;
  padding: 0 10px 0 10px;
`;

export const OptionTextIcon = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TextOption = styled.Text`
  font-family: "Rubik-Regular";
  margin-left: 10px;
  font-size: 15px;
  color: #4f4f4f;
`;
