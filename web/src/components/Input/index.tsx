import React from "react";

import { ContainerInput, Input } from "./styles";

interface PageInputProps {
  width: Number;
  multiline?: Boolean;
}
const ReactInput: React.FC<PageInputProps> = ({
  width,
  multiline,
  ...rest
}: any) => {
  return (
    <ContainerInput width={width} multiline={multiline}>
      <Input {...rest} multiline={multiline}/>
    </ContainerInput>
  );
};

export default ReactInput;
