import styled from "styled-components";
import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export const Container = styled.View`
  flex: 1;
  margin: ${width / 36}px;
  /* margin-bottom: ${width / 5}px; */
`;

export const Viewer = styled.View`
  flex: 1;
  /* background-color: red; */
  align-items: flex-end;
  justify-content: center;
`;

export const HView = styled.View`
  width: 100%;
  flex-direction: row-reverse;
  align-items: center;
  /* justify-content: center; */
`;
export const ReverseHView = styled.View`
  flex-direction: row-reverse;
  align-items: center;

  /* left: ${width / 2.2}px; */
`;

export const TextHeader = styled.Text`
  text-align: right;
  font-family: Main2;
  margin: ${width / 25}px;
  font-size: ${width / 22}px;
`;

export const TextBody = styled.Text`
  text-align: right;
  font-family: Main;
  font-size: ${width / 25}px;
  margin-left: ${width / 80}px;
  margin-right: ${width / 7.4}px;
`;

export const Image = styled.Image`
  width: ${width / 10}px;
  height: ${width / 10}px;
  border-radius: ${width / 20}px;
`;

export const HLine = styled.View`
  width: 75%;
  align-self: center;
  border-bottom-width: ${width / 280}px;
  border-bottom-color: #8888;
  margin-top: ${width / 120}px;
  /* margin-bottom: ${width / 50}px; */
`;
