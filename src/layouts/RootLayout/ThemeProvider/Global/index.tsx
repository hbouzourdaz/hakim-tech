import { Global as _Global, css, useTheme } from "@emotion/react"

import { ThemeProvider as _ThemeProvider } from "@emotion/react"
import { pretendard } from "src/assets"

export const Global = () => {
  const theme = useTheme()

  return (
    <_Global
      styles={css`
        body {
          direction: rtl;
          margin: 0;
          padding: 0;
          color: ${theme.colors.gray12};
          background-color: ${theme.colors.gray12};
          font-family: ${pretendard.style.fontFamily};
          font-weight: ${pretendard.style.fontWeight};
          font-style: ${pretendard.style.fontStyle};
        }

        * {
          color-scheme: ${theme.scheme};
          box-sizing: border-box;
          direction: rtl;
font-family: ${pretendard.style.fontFamily};
          font-weight: ${pretendard.style.fontWeight};
          font-style: ${pretendard.style.fontStyle};
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          margin: 0;
          font-family: ${pretendard.style.fontFamily};
          font-weight: ${pretendard.style.fontWeight};
          font-style: ${pretendard.style.fontStyle};
          direction: rtl;
        }

        a {
          all: unset;
          cursor: pointer;
          direction: rtl;
        }

        ul {
          padding: 0;
          direction: rtl;
        }

        // init button
        button {
          all: unset;
          cursor: pointer;
          direction: rtl;
        }

        // init input
        input {
          all: unset;
          box-sizing: border-box;
          direction: rtl;
        }

        // init textarea
        textarea {
          border: none;
          background-color: transparent;
          font-family: ${pretendard.style.fontFamily};
          font-weight: ${pretendard.style.fontWeight};
          font-style: ${pretendard.style.fontStyle};
          padding: 0;
          outline: none;
          resize: none;
          color: inherit;
          direction: rtl;
        }

        hr {
          width: 100%;
          border: none;
          margin: 0;
          border-top: 1px solid ${theme.colors.gray6};
          direction: rtl;
        }
      `}
    />
  )
}
