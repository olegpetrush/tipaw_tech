import React from "react";
import { Message, StyledInput, StyledLabel, TextFieldBody } from "../StyledComponents";

const TextField = (props: { value: string; onChange: Function; label?: string; required?: boolean; [i: string]: any }) => {

  const { value, onChange, label, required, type } = props;

  const [isShow, setShow] = React.useState(false);

  return (
    <TextFieldBody>
      {label && 
        <StyledLabel>
          {label}
          {required && <span style={{color: 'red'}}> *</span>}
        </StyledLabel>
      }
      <StyledInput
        style={required && value === '' ? {borderColor: 'red'} : {}}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        type={isShow ? undefined : type}
      />
      {required && value === '' && <Message>Ce champ est requis</Message>}
      {type === 'password' && <img src={!isShow ? '/eye.png' : '/eye_closed.png'} alt='' onClick={() => setShow(!isShow)} />}
    </TextFieldBody>
  )
}

export default TextField;