import Constants from "./Constants";
export default {
  Login: {
    RequiredLogin: true, // required before using the app
    AnonymousCheckout: false // required before checkout or checkout anonymous
  },

  // TabBar Configuration ===> Animation specially
  tabBarAnimate: Constants.Animate.zoomIn
};
