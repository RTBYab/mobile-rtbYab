import { Platform } from "react-native";
import styled from "styled-components";
import Color from "../../config/settings/color";
import Const from "../../config/settings/Constants";
export const Container = styled.View`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  align-items: center;
  position: absolute;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.8);
`;
export const Modal = styled.View`
  width: 335px;
  height: 379px;
  margin-top: 135px;
  align-items: center;
  background-color: white;
  border-radius: ${Const.borderRadius.main};
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
`;
export const Logo = styled.Image`
  width: 120px;
  height: 120px;
`;
export const Text = styled.Text`
  font-size: 18px;
  margin-top: -18px;
  text-align: center;
  font-family: Main;
`;
export const Form = styled.TextInput`
  width: 300px;
  height: 55px;
  font-size: 16px;
  margin-top: 12px;
  text-align: left;
  font-family: Main;
  padding-left: 44px;
  border-radius: ${Const.borderRadius.main};
  border: 0.25px solid ${Color.mainAppColor};
`;
export const EmailIcon = styled.Image`
  width: 24px;
  height: 24px;
  top: 165px;
  left: 31px;
  position: absolute;
`;

export const PasswordIcon = styled.Image`
  width: 26px;
  height: 26px;
  position: absolute;
  top: 230px;
  left: 31px;
`;

export const ButtonText = styled.Text`
  font-size: 20px;
  font-family: Main2;
  text-align: center;
  color: ${Color.noticeText};
`;
export const Button = styled.View`
  width: 150px;
  height: 50px;
  margin-top: 35px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  background-color: ${Color.mainAppColor};
  border-radius: ${Const.borderRadius.main};
  ${Platform.select({
    ios: {
      shadowColor: Color.mainAppColor,
      shadowOpacity: 0.5,
      shadowRadius: Const.borderRadius.main,
      shadowOffset: {
        height: 1,
        width: 1
      }
    },
    android: {
      elevation: Const.borderRadius.min
    }
  })}
`;
