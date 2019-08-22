import styled from "styled-components";
import Constants from "../../../config/settings/Constants";

export const Container = styled.View`
  flex: 1;
`;

export const MainImage = styled.Image`
  height: 120px;
  width: 120px;
  border-radius: ${Constants.borderRadius.storeImage};
`;

export const Text = styled.Text`
  font-size: 16px;
  font-family: Main;
`;
