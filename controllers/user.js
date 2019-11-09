const pool = require('../models/queries');


exports.createUser = (request, response, next) => {
  pool.connect((err, client, done) => {
    if (err) {
      console.log(`not able to get connection ${ err }`);
      response.status(400).json({ err });
    }
    client.query('SELECT * FROM public.user', (error, results) => {
      console.log(results)
      done();
      if (error) {
        console.log(error);
        response.status(400).json({ error });
      }
      response.status(200).json(results.rows);
    });
  });
};
