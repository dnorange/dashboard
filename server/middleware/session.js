const session = require('koa-session');
const sessConfig = require('../session-config');

module.exports = app => {
  // secret key generated by python os.urandom
  app.keys = ['\x82\x98\xa5\xf6\xfb'];

  app.use(session(sessConfig, app));

  return async (ctx, next) => {
    let pv = ctx.session.pv || 0;
    ctx.session.pv = ++pv;

    try {
      await next();
    } catch (err) {
      ctx.app.reportErr(err, ctx);
    }
  };
};
