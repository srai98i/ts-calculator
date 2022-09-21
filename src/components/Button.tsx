import React from "react";
import styled from "styled-components";

const StyledButton = styled.div`
  background: #e48900;
  border: none;
  border-radius: 8px;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-weight: bold;
`;
export enum ButtonType {
  Number,
  Operation,
  AC,
  Back,
  Equal,
}

type Props = {
  label: string;
  position?: [x: number, y: number];
  width?: number;
  height?: number;
  type?: ButtonType;
};

const Button: React.FC<Props> = ({
  type = ButtonType.Operation,
  height,
  label,
  position,
  width,
}) => {
  const styles: React.CSSProperties = {};

  if (position) {
    styles.gridColumnStart = position[0] + 1;
    styles.gridRowStart = position[1] + 1;
  }
  if (width) {
    styles.gridColumnEnd = `span ${width}`;
  }
  if (height) {
    styles.gridRowEnd = `span ${height}`;
  }

  if (type === ButtonType.Operation) {
    styles.color = "#ffffff";
    styles.background = "#6473C3";
  }
  if (type === ButtonType.AC) {
    styles.color = "#ffffff";
    styles.background = "#D84040";
  }
  if (type === ButtonType.Back) {
    styles.color = "#ffffff";
    styles.background = "#F96B6B";
  }
  if (type === ButtonType.Equal) {
    styles.color = "#ffffff";
    styles.background = "#69C63E";
  }

  return <StyledButton style={styles}>{label}</StyledButton>;
};

export default Button;