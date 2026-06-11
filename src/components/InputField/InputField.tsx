import { View, TextInput } from 'react-native';
import { styles } from './InputField.styles';

interface Props {
  placeholder: string;
  secureTextEntry?: boolean;
}

const InputField = ({ placeholder, secureTextEntry }: Props) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default InputField;