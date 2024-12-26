import dotenv from 'dotenv';
// Carregar as variáveis de ambiente do arquivo .env
dotenv.config();
// Definir a tipagem das variáveis de ambiente
interface Env {
  PORT: number;
  MONGO_URI: string;
  JWT_SECRET: string;
  STRIPE_SECRET_KEY: string;
  STRIPE_WEBHOOK_SECRET: string;
}

// Criar uma função para fazer a conversão das variáveis de ambiente e definir valores padrão
const getEnv = (): Env => {
  return {
    PORT: parseInt(process.env.PORT || '8008', 10),
    MONGO_URI: process.env.MONGO_URI || '',
    JWT_SECRET: process.env.JWT_SECRET || '',
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY || '',
    STRIPE_WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET || '',
  };
};

// Exportar as variáveis de ambiente para serem usadas em outras partes do projeto
const env = getEnv();
export default env;
