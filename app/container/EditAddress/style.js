import { Platform } from "react-native";
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
  /* align-items: center; */
`;

export const MiniContainer = styled.View`
  /* flex: 1; */
  width: 100%;
  height: 120px;
  margin-bottom: 12px;
  align-items: center;
  justify-content: center;
  background: ${Colors.whiteSmoke};
`;

export const BoxContainer = styled.View`
  margin-top: 12px;
  flex-direction: row-reverse;
  box-shadow: 0.1px 0.1px 0.5px #8888;
`;

export const EditView = styled.View`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background: ${Colors.whiteSmoke};
`;
export const Image = styled.Image`
  margin: 3px;
  width: 100px;
  height: 100px;
  margin-bottom: 16px;
  border-radius: 50px;
  justify-content: center;
`;
export const NormalInput = styled.TextInput`
  width: 72%;
  margin: 25px;
  height: 45px;
  margin-top: 30px;
  text-align: right;
  font-family: Main;
  font-size: ${width < 375 ? 14 : 16};
  margin-right: ${width < 375 ? -48 : -53};
  /* margin-right: -75px; */
`;

export const MiniInput = styled.TextInput`
  width: 72%;
  margin: 25px;
  height: 25px;
  font-size: 16px;
  text-align: right;
  font-family: Main;
  margin-top: ${width < 450 ? 30 : 50};
  margin-right: ${width < 375 ? -120 : -140};
`;

export const HLine = styled.View`
  width: 75%;
  margin-top: -21px;
  align-self: center;
  margin-bottom: 8px;
  border-bottom-width: 0.3px;
  border-bottom-color: #8888;
  margin-top: ${height > 600 ? -21 : -5};
`;
export const AlterLine = styled.View`
  width: 75%;
  margin-top: -21px;
  align-self: center;
  border-bottom-width: 0.5px;
  margin-top: ${height > 600 ? -25 : -26};
  border-bottom-color: rgba(8, 8, 8, 0.3);
`;

export const SubText = styled.Text`
  font-family: Main;
  text-align: right;
  font-size: ${width < 375 ? 10 : 12};
`;

export const Text = styled.Text`
  margin: 5px;
  font-family: Main2;
  text-align: right;
  font-size: ${width < 375 ? 14 : 16};
`;

export const Button = styled.View`
  margin-top: 15px;
  align-items: center;
  justify-content: center;
  width: ${width / 1.8};
  height: ${height / 14};
  background-color: ${Colors.Alternative};
  border-radius: ${Constants.borderRadius.main};
`;

export const ButtonText = styled.Text`
  text-align: center;
  font-family: Main2;
  color: ${Colors.mainWhite};
  font-size: ${width / 22};
`;
