import React, { ReactElement } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateCount } from '../../store/slices/ButtonClickSlice';

type MyComponentProps = {
  children: React.ReactNode;
};

export default function MyComponent({children}:MyComponentProps) {
  const dispatch = useDispatch()
  const counter:any = useSelector((state) => state)
  
  const modifiedChildren = React.Children.map(children, (child:any, index) => {
    if (React.isValidElement(child)) {
      if(index !== 0){
        return React.cloneElement(child as ReactElement<any>, { 
          disabled: false,
          className: "bg-gray",
        
        });
      } else {
        return React.cloneElement(child as ReactElement<any>, { 
          disabled: false,
          onClick: () => dispatch(updateCount())
        
        });
      }
     
    }
    return child;
  });
  return (
    <div className='flex flex-col gap-3'>
      <p>{`Hey!! You have clicked me ${counter?.count.count} time`}</p>
      
      <div className='flex items-center gap-2'  >
      {modifiedChildren}
      </div>
    </div>
  )
}
