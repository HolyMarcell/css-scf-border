import React from "react";
import {LeftMain} from "./blocks/LeftMain";
import {RightMain} from "./blocks/RightMain";


export const Layout = () => {


  return (
    <div className={'layout'}>
      <div className={'content--left'}>
        <LeftMain />
      </div>
      <div className={'content--right'}>
        <RightMain>
        </RightMain>
      </div>

    </div>
  )
}
