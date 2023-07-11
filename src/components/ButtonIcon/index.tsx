import { TouchableOpacityProps } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { ButtonIconTypeStyledProps, Container, Icon } from './styles';

type Props = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap;
  type?: ButtonIconTypeStyledProps;
}

export function ButtonIcon({ icon, type = 'PRIMARY', ...rest}: Props) {
  return (
    <Container {...rest}>
      <Icon 
        name={icon} 
        type={type}
      />
    </Container>
  )
}