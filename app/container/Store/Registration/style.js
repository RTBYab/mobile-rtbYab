import styled from "styled-components";
import Color from "../../../config/settings/color";
import Constants from "../../../config/settings/Constants";

export const Container = styled.View`
  flex: 1;
  width: 100%;
`;

export const MainContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const StoreText = styled.Text`
  width: 280px;
  font-size: 16px;
  font-family: Main2;
  margin-top: -18px;
  text-align: center;
`;

export const Image = styled.Image`
  width: 300px;
  height: 300px;
  margin-top: -120px;
`;

export const Button = styled.View`
  width: 150px;
  height: 36px;
  margin-top: 45px;
  align-items: center;
  justify-content: center;
  background-color: ${Color.Alternative};
  border-radius: ${Constants.borderRadius.main};
`;
export const ButtonText = styled.Text`
  font-size: 17px;
  text-align: center;
  font-family: Main2;
  color: ${Color.textColor};
`;
