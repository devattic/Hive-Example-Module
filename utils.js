const yaml = require('js-yaml');
const fs = require('fs');

function getExposedNameFromConfig() {
  const doc = yaml.safeLoad(fs.readFileSync('module.yml', 'utf8'));

  return doc.ExposedAs;
}

exports.getExposedNameFromConfig = getExposedNameFromConfig;
