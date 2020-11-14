const Url = require("../models/Url");

exports.all = (req, res) => {
  let allUrls = Url.all().then((objects) => {
    res.render("homepage/addUrl", { allUrls: objects });
  });
};

exports.store = (req, res) => {
  let dataObj = {};
  const { nanoid } = require("nanoid");
  dataObj.original = req.body.urlInicial;
  dataObj.token = nanoid(10);
  Url.create(dataObj).then((id) => {
    // if the request is expecting an ajax or json response
    console.log("Url", id);
    return res.redirect("/");
  });
};

exports.getById = async (req, res) => {
  const hash = req.params.hash;
  console.log(hash)
  const finalLetter = hash.toString();
  const isPlus = finalLetter.charAt(finalLetter.length - 1);
  if (isPlus == "+") {
    console.log("ES MAAAS");
    return res.redirect(`/${hash}/stats`);
  } else {
    console.log("HASH", hash);
    Url.token(hash).then((unUrl) => {
      console.log(unUrl);
      Url.contador(unUrl).then((id) => {
        console.log(id);
      });
      return res.redirect(unUrl.original);
    });
  }
};

exports.estadisticas = async (req, res) => {
  const hash = req.params.hash;
  console.log("HASH", hash);
  Url.token(hash.slice(0, -1)).then((item) => {
    console.log(item);

    res.render("homepage/stats", { data: item });
  });
};