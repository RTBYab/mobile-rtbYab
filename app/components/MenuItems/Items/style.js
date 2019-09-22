import styled from "styled-components";
import { Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

export const Container = styled.View`
  margin: 15px 0;
  flex-direction: row-reverse;
`;
export const IconView = styled.View`
  width: 32px;
  height: 32px;
  align-items: center;
  justify-content: center;
`;
export const Content = styled.View`
  padding-right: 20px;
`;
export const Title = styled.Text`
  font-size: ${width / 18};
  text-align: right;
  font-family: Main2;
`;
export const SubTitle = styled.Text`
  opacity: 0.6;
  font-size: ${width / 22};
  margin-top: 5px;
  text-align: right;
  font-family: Main;
`;
