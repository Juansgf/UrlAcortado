const knex = require("../configs/connection");
const appConfig = require("../configs/app");

exports.all = () => {
  return knex.select("*").from("urls").orderBy("id","desc").limit(1);
};

exports.create = (url) => {
  return knex("urls").insert({
    original: url.original,
    token: url.token,
    nuevo: `http://localhost:${appConfig.expressPort}/${url.token}`,
  });
};

exports.token = (token) => {
  return knex.select("*").from("urls").where("token", token).first();
};

exports.contador = (unUrl) => {
  return knex("urls")
    .update({ redir: unUrl.redir + 1 })
    .where("id", unUrl.id);
};