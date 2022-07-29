import React from "react";


export const LeftMain: React.FC<{children: React.ReactNode}> = ({children}) => {


  return (
    <div className="block__leftmain">
      {children}
    </div>

  )
}
