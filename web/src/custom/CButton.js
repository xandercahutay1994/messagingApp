import React from 'react'
import Button from '@material-ui/core/Button'

export default function CButton({ name , variant = 'contained', color = 'primary', className, onClick}) {
  return (
    <Button 
      variant={variant} 
      color={color} 
      className={className} 
      onClick={onClick}
    >
      { name }
    </Button>
  )
}