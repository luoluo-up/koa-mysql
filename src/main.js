const db = require("./db/mysql");
db(() => {
  const { APP_PORT, MYSQL_HOST } = require("./config/config.default");
    const app = require("./app");
    app.listen(APP_PORT, () => {
        console.log(`server is running at ${MYSQL_HOST}:${APP_PORT}`);
    })
});
