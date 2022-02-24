import styled from '@emotion/styled'

export const Main = styled.div`
  width: 600px;
  background-color: white;
  padding: 20px;
  margin: 20px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  > h2 {
    margin: 10px 0;
    font-family: auto;
    font-size: 32px;
    color: #5BCDE8;
  }
  > p {
    margin: 5px 0;
    font-size: 18px;
    font-weight: 500;
  }
  > span {
    padding-top: 10px;
  }
  > a {
    padding: 5px 0 15px;
    font-weight: 500;
    color: #5BCDE8;
  }
`

export const StyledButton = styled.button<{ color?: string }>`
  width: 100%;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ color }) => color || 'white'};
  color: ${({ color }) => color ? 'white' : '#707070'};
  border: ${({ color }) => color ? '0px' : '2px solid #707070'};
  border-radius: 16px;
  margin: 10px 0;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  :active {
    opacity: 0.8;
  }
  > img {
    width: 32px;
    margin-right: 16px;
  }
`

export const Seperator = styled.div`
  width: 100%;
  border: 1px solid #D8DADF;
  margin: 10px 0;
`

export const TextFieldBody = styled.div`
  position: relative;
  margin-bottom: 10px;
  > img {
    width: 24px;
    opacity: 0.5;
    position: absolute;
    right: 20px;
    top: 38px;
    cursor: pointer;
  }
`

export const StyledLabel = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: bold;
  color: #8C96A3;
`

export const StyledInput = styled.input`
  width: 100%;
  height: 45px;
  border: 2px solid #D8DADF;
  padding: 0 10px;
  margin-top: 5px;
  font-size: 16px;
  border-radius: 10px;
`

export const Message = styled.p`
  margin: 5px 0;
  font-size: 14px;
  color: red;
`

export const CheckboxBody = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0;
  > input {
    position: relative;
    margin-right: 5px;
    appearance: none;
    width: 20px;
    height: 20px;
    border: 2px solid #D8DADF;
    border-radius: 3px;
    cursor: pointer;
    :checked {
      border-color: #AAA;
      :before {
        position: absolute;
        left: 2px;
        top: -4px;
        display: block;
        content: "\\2713";
        font-size: 18px;
        font-weight: bold;
        color: blue;
      }
    }
  }
`

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0;
  font-size: 18px;
  > p {
    margin: 0;
  }
  > a {
    margin-left: 10px;
    font-weight: 500;
    color: #5BCDE8;
  }
`