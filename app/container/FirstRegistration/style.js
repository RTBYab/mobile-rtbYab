import styled from "styled-components";
import Color from "../../config/settings/color";
import Constants from "../../config/settings/Constants";

export const MainContainer = styled.ScrollView`
  flex: 1;
  margin: 5px;
  background-color: rgba(0, 0, 0, 0.001);
`;

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const DetailForm = styled.TextInput`
  width: 350px;
  height: 120px;
  font-size: 16px;
  margin-top: 10px;
  text-align: right;
  padding-left: 8px;
  font-family: Main;
  padding-right: 5px;
  border-width: 0.8px;
  border-color: ${Color.mainAppColor};
  border-radius: ${Constants.borderRadius.main};
`;

export const TitleBar = styled.TextInput`
  width: 350px;
  height: 40px;
  margin-top: 6px;
  font-size: 16px;
  margin-top: 10px;
  text-align: right;
  font-family: Main;
  padding-left: 8px;
  margin-bottom: 6px;
  padding-right: 5px;
  border-width: 0.8px;
  border-color: ${Color.mainAppColor};
  border-radius: ${Constants.borderRadius.main};
`;

export const Icon = styled.Image`
  width: 50px;
  height: 50px;
`;

export const Text = styled.Text`
  font-size: 16px;
  text-align: right;
  margin-right: 5px;
  font-family: Main2;
`;

export const SubText = styled.Text`
  margin-top: 5px;
  font-size: 12px;
  text-align: right;
  margin-right: 5px;
  margin-bottom: -15px;
  font-family: Main;
`;

export const Button = styled.View`
  width: 160px;
  height: 40px;
  margin-top: 15px;
  align-items: center;
  justify-content: center;
  background-color: ${Color.mainAppColor};
  border-radius: ${Constants.borderRadius.main};
`;

export const ButtonText = styled.Text`
  font-size: 17px;
  text-align: center;
  font-family: Main2;
  color: ${Color.mainWhite};
`;
