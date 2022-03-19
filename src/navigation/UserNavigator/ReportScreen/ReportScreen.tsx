import React, {FC} from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';

const ReportScreen: FC = () => {
  return (
    <Contaner>
      <Text>Раздел в разработке</Text>
    </Contaner>
  );
};

const Contaner = styled.View`
  flex-grow: 1;
  justify-content: center;
  align-items: center;
`;

export default ReportScreen;
