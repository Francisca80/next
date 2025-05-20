module.exports = {
  apps: [
    {
      name: 'margin-top',
      script: 'node_modules/next/dist/bin/next',
      args: 'start',
      instances: 'max',
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PORT: 30001,
        PAYLOAD_SECRET: process.env.PAYLOAD_SECRET,
        DATABASE_URI: process.env.DATABASE_URI,
        MONGODB_URI: process.env.MONGODB_URI
      },
      env_development: {
        NODE_ENV: 'development',
        PORT: 30001,
        PAYLOAD_SECRET: process.env.PAYLOAD_SECRET,
        DATABASE_URI: process.env.DATABASE_URI,
        MONGODB_URI: process.env.MONGODB_URI
      }
    }
  ]
} 