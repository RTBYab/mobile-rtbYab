import { Container, IconView, Content, Title, SubTitle } from "./style";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const Items = ({ icon, size, color, title, subtitle }) => {
  return (
    <Container>
      <IconView>
        <Ionicons name={icon} size={size} color={color} />
      </IconView>
      <Content>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
      </Content>
    </Container>
  );
};

export default Items;
