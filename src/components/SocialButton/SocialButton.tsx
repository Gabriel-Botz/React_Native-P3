import { TouchableOpacity, Image, Text, ImageSourcePropType } from 'react-native';
import { styles } from './SocialButton.styles';

interface Props {
  label: string;
  icon: ImageSourcePropType;
}

const SocialButton = ({ label, icon }: Props) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Image source={icon} style={styles.icon} />
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

export default SocialButton;