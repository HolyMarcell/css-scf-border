import React from "react";

export const Intro = () => {
  return (
    <div className={'into'}>

      <h2>css-scf-border</h2>
      <div className={'content'}>
        <p>
          A css houdini paintWorklet to create these beveled borders in CSS. See <a href={'https://github.com/w3c/css-houdini-drafts/blob/main/css-paint-api/EXPLAINER.md'} target={'_blank'}>https://github.com/w3c/css-houdini-drafts/blob/main/css-paint-api/EXPLAINER.md</a>
          for mor details on Houdinis css-paint-api.
        </p>
        <p>
          For supported Browsers check: <a href={'https://ishoudinireadyyet.com/'} target={'_blank'}>https://ishoudinireadyyet.com/</a>

          A Polyfill for Firefox exists, but is slow and somewhat unreliable.
        </p>
      </div>

    </div>
  )
}
