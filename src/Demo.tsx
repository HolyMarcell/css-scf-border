import React from "react";
import {LeftMain} from "./blocks/LeftMain";
import {RightMain} from "./blocks/RightMain";

export const Demo = () => {
  return (
    <>
      <div className={'content'}>
        <h2>Demo</h2>
      </div>
      <div className={'demo'}>
        <div className={'content--left'}>
          <LeftMain>
            <h2>Hello World, the SCF Border</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur
              corporis cumque dolore doloremque doloribus id ipsum maiores odio quam,
              quo quos ratione sapiente similique soluta tempora tenetur vel voluptas
              voluptates?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur
              corporis cumque dolore doloremque doloribus id ipsum maiores odio quam,
              quo quos ratione sapiente similique soluta tempora tenetur vel voluptas
              voluptates?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur
              corporis cumque dolore doloremque doloribus id ipsum maiores odio quam,
              quo quos ratione sapiente similique soluta tempora tenetur vel voluptas
              voluptates?</p>
          </LeftMain>
        </div>
        <div className={'content--right'}>
          <RightMain>
            <h1>Foo, the bar foo baz?</h1>
          </RightMain>
        </div>

      </div>
    </>
  )
}
