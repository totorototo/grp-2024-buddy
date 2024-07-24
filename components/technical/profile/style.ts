import styled from "styled-components";
import { FunctionComponent } from "react";
import { ProfileProps } from "@/components/technical/profile/Profile";

const style = (Component: FunctionComponent<ProfileProps>) => styled(Component)`
  top: 0;
  left: 0;
  flex: 1;

  svg {
    position: absolute;
    bottom: 0;
    left: 0;
    transform: scaleY(-1);
  }

  svg rect {
    transition: fill 400ms;
  }

  .sections-container {
    -webkit-overflow-scrolling: touch;
    overflow-y: auto;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* Internet Explorer 10+ */
    margin-top: env(safe-area-inset-top);
    position: absolute;
    height: 70%;
    bottom: 0;
    top: 0;
    width: 100vw;
    scroll-snap-type: x mandatory;
    display: flex;

    flex: none;
    flex-flow: row nowrap;
  }

  /* WebKit and Blink (Chrome, Safari, newer versions of Opera) */
  .sections-container::-webkit-scrollbar {
    width: 0;
    height: 0;
    display: none;
  }

  @supports (-webkit-overflow-scrolling: touch) {
    .sections-container {
      overflow-y: scroll;
      -webkit-overflow-scrolling: touch;
    }
  }

  .svg-container {
    -webkit-overflow-scrolling: touch;
    overflow-y: auto;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* Internet Explorer 10+ */
    position: absolute;
    bottom: 0;
    left: 0;
    font-size: 0.6rem;

    g:nth-child(even) {
      .location {
        transform: translate(0.1rem, 0.6rem);
      }
    }

    g:nth-child(odd) {
      .location {
        transform: translate(0.1rem, -0.6rem);
      }
    }

    .cp {
      .km {
        transform: translate(-0.4rem, -0.6rem);
        font-size: 0.6rem;
        color: var(--color-text);
      }
    }
  }

  /* WebKit and Blink (Chrome, Safari, newer versions of Opera) */
  .svg-container::-webkit-scrollbar {
    width: 0;
    height: 0;
    display: none;
  }

  @supports (-webkit-overflow-scrolling: touch) {
    .svg-container {
      overflow-y: scroll;
      -webkit-overflow-scrolling: touch;
    }
  }
`;

export default style;
