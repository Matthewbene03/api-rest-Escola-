class HomeController {
  constructor(){}

  index(req, res) {
    res.send("Olá mundo");
  }
}

export default new HomeController();
