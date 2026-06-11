
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { styles } from './Login.styles';
import InputField from '../../components/InputField/InputField';
import SocialButton from '../../components/SocialButton/SocialButton';

const Login = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>

      <View style={styles.header}>
        <Image source={require('../../../assets/img/linkedin-logo.png')} style={styles.logoImage} />
        <Text style={styles.close}>✕</Text>
      </View>

      <Text style={styles.title}>Entrar</Text>
      <Text style={styles.subtitle}>ou <Text style={styles.link}>Cadastre-se no LinkedIn</Text></Text>

      <InputField placeholder="E-mail ou telefone" />
      <InputField placeholder="Senha" secureTextEntry />

      <Text style={styles.link}>Esqueceu a senha?</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <View style={styles.divider}>
        <View style={styles.line} />
        <Text style={styles.dividerText}>ou</Text>
        <View style={styles.line} />
      </View>

      <Text style={styles.terms}>
        Ao clicar em Continuar, você aceita o{' '}
        <Text style={styles.link}>Contrato do Usuário</Text>, a{' '}
        <Text style={styles.link}>Política de Privacidade</Text>, e a{' '}
        <Text style={styles.link}>Política de Cookies</Text> do LinkedIn.
      </Text>

     
      <SocialButton label="Entrar com Apple" icon={require('../../../assets/img/apple-icon.png')} />
      <SocialButton label="Entrar com Google" icon={require('../../../assets/img/google-icon.png')} />

    </ScrollView>
  );
};

export default Login;