import styled from "styled-components";
import { space, layout, flexbox } from "styled-system";
import Scaling from "../helpers/Scaling";

const Container = styled("div")(
  ({ theme }) => ({
    backgroundColor: theme.body,
    color: theme.text,
  }),
  space,
  layout,
  flexbox,
  Scaling
);

export default Container;
