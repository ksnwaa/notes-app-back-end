const Hapi = require('@hapi/hapi');
const routes = require('./routes');
const { updateNoteById } = require('./handler'); // Import your handler function

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  // Define the PUT route
  server.route({
    method: 'PUT',
    path: '/notes/{id}',
    handler: updateNoteById, // This should be a defined function
  });

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();

