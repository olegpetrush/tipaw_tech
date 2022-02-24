import { CheckboxBody } from "../StyledComponents";

const Checkbox = (props: { value: boolean; onChange: Function; label?: string }) => {

  const { value, onChange, label } = props;

  return (
    <CheckboxBody>
      <input type='checkbox' checked={value} onChange={() => onChange(!value)} />
      <span>{label}</span>
    </CheckboxBody>
  )
}

export default Checkbox;