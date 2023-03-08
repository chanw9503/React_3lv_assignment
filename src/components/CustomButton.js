import React, { useState } from 'react';
import styled, { css } from 'styled-components';

export const FONT_RED = 'rgb(214, 48, 49)';
export const BK_RED = 'rgb(250, 177, 160)';
export const BK_GREEN = 'rgb(85, 239, 196)';

const INIT_FORMAT = {
  color: 'black',
  background: 'white',
  width: '150px',
  height: '40px',
  border: '1px solid black',
};

export const LARGE = {
  color: 'black',
  background: 'white',
  width: '170px',
  height: '40px',
  border: '2px solid ' + BK_GREEN,
};

export const MEDIUM = {
  color: 'black',
  background: BK_GREEN,
  width: '100px',
  height: '35px',
  border: 'none',
};

export const SMALL = {
  color: 'black',
  background: BK_GREEN,
  width: '80px',
  height: '25px',
  border: 'none',
};

const Button = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  background: ${(props) => props.background};

  border-radius: 5px;
  border: ${(props) => props.border};
  color: ${(props) => props.color};
  font-size: 11px;
  font-weight: 600;
  padding: 6px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

  ${(props) =>
    props.isClick &&
    css`
      filter: brightness(70%);
    `}
`;

function Custombutton({ style = INIT_FORMAT, event, children }) {
  const [clicked, setClicked] = useState(false);

  const onToggle = () => {
    setClicked(!clicked);
  };

  return (
    <Button
      onMouseDown={onToggle}
      onMouseUp={onToggle}
      onClick={() => event()}
      width={style.width}
      height={style.height}
      border={style.border}
      color={style.color}
      background={style.background}
      isClick={clicked}
    >
      {children}
    </Button>
  );
}

export default Custombutton;
