import React from "react";

export const Intro = () => {
  return (

    <div className={'content'}>
      <h2>About</h2>
      <p>
        A css houdini paintWorklet to create these beveled borders in CSS. See <br/>
        <a href={'https://github.com/w3c/css-houdini-drafts/blob/main/css-paint-api/EXPLAINER.md'} target={'_blank'}>
          https://github.com/w3c/css-houdini-drafts/blob/main/css-paint-api/EXPLAINER.md
        </a> <br/>
        for mor details on Houdinis css-paint-api.
      </p>
      <p>
        For supported Browsers check: <a href={'https://ishoudinireadyyet.com/'}
                                         target={'_blank'}>https://ishoudinireadyyet.com/</a>
        A Polyfill for Firefox exists, but is slow and somewhat unreliable.
      </p>
    </div>

  )
}
