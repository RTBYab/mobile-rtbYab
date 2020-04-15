import styled from "styled-components";
import Colors from "../../config/settings/color";
import Constants from "../../config/settings/Constants";

export const CommentText = styled.TextInput`
  margin: 10px;
  font-size: 16;
  text-align: right;
  margin-right: 40px;
  font-family: Main;
  padding-right: 10px;
`;

export const Text = styled.Text`
  margin: 10px;
  font-size: 16;
  text-align: right;
  font-family: Main2;
`;

export const HLine = styled.View`
  width: 75%;
  align-self: center;
  margin-bottom: 8px;
  border-bottom-width: 0.5px;
  border-bottom-color: #8888;
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
