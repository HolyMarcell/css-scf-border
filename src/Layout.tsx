import React from "react";
import {Demo} from "./Demo";
import {Intro} from "./Intro";
import {Explanation} from "./Explanation";
import {TopBar} from "./TopBar";
import {Api} from "./Api";


export const Layout = () => {


  return (
    <>
      <TopBar/>
      <div className={'layout'}>
        <Intro/>
        <Demo/>
        <Explanation/>
        <Api />
      </div>
    </>
  )
}
