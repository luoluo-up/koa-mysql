module.exports = (success,error) => {
  //判断 error 为其设置默认值
  if (typeof error !== "function") {
    error = () => {
      console.log("连接失败~~~");
    };
    }
    const sequelize = require("sequelize")
    const { MYSQL_DB, MYSQL_USER, MYSQL_PWD, MYSQL_HOST } = require('../config/config.default')
    const seq = new sequelize(MYSQL_DB, MYSQL_USER, MYSQL_PWD, {
      host: MYSQL_HOST,
      dialect: "mysql",
      pool: {
        // 最多有多少个连接
        max: 5,
        // // 最少有多少个连接
        min: 0,
        // 当前连接多久没有操作就断开
        idle: 10000,
        // 多久没有获取到连接就断开
        acquire: 30000,
      },
    });
    seq.authenticate().then(() => {
        success()
    }).catch(err => {
        error()
    })
}