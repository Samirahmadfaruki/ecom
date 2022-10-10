import mysql from "mysql";

const connUri = {
  host: "localhost",
  user: "root",
  password: "password",
  database: "ecommerce",
  multipleStatements: true,
};

const conn = mysql.createConnection(connUri);
conn.connect((err) => {
  if (!err) {
    console.log("Connection is Success!");
  } else {
    console.log(err);
  }
});

export default conn;