var where = require('node-where');

exports.city = function(){
where.is('87.211.144.240', function(err, result) {
  if (result) {
    console.log('City: ' + result.get('city'));
  }
});
}