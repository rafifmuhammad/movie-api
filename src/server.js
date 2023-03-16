const Hapi = require('@hapi/hapi');
const movieRoute = require('./route/moviesRoute');

const init = async () => {
  const server = Hapi.server({
    host: 'localhost',
    port: 5000,
  });

  server.route(movieRoute);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
