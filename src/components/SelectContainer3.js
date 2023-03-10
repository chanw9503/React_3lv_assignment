import React, { useState } from 'react';
import styled from 'styled-components';

function SelectContainer3() {
  const [openH, isOpenH] = useState(false);
  const [open, isOpen] = useState(false);

  const [valueH, setValueH] = useState('');
  const [value, setValue] = useState('');

  const setOpen = () => {
    isOpen(!open);
  };

  const setOpenH = () => {
    isOpenH(!openH);
  };

  return (
    <>
      <SelectBlock>
        <h1>Select</h1>
        <div style={{ display: 'flex' }}>
          <div>
            <Select onClick={() => isOpenH(!openH)}>{valueH}</Select>
            {openH && <SelectLst isOpen={setOpenH} setValue={setValueH} />}
          </div>
          <div>
            <Select onClick={() => isOpen(!open)}>{value}</Select>
            {open && <SelectLst isOpen={setOpen} setValue={setValue} />}
          </div>
        </div>
      </SelectBlock>
    </>
  );
}

function SelectLst({ isOpen, setValue }) {
  const onClickHander = (e) => {
    setValue(e.target.value);
    isOpen();
  };

  return (
    <SelectList>
      <Ul>
        <li>
          <SelectButton value="리엑트" onClick={onClickHander}>
            리엑트
          </SelectButton>
        </li>
        <li>
          <SelectButton value="자바" onClick={onClickHander}>
            자바
          </SelectButton>
        </li>
        <li>
          <SelectButton value="스프링" onClick={onClickHander}>
            스프링
          </SelectButton>
        </li>
        <li>
          <SelectButton value="리엑트 네이티브" onClick={onClickHander}>
            리엑트 네이티브
          </SelectButton>
        </li>
      </Ul>
    </SelectList>
  );
}

const Select = styled.button`
  width: 200px;
  border: 1px solid #c4c4c4;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 12px 13px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  appearance: none;
  text-align: left;
  margin-right: 20px;

  &:focus {
    border: 1px solid #9b51e0;
    box-sizing: border-box;
    border-radius: 10px;
    outline: 3px solid #f8e4ff;
    border-radius: 10px;
  }
`;

const Ul = styled.ul`
  margin: 0;
  padding: 0;

  width: 200px;
  list-style: none;
  background-color: #ffffff;
  border: 1px solid #c4c4c4;
  box-sizing: border-box;
  box-shadow: 4px 4px 14px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  margin-top: 9px;
`;

const SelectButton = styled.button`
  border: none;
  background-color: #ffffff;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  padding: 7px 10px;
  margin: 5px 7px;
  box-sizing: border-box;

  &:focus {
    background: #f8e4ff;
    width: 184px;
    border-radius: border-box;
    text-align: left;
  }
`;

const SelectBlock = styled.div`
  margin-top: 50px;
  border: 2px solid rgb(221, 221, 221);
  height: 500px;
  overflow: hidden;
`;

const SelectList = styled.div``;
export default SelectContainer3;
