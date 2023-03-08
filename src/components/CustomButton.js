import React from 'react';
import styled from 'styled-components';

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
  width: '150px',
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
  font-size: 10px;
  font-weight: 600;
  padding: 6px;
`;

function Custombutton({ props = INIT_FORMAT, children }) {
  return (
    <Button
      width={props.width}
      height={props.height}
      border={props.border}
      color={props.color}
      background={props.background}
    >
      {children}
    </Button>
  );
}

export default Custombutton;
