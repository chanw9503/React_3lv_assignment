import React from 'react';
import styled from 'styled-components';
import { BK_GREEN, BK_RED, FONT_RED, LARGE, MEDIUM, SMALL } from './CustomButton';
import { FiChevronRight } from 'react-icons/fi';
import { VscGithubInverted } from 'react-icons/vsc';
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
  const onClickUpAlert = () => {
    alert('버튼을 만들어 보세요');
  };

  const onClickPrompt = () => {
    prompt('어렵나요?', '');
  };
  return (
    <Container>
      <ButtonBlock>
        <Custombutton event={onClickUpAlert} cusStyle={LARGE}>
          Larger Primary button <FiChevronRight />
        </Custombutton>
        <Custombutton cusStyle={MEDIUM}>Medium</Custombutton>
        <Custombutton cusStyle={SMALL}>Small</Custombutton>
      </ButtonBlock>
      <ButtonBlock>
        <Custombutton
          event={onClickPrompt}
          cusStyle={{ ...LARGE, border: '2px solid ' + BK_RED }}
        >
          Larger Nagative Button <VscGithubInverted />
        </Custombutton>
        <Custombutton cusStyle={{ ...MEDIUM, background: BK_RED, color: FONT_RED }}>
          Medium
        </Custombutton>
        <Custombutton cusStyle={{ ...SMALL, background: BK_RED, color: FONT_RED }}>
          Small
        </Custombutton>
      </ButtonBlock>
    </Container>
  );
}

export default ButtonContainer;
