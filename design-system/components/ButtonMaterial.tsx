import * as React from "react";
import Button from "@material-ui/core/Button";

export type Props = {
  /** Optional string that can be used to set the button value */
  text?: string;

  /** Make button grow to 100% */
  fluid?: boolean;

  /** Disable button */
  disabled?: boolean;

  /** Button kind */
  kind?: "default" | "primary" | "danger";
};

export const ButtonMaterial: React.FC<Props> = ({
  text,
  fluid,
  disabled,
  children,
  kind
}) => (
  <Button variant="contained" color="primary">
    Hello World
  </Button>
);
