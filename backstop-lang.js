/**
 * This file is used to generate the scenarios for multi-language sites.
 */

const scenarioTemplates = [
  {
    label: 'bar_site_{lang}',
    url: 'https://garris.github.io/{lang}/bar',
    // other properties...
  },
  {
    label: 'foo_site_{lang}',
    url: 'https://garris.github.io/{lang}/foo',
    // other properties...
  }
];

const languages = ['en', 'de'];
const scenarios = [];

for (const template of scenarioTemplates) {
  for (const lang of languages) {
    const scenarioConfig = { ...template };
    scenarioConfig.label = scenarioConfig.label.replace('{lang}', lang);
    scenarioConfig.url = scenarioConfig.url.replace('{lang}', lang);
    // Modify other properties if needed...
    scenarios.push(scenarioConfig);
  }
}

module.exports = scenarios;

module.exports = scenarios
