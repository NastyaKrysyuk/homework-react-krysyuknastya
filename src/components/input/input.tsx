
const Input = ({ type, placeholder, value, name, onChange }: {
  type: string,
  placeholder: string,
  value: string,
  name: string,
  onChange: any
}) => {
  return (
    <div className="wrapper-for-input">
      <label className="prop">{name}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
      />
    </div>
  )
}

export default Input