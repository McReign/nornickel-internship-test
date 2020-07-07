import React, { useState } from 'react';
import styled from 'styled-components'
import { ScreenWrapper } from './ScreenWrapper';
import { screens } from '../screens.config';
import { ProgressProvider } from "../contexts/ProgressContext";

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
`;

const DEFAULT_POINTS = {
  A: 1,
  B: 0,
  C: 0,
  D: 0,
};

function App() {
  const urlParams = new URLSearchParams(window.location.search);
  const queryStep = urlParams.get('step');

  const [stepNumber, setStepNumber] = useState((queryStep && +queryStep - 1) || 0);
  const [points, setPoints] = useState(DEFAULT_POINTS);

  const setNext = () => {
    setStepNumber(step => step + 1);
  };

  const addPoints = (type, value) => {
    setPoints(points => ({...points, [type]: points[type] + value}));
  };

  const screen = screens[stepNumber];
  const InnerComponent = screen?.component || (() => null);

  return (
    <AppWrapper>
      <ProgressProvider value={{ stepNumber, points, setNext, addPoints }}>
        <ScreenWrapper {...screen}>
          <InnerComponent />
        </ScreenWrapper>
      </ProgressProvider>
    </AppWrapper>
  );
}

export default App;
