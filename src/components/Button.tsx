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
`;
type Props = {
  label: string;
  position?: [x: number, y: number];
  width?: number;
  height?: number;
};
const Button: React.FC<Props> = ({ height, label, position, width }) => {
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
  return <StyledButton style={styles}>{label}</StyledButton>;
};

export default Button;
