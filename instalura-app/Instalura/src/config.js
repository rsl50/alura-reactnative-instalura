import { Platform } from 'react-native';

// No emulador Android, "localhost" aponta para o próprio emulador;
// 10.0.2.2 é o endereço da máquina host. Em device físico, troque pelo IP da máquina.
const host = Platform.OS === 'android' ? '10.0.2.2' : 'localhost';

export const API_URL = `http://${host}:3030`;
