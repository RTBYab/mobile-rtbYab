import { Container, MainImage } from "./style";
import React, { useEffect } from "react";
import { Text } from "react-native";
import { connect } from "react-redux";
import { getStoreByStoreOwner } from "../../../redux/Actions/storeAction";

const StoreMainScreenComponent = ({ store, auth, getStoreByStoreOwner }) => {
  const { token, user } = auth;

  useEffect(() => {
    getStoreByStoreOwner(user._id, token);
  }, [getStoreByStoreOwner]);

  return (
    <Container>
      <MainImage
        source={
          store.store.picture || require("../../../../assets/image/mobl.jpeg")
        }
      />
      <Text>{store.store.name}</Text>
      <Text>{store.store.description}</Text>
    </Container>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
  store: state.store
});

export default connect(
  mapStateToProps,
  { getStoreByStoreOwner }
)(StoreMainScreenComponent);
