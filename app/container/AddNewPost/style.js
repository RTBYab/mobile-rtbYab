import styled from "styled-components";
import Colors from "../../config/settings/color";
import Constants from "../../config/settings/Constants";

export const Container = styled.ScrollView`
  flex: 1;
  margin: 12px;
`;

export const SimpleContainer = styled.View`
  margin-top: 16px;
  margin-left: 16px;
  align-items: center;
  flex-direction: row-reverse;
`;

export const ButtonWrapper = styled.View`
  width: 160px;
  height: 40px;
  margin-top: 15px;
  align-items: center;
  justify-content: center;
  background-color: ${Colors.Alternative};
  border-radius: ${Constants.borderRadius.main};
`;

export const ImageContainer = styled.View`
  flex: 1;
  width: 60%;
  height: 60%;
  margin: 12px;
  margin-top: 36%;
  align-items: center;
  justify-content: center;
  background-color: #efefef;
  border-radius: ${Constants.borderRadius.min};
`;

export const Image = styled.Image`
  width: 300px;
  height: 300px;
  box-shadow: 9px 11px 15px rgba(0, 0, 0, 0.7);
`;

export const Title = styled.TextInput`
  margin: 10px;
  font-size: 16;
  text-align: right;
  font-family: Main;
  padding-right: 22px;
`;

export const Text = styled.Text`
  font-size: 16;
  text-align: right;
  font-family: Main2;
`;

export const NoticeText = styled.Text`
  font-size: 12;
  text-align: right;
  font-family: Main;
`;

export const HLine = styled.View`
  width: 75%;
  /* margin-top: -21px; */
  align-self: center;
  margin-bottom: 8px;
  border-bottom-width: 0.3px;
  border-bottom-color: #8888;
`;

export const Caption = styled.TextInput`
  margin: 10px;
  font-size: 16;
  text-align: right;
  font-family: Main;
  padding-left: 12px;
  padding-right: 22px;
`;
