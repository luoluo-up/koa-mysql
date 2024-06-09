const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  "luoxiaoluoheytea",
  "luoxiaoluoheytea",
  "20140526",
  {
    // MySQL服务器地址
    host: "sql.wsfdb.cn",
    // MySQL服务器端口号
    // 注意点: Sequelize不仅仅能操作MySQL还能够操作其它类型的数据库
    // 告诉Sequelize当前要操作的数据库类型
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
  }
);
sequelize
  .authenticate()
  .then(() => {
    console.log("ok");
  })
  .catch((err) => {
    console.log(err);
  });