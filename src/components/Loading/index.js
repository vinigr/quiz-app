import React from 'react';

import Spinner from 'react-native-spinkit';
import { Container } from './styles';

const Loading = () => (
  <Container>
    <Spinner type="ChasingDots" />
  </Container>
);

export default Loading;
