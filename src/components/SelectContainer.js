import React, { useState } from 'react';
import styled from 'styled-components';
import { customAlphabet } from 'nanoid';

const SelectBlock = styled.div`
  margin-top: 50px;
  border: 2px solid rgb(221, 221, 221);
  height: 200px;
`;

function SelectContainer() {
  const [select, setSelect] = useState(false);
  const [value, setValue] = useState('리엑트');
  const nanoid = customAlphabet('01234567899abcedf', 6);
  const SelectArr = ['리액트', '자바', '스프링', '리엑트네이티브'];

  const SelectVlaue = (item) => {
    setValue(item);
    setSelect(!select);
  };
  return (
    <>
      <SelectBlock>
        <h1>Select</h1>
        <Selectbox onClick={() => setSelect(!select)}>
          <Selected>{value}</Selected>
          <Icon>▼</Icon>
        </Selectbox>
        {select && (
          <SelectList>
            {SelectArr.map((item) => {
              return (
                <div key={nanoid()} onClick={() => SelectVlaue(item)}>
                  {item}
                </div>
              );
            })}
          </SelectList>
        )}
      </SelectBlock>
    </>
  );
}

const Selectbox = styled.div`
  background: #fff;
  border: 1px solid rgb(221, 221, 221);
  width: 250px;
  height: 35px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  position: absolute;
`;

const SelectList = styled.div`
  position: relative;
  top: 50px;
  width: 270px;
  height: 120px;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 10px;
  background-color: white;

  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 13px;
  font-size: 15px;
  font-weight: 500;
`;

const Selected = styled.div`
  font-size: 15px;
`;
const Icon = styled.div`
  font-size: 15px;
`;

export default SelectContainer;
