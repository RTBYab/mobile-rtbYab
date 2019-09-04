import styled from "styled-components";
import Colors from "../../config/settings/color";
import Constants from "../../config/settings/Constants";

export const DetailText = styled.Text`
  font-family: Main2;
  font-size: 16px;
  text-align: center;
`;

export const AddressWrapper = styled.Text`
  font-size: 16px;
  margin-left: 10px;
  font-family: Main;
  text-align: right;
  margin-right: 5px;
  color: ${Colors.mainWhite};
`;

export const ButtonWrapper = styled.View`
  width: 90px;
  height: 30px;
  align-items: center;
  justify-content: center;
  border: solid 2.4px ${Colors.buttonOrange};
  border-radius: ${Constants.borderRadius.min};
  box-shadow: 0.3px 0.3px 0.4px rgba(256, 256, 266, 0.2);
`;

export const TextWrapper = styled.View`
  flex: 4;
  align-content: center;
  flex-direction: row-reverse;
  justify-content: space-evenly;
`;

export const TextWrapper1 = styled.View`
  flex: 4;
  align-content: center;
  flex-direction: row-reverse;
  justify-content: space-around;
`;
export const Text = styled.View`
  flex-direction: row-reverse;
  justify-content: space-around;
`;

export const MiniWraper = styled.View`
  flex: 0.2;
  height: 10;
`;

export const MainWrapper = styled.ScrollView`
  flex: 3;
`;
export const DetailsWraper = styled.View`
  flex: 0.4;
  align-items: center;
  flex-direction: row-reverse;
  background-color: ${Colors.AddressBackground};
`;
