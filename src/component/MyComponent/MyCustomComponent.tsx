import React from 'react'
import MyComponent from '../../Feature/MyComponent/MyComponent'
import CustomButtons from '../../CommonComponent/Button/Button'

export default function MyCustomComponent() {
    console.log('my componen')
  return (
    <div>
      <MyComponent> 
        <CustomButtons> Clickable button</CustomButtons>
        <CustomButtons className='px-3 py-2'> Dump Button</CustomButtons>
        
        </MyComponent>
    </div>
  )
}
