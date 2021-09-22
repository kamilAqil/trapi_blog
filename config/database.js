module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST'),
        port: env('DATABASE_PORT'),
        database: env('DATABASE_NAME'),
        username: env('DATABASE_USERNAME'),
        password: env('DATABASE_PASSWORD'),
        schema: ('DATABASE_SCHEMA', 'public'), // Not Required
        ssl: {
          rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
        }
      },
      options: {},
    },
  },
});