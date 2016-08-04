
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('login');
};

exports.standartRedirect = function(req, res){
	console.log('Called public');
	res.render('login');
};
// exports.partials = function (req, res) {
//   var name = req.params.name;
//   res.render('login');
// };