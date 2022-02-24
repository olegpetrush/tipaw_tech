import { StyledButton } from '../StyledComponents'

const Button = (props: { color?: string; icon?: string; title?: string; [i: string]: any }) => {

  const { color, icon, title, ...rest } = props;

  return (
    <>
      <StyledButton color={color} {...rest}>
        {icon && <img src={icon} alt="" />}
        {title}
      </StyledButton>
    </>
  )
}

export default Button;