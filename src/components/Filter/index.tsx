import { TouchableOpacityProps } from "react-native";

import { Container, Title, FilterStyleProps } from "./styles";

type Props = TouchableOpacityProps & FilterStyleProps & {
  title: string;
};

export function Filter({ title, isActived = false ,...rest }: Props) {
  return (
    <Container 
      isActived={isActived} 
      {...rest}
    >
      <Title>
        {title}
      </Title>
    </Container>
  )
}