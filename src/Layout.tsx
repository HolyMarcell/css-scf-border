import React from "react";
import {Demo} from "./Demo";
import {Intro} from "./Intro";
import {Explanation} from "./Explanation";


export const Layout = () => {


  return (
    <div className={'layout'}>
      <Intro />
      <Demo />
      <Explanation />
    </div>
  )
}
