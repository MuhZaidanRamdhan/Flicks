import { css } from "styled-components";

const theme = {
    colors : {
      primary: "#e50914",
      secondary: "#fff",
    },

     sizes : {
      sm: css`
        font-size: 0.8rem;
        padding: 0.5rem 1rem;
      `,
      md: css`
        font-size: 1rem;
        padding: 0.8rem 1.5rem;
      `,
      lg: css`
        font-size: 1.2rem;
        padding: 1rem 2rem;
      `,
    }
}

export default theme;