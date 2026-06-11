
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { styles } from './Login.styles';
import InputField from '../../components/InputField/InputField';
import SocialButton from '../../components/SocialButton/SocialButton';

const Login = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>

      {/* Logo + X */}
      <View style={styles.header}>
        <Image source={require('../../../assets/img/linkedin-logo.png')} style={styles.logoImage} />
        <Text style={styles.close}>✕</Text>
      </View>

      {/* Título */}
      <Text style={styles.title}>Entrar</Text>
      <Text style={styles.subtitle}>ou <Text style={styles.link}>Cadastre-se no LinkedIn</Text></Text>

      {/* Inputs */}
      <InputField placeholder="E-mail ou telefone" />
      <InputField placeholder="Senha" secureTextEntry />

      {/* Esqueceu a senha */}
      <Text style={styles.link}>Esqueceu a senha?</Text>

      {/* Botão Entrar */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      {/* Divisor */}
      <View style={styles.divider}>
        <View style={styles.line} />
        <Text style={styles.dividerText}>ou</Text>
        <View style={styles.line} />
      </View>

      {/* Texto de termos */}
      <Text style={styles.terms}>
        Ao clicar em Continuar, você aceita o{' '}
        <Text style={styles.link}>Contrato do Usuário</Text>, a{' '}
        <Text style={styles.link}>Política de Privacidade</Text>, e a{' '}
        <Text style={styles.link}>Política de Cookies</Text> do LinkedIn.
      </Text>

      {/* Botões sociais - sem ícone por enquanto */}
      <SocialButton label="Entrar com Apple" icon={require('../../../assets/img/apple-icon.png')} />
      <SocialButton label="Entrar com Google" icon={require('../../../assets/img/google-icon.png')} />

    </ScrollView>
  );
};

export default Login;