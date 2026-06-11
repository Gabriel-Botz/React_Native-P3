import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0077B5',
  },
  logoBox: {
    backgroundColor: '#0077B5',
    color: '#fff',
    paddingHorizontal: 4,
    borderRadius: 4,
  },
  close: {
    fontSize: 20,
    color: '#333',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#333',
    marginBottom: 24,
  },
  link: {
    color: '#0077B5',
    fontWeight: '600',
  },
  button: {
    backgroundColor: '#0077B5',
    borderRadius: 30,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  dividerText: {
    marginHorizontal: 10,
    color: '#555',
    fontSize: 14,
  },
  terms: {
    fontSize: 12,
    color: '#333',
    marginBottom: 16,
    lineHeight: 18,
  },
  logoImage: {
  width: 120,
  height: 35,
  resizeMode: 'contain',
},
});