import React from "react";

function FormField({label, type, name, value, onChange, input}) {
  return (
    
    <div>
      <label>
        {label}:
        <Input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  )
}

export default FormField;
