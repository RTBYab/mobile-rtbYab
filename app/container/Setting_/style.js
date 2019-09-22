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
  margin-bottom: 12px;
  align-items: center;
  height: ${height / 5};
  justify-content: center;
  box-shadow: 15px 12px 13px #8888;
`;

export const BoxContainer = styled.View`
  align-items: center;
  flex-direction: row-reverse;
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

// export const Description = styled.TextInput`
//   width: 75%;
//   margin: 25px;
//   height: 58px;
//   margin-top: 40px;
//   font-size: 16px;
//   text-align: right;
//   font-family: Main;
//   margin-right: -85px;
// `;
export const HLine = styled.View`
  max-width: 75%;
  min-width: 70%;
  margin-top: ${width / 75};
  border-bottom-color: #8888;
  border-bottom-width: ${width / 600};
`;

export const Text = styled.Text`
  font-size: ${width / 25};
  font-family: Main2;
  text-align: right;
  margin-right:${width / 50};
  /* margin: ${width / 50}; */
`;

export const NormalInput = styled.TextInput`
  width: 70%;
  text-align: right;
  font-family: Main;
  border-color: #000;
  height: ${height / 15};
  margin-top: ${width / 5};
  font-size: ${width / 22};
  margin-right: ${-width / 5};
`;

export const NormalInput2 = styled.TextInput`
  width: 70%;
  text-align: right;
  font-family: Main;
  border-color: #000;
  height: ${height / 15};
  margin-top: ${width / 5};
  font-size: ${width / 22};
  margin-right: ${-width / 3.79};
`;
export const SubText = styled.Text`
  font-family: Main;
  text-align: right;
  font-size: ${width / 33};
  margin-top: ${width / 50};
`;

export const MainContainer = styled.ScrollView`
  flex: 1;
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
