import { css } from "styled-components";
import device from "./Device";

const { tablet, mobileL } = device;
const scaling = {
  laptopSize: 30,
  tabletSize: 25,
  mobileSize: 20,
};

const styledScaling = css`
  padding-left: ${scaling.laptopSize}px !important;
  padding-right: ${scaling.laptopSize}px !important;
  @media ${tablet} {
    padding-left: ${scaling.tabletSize}px !important;
    padding-right: ${scaling.tabletSize}px !important;
  }
  @media ${mobileL} {
    padding-left: ${scaling.mobileSize}px !important;
    padding-right: ${scaling.mobileSize}px !important;
  }
`;

export default styledScaling;
