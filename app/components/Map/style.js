import styled from "styled-components";
import Colors from "../../config/settings/color";
import Constants from "../../config/settings/Constants";

export const Button = styled.View`
  width: 40px;
  height: 40px;
  margin-top: 15px;
  margin-left: 15px;
  /* position: absolute; */
  align-items: center;
  justify-content: center;
  background-color: ${Colors.mainWhite};
  border-radius: ${Constants.borderRadius.min};
`;

export const ButtonText = styled.Text`
  font-family: Main;
  font-size: 14px;
`;
