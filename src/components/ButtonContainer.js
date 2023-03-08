import React from 'react';
import styled from 'styled-components';
import { BK_GREEN, BK_RED, FONT_RED, LARGE, MEDIUM, SMALL } from './CustomButton';
import Custombutton from './CustomButton';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ButtonBlock = styled.div`
  display: flex;
  gap: 10px;
`;

function ButtonContainer() {
  return (
    <Container>
      <ButtonBlock>
        <Custombutton props={LARGE}>Larger Primary button </Custombutton>
        <Custombutton props={MEDIUM}>Medium</Custombutton>
        <Custombutton props={SMALL}>Small</Custombutton>
      </ButtonBlock>
      <ButtonBlock>
        <Custombutton props={{ ...LARGE, border: '2px solid ' + BK_RED }}>
          Larger Primary button{' '}
        </Custombutton>
        <Custombutton props={{ ...MEDIUM, background: BK_RED, color: FONT_RED }}>
          Medium
        </Custombutton>
        <Custombutton props={{ ...SMALL, background: BK_RED, color: FONT_RED }}>
          Small
        </Custombutton>
      </ButtonBlock>
    </Container>
  );
}

export default ButtonContainer;
