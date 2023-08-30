import React from "react";
import { Icon } from "@iconify/react";

const ReactIcon = ({ size, color, iconName, ...props }) => {
  return (
    <>
      <Icon icon={iconName} fontSize={size} color={color} {...props} />
    </>
  );
};

export default ReactIcon;
