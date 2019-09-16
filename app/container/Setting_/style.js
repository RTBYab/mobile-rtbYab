import styled from "styled-components";
import Colors from "../../config/settings/color";
import Constants from "../../config/settings/Constants";
import { Dimensions } from "react-native";
const { height, width } = Dimensions.get("window");

export const Container = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  /* margin-right: 8px; */
  align-items: flex-end;
`;

export const MiniContainer = styled.View`
  flex: 1;
  width: 100%;
  height: ${height / 5};
  margin-bottom: 12px;
  align-items: center;
  justify-content: center;
  box-shadow: 15px 12px 13px #8888;
`;

export const BoxContainer = styled.View`
  flex-direction: row-reverse;
  box-shadow: 0.1px 0.1px 0.5px #8888;
`;

export const EditView = styled.View`
  width: ${width > 360 ? 30 : 20};
  height: ${height > 600 ? 30 : 20};
  border-radius: ${width > 360 ? 15 : 10};
  background: ${Colors.whiteSmoke};
`;
export const Image = styled.Image`
  margin: 3px;
  width: 100px;
  height: 100px;
  justify-content: center;
  margin-bottom: 16px;
  border-radius: 50px;
`;
export const NormalInput = styled.TextInput`
  width: 72%;
  margin: 25px;
  margin-top: 40px;
  height: 32px;
  font-size: 16px;
  text-align: right;
  font-family: Main;
  margin-right: -75px;
  border-radius: 14px;
  border-color: #000;
`;

export const Description = styled.TextInput`
  width: 75%;
  margin: 25px;
  height: 58px;
  margin-top: 40px;
  font-size: 16px;
  text-align: right;
  font-family: Main;
  margin-right: -85px;
`;
export const HLine = styled.View`
  max-width: 75%;
  min-width: 70%;
  /* margin-top: -21px;
  align-self: center;
  margin-bottom: 8px; */
  border-bottom-width: 0.3px;
  border-bottom-color: #8888;
`;

export const Text = styled.Text`
  font-size: 16px;
  font-family: Main2;
  text-align: right;
  margin: 5px;
`;
export const SubText = styled.Text`
  font-size: 10px;
  font-family: Main;
  text-align: right;
`;

export const MainContainer = styled.ScrollView`
  flex: 1;
`;

export const Button = styled.View`
  width: 160px;
  height: 40px;
  margin-top: 15px;
  align-items: center;
  justify-content: center;
  background-color: ${Colors.Alternative};
  border-radius: ${Constants.borderRadius.main};
`;

export const ButtonText = styled.Text`
  font-size: 17px;
  text-align: center;
  font-family: Main2;
  color: ${Colors.mainWhite};
`;
