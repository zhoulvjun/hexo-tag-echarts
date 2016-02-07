var fs = require('fs'),
  path = require('path'),
  _ = require('underscore');

var filePath = path.join(__dirname, 'echarts-template.html');

function echartsMaps(args, content) {

  var template = fs.readFileSync(filePath).toString(),
    options = {};

  if (content.length) {
    var options = content;
  }

  // Output into 
  return _.template(template)({
    id: 'echarts' + ((Math.random() * 9999) | 0),
    option: options,
    height: args[0] || 400,
    width: args[1] || '81%'
  });
}


hexo.extend.tag.register('echarts', echartsMaps, {
  async: true,
  ends: true
});