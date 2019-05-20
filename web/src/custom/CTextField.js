import React from 'react'
import TextField from '@material-ui/core/TextField'

export default function CTextField({ id, value, type, label, className, onChange, margin}) {
  return (
    <TextField
      id={id}
      type={type}
      label={label}
      className={className}
      value={value}
      onChange={onChange}
      margin={margin}
    />
  )
}