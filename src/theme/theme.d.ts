import { Theme } from "theme/dark";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
