import styled from "styled-components";
import { Dimensions } from "react-native";
import Colors from "../../config/settings/color";
import Constants from "../../config/settings/Constants";

const { width, height } = Dimensions.get("window");

export const Container = styled.ScrollView`
  flex: 1;
  margin: 12px;
`;

export const SimpleContainer = styled.View`
  margin-top: 16px;
  margin-left: 16px;
  align-items: center;
  flex-direction: row-reverse;
`;

export const ButtonWrapper = styled.View`
  margin-top: 15px;
  width: ${width / 2};
  align-items: center;
  justify-content: center;
  height: ${height / 16};
  margin-bottom: ${height / 8};
  background-color: ${Colors.Alternative};
  border-radius: ${Constants.borderRadius.main};
`;

export const ImageContainer = styled.View`
  flex: 1;
  width: 60%;
  height: 60%;
  margin: 12px;
  margin-top: 36%;
  align-items: center;
  justify-content: center;
  background-color: #efefef;
  border-radius: ${Constants.borderRadius.min};
`;

export const Image = styled.Image`
  width: ${width / 1.2};
  height: ${width / 1.2};
  box-shadow: 9px 11px 15px rgba(0, 0, 0, 0.7);
`;

export const Title = styled.TextInput`
  margin: 10px;
  font-size: ${width / 25};
  text-align: right;
  font-family: Main;
  padding-right: 22px;
`;

export const Text = styled.Text`
  font-size: ${width / 25};
  text-align: right;
  font-family: Main2;
`;

export const NoticeText = styled.Text`
  font-size: ${width / 30};
  text-align: right;
  font-family: Main;
`;

export const HLine = styled.View`
  width: 75%;
  align-self: center;
  margin-bottom: 8px;
  border-bottom-width: 0.5px;
  border-bottom-color: #8888;
`;

export const Caption = styled.TextInput`
  margin: 10px;
  font-size: ${width / 25};
  text-align: right;
  font-family: Main;
  padding-left: 12px;
  padding-right: 22px;
`;
