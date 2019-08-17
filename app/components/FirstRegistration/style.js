import styled from "styled-components";
import Color from "../../config/settings/color";
import Constants from "../../config/settings/Constants";

export const MainContainer = styled.ScrollView`
  flex: 1;
`;

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const DetailForm = styled.TextInput`
  margin: 4px;
  width: 350px;
  height: 120px;
  font-size: 16px;
  margin-top: 10px;
  text-align: right;
  padding-left: 8px;
  font-family: Main;
  padding-right: 20px;
  border-width: 0.8px;
  border-color: ${Color.mainAppColor};
  border-radius: ${Constants.borderRadius.main};
`;

export const TitleBar = styled.TextInput`
  margin: 4px;
  width: 350px;
  height: 30px;
  font-size: 16px;
  margin-top: 10px;
  text-align: right;
  font-family: Main;
  padding-right: 20px;
  border-width: 0.8px;
  border-color: ${Color.mainAppColor};
  border-radius: ${Constants.borderRadius.main};
`;

export const AddressBar = styled.TextInput`
  margin: 4px;
  width: 350px;
  height: 90px;
  font-size: 16px;
  margin-top: 10px;
  text-align: right;
  font-family: Main;
  padding-right: 20px;
  border-width: 0.8px;
  border-color: ${Color.mainAppColor};
  border-radius: ${Constants.borderRadius.main};
`;

export const Icon = styled.Image`
  width: 50px;
  height: 50px;
`;
