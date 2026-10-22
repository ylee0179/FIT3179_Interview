/* FIT3179 Stone Stories — chart embedding only.
   Each visualisation is specified in json/*.json (Vega-Lite).
   Source values and interaction logic are NOT coded in JavaScript. */
'use strict';
const charts = [ //this part is used to link html containers with the json file
  ["#vis-waffle", "json/origin_waffle.json"],
  ["#vis-flow-original", "json/specimen_journeys_flow.json"],
  ["#vis-world", "json/world_origins_choropleth.json"],
  ["#vis-bump", "json/acquisition_bump.json"],
  ["#vis-states", "json/state_choropleth_linked.json"],
  ["#vis-localities", "json/locality_proportional_symbols.json"],
  ["#vis-thennow", "json/mines_then_now_map.json"],
  ["#vis-butterfly", "json/state_then_now_butterfly.json"],
  ["#vis-signature", "json/signature_minerals_small_multiples.json"],
  ["#vis-heatmap", "json/state_class_heatmap.json"],
  ["#vis-topspecies", "json/top_species_origin_bar.json"],
  ["#vis-crystal-treemap", "json/crystal_treemap.json"],
  ["#vis-slope", "json/crystal_systems_slope.json"],
  ["#vis-hardness-preferred", "json/crystal_hardness_jitter.json"],
  ["#vis-family-hardness", "json/mineral_family_hardness.json"],
  ["#gem-radar", "json/gemstone_radar.json"]
];
const embedOptions = {actions:false, renderer:'svg', tooltip:{theme:'custom'}}; //actions: false used to hide the action menu
function showChartError(target, file, error) {
  console.error('Visualisation error:', file, error);
  const container = document.querySelector(target);
  if (container) {
    const message = document.createElement('p');
    message.className = 'chart-error';
    message.textContent = 'Chart unavailable: ' + (error?.message || String(error));
    container.replaceChildren(message);
  }
}
charts.forEach(([selector, file]) => { //used vega-embed inside a forEach loop to load and render all my visualisations automatically.
  vegaEmbed(selector, file, embedOptions).catch(err => showChartError(selector, file, err));
});
