const username = "Ruslan";
const password = "Oreipled1$";
const options = {
  port: 3000,
  dataBaseUrl: `mongodb+srv://${username}:${password}@cluster0-5wcez.gcp.mongodb.net/test?retryWrites=true`
};

module.exports = options;
