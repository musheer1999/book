module.exports = {
    apps : [
    {
      name       : "myapp-client",
      script     : "set PORT=3000 && react-scripts start",
      watch       : true,
      env: {
        "NODE_ENV": "development",
      },
      env_production : {
        "NODE_ENV": "production"
      }
    }]
  }
