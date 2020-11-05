import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";
import moment from 'moment';

const DatePickerLayout = styled.div`
  position: absolute;
  top: 15px;
  left: 0;
  right: 0;
`;

function DatePickerTool({ onChange, value }) {
  return (
    <DatePickerLayout>
      <DatePicker
        minDate={moment().toDate()}
        onChange={(e) => {
          onChange(e);
        }}
        selected={value}
      />
    </DatePickerLayout>
  );
}

export default DatePickerTool;
