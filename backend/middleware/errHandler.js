const { constants } = require('./constants');

const errHandler = (err, req, res, next) => {
  console.log('err handler', res.statusCode);
  const statuscode = res.statusCode ? res.statusCode : 500;

  switch (statuscode) {
    case constants.VALIDATION_ERROR:
      res.json({
        Title: 'Validation Failed',
        'Erro Msg': err.message,
        'Stack Trace': err.stack,
      });
      break;
    case constants.FORBIDDEN:
      res.json({
        Title: 'FORBIDDEN',
        'Erro Msg': err.message,
        'Stack Trace': err.stack,
      });
      break;
    case constants.UNAUTHORIZED:
      res.json({
        Title: 'UNAUTHORIZED',
        'Erro Msg': err.message,
        'Stack Trace': err.stack,
      });
      break;
    case constants.SERVER_ERROR:
      res.json({
        Title: 'Server Err',
        'Erro Msg': err.message,
        'Stack Trace': err.stack,
      });
      break;
    case constants.NOT_FOUND:
      res.json({
        Title: 'NOT_FOUND',
        'Erro Msg': err.message,
        'Stack Trace': err.stack,
      });
      break;

    default:
      console.log('No Err');
      break;
  }
};

module.exports = errHandler;
