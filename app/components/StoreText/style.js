import styled from "styled-components";
import Colors from "../../config/settings/color";

export const DetailText = styled.Text`
  font-family: Main2;
  font-size: 16px;
  text-align: center;
`;

export const AddressWrapper = styled.Text`
  width: 85%;
  font-size: 16px;
  margin-left: 10px;
  font-family: Main;
  text-align: right;
  margin-right: 5px;
  color: ${Colors.mainWhite};
`;

export const TextWrapper = styled.View`
  flex: 4;
  align-content: center;
  justify-content: space-evenly;
  flex-direction: row-reverse;
`;

export const TextWrapper1 = styled.View`
  flex: 4;
  align-content: center;
  justify-content: space-around;
  flex-direction: row-reverse;
`;
export const Text = styled.View`
  justify-content: space-around;
  flex-direction: row-reverse;
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
  background-color: ${Colors.AddressBackground};
  flex-direction: row-reverse;
`;
