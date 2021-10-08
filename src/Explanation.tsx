import React from "react";

export const Explanation = () => {
  return (
    <div className={'demo'}>

      <div className={'content--left'}>
        <pre>
          {"&__leftmain {\n" +
          "  width: 100%;\n" +
          "  height: 100%;\n" +
          "  box-sizing: border-box;\n" +
          "  padding: 20px 20px 20px 60px;\n" +
          "\n" +
          "  --scfborder-top-left: 20px 70px;\n" +
          "  --scfborder-top-right: 20;\n" +
          "  --scfborder-bottom-right: 20;\n" +
          "  --scfborder-bottom-left: 20px 70px;\n" +
          "  --scfborder-width: 3px;\n" +
          "  --scfborder-shadow-color: #69e9ff;\n" +
          "  --scfborder-border-color: #69e9ff;\n" +
          "  --scfborder-pattern-shift: 0px 50px;\n" +
          "  --scfborder-top-dent: 10px;\n" +
          "  --scfborder-top-dent-length: 33%;\n" +
          "\n" +
          "  background-image: paint(scfborder);\n" +
          "}"}
        </pre>
      </div>
      <div className={'content--right'}>
        <pre>
          {"    &__rightmain {\n" +
          "      width: 100%;\n" +
          "      height: 100%;\n" +
          "      box-sizing: border-box;\n" +
          "      display: flex;\n" +
          "      align-items: center;\n" +
          "      justify-content: center;\n" +
          "\n" +
          "\n" +
          "      --scfborder-top-left: 20;\n" +
          "      --scfborder-top-right: 20px 70px;\n" +
          "      --scfborder-bottom-right: 20px 70px;\n" +
          "      --scfborder-bottom-left: 20;\n" +
          "      --scfborder-width: 3px;\n" +
          "      --scfborder-shadow-color: #69e9ff;\n" +
          "      --scfborder-border-color: #69e9ff;\n" +
          "      --scfborder-pattern-shift: 0 -50;\n" +
          "      --scfborder-top-dent: 10px;\n" +
          "      --scfborder-top-dent-length: 33%;\n" +
          "\n" +
          "      background-image: paint(scfborder);\n" +
          "    }"}
        </pre>
      </div>

    </div>
  )
}
