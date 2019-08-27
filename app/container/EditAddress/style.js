import { Platform } from "react-native";
import styled from "styled-components";
import Colors from "../../config/settings/color";
import Constants from "../../config/settings/Constants";

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
  justify-content: center;
  margin-bottom: 16px;
  border-radius: 50px;
`;
export const NormalInput = styled.TextInput`
  width: 72%;
  margin: 25px;
  height: 45px;
  margin-top: 50px;
  font-size: 16px;
  text-align: right;
  font-family: Main;
  margin-right: -75px;
`;

export const MiniInput = styled.TextInput`
  width: 72%;
  margin: 25px;
  height: 25px;
  margin-top: 50px;
  font-size: 16px;
  text-align: right;
  font-family: Main;
  margin-right: -156px;
`;

export const HLine = styled.View`
  width: 75%;
  margin-top: -21px;
  align-self: center;
  margin-bottom: 8px;
  border-bottom-width: 0.3px;
  border-bottom-color: #8888;
`;

export const Text = styled.Text`
  margin: 5px;
  font-size: 16px;
  font-family: Main2;
  text-align: right;
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
