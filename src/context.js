// @flow

import * as React from "react";

const initialState = {
  isDataScience: false,
  dataScienceHash: "0x597037dbe9a95e9f997702183d3792e03033f6ea",
  user1Hash: "0xf3d829b85b5d56c6f68a46270e620ca0f49dcf89",
  user2Hash: "0x94ac4f7faf551a0a5eaa0992246244a8b05a57a1",
  user3Hash: "0x62db9fc3fbb662b5f31325ddefa440a649c972ef"
};

type Props = {
  children: React.Node
};

export const InfoState = React.createContext({
  ...initialState,
  toggleBaggage: () => {} // eslint-disable-line no-unused-vars
});

class StateProvider extends React.Component {
  state = initialState;

  // toggleUser = () => {
  //   this.setState(prevState => ({
  //     isBaggageVisible: !prevState.isBaggageVisible
  //   }));
  // };

  render() {
    const { dataScienceHash, user1Hash, user2Hash, user3Hash } = this.state;

    return (
      <InfoState.Provider
        value={{ dataScienceHash, user1Hash, user2Hash, user3Hash }}
      >
        {this.props.children}
      </InfoState.Provider>
    );
  }
}

export default StateProvider;
