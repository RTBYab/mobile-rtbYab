import {
  Container,
  Image,
  Name,
  Description,
  Address,
  Telephone,
  Social
} from "./style";
import React from "react";
import { connect } from "react-redux";

const Settings = () => {
  return (
    <Container>
      <Image />
      <Name />
      <Description />
      <Address />
      <Telephone />
      <Social />
    </Container>
  );
};
const mapStateToProps = state => ({
  store: state.store
});
export default connect(mapStateToProps)(Settings);
