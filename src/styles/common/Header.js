import { Layout } from "antd";
import styled from "styled-components";
import Scaling from "../helpers/Scaling";

const { Header } = Layout;

const styledHeader = styled(Header)`
  background: ${(props) => props.theme.body} !important;
  height: unset;
  ${Scaling};
  padding-bottom: 80px !important;
`;

export default styledHeader;
