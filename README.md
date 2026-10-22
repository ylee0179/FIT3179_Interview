# Stone Stories: Australia's Minerals, Ground to Glass

FIT3179 Data Visualisation 2, Monash University Malaysia, October 2026.
Author: Lee Ying Yik

A single scrolling data story about the South Australian Museum's mineral collection: where specimens come from, where in Australia they were collected, what they are made of, which crystal shapes collectors keep, and how gemstones compare.

## Folder structure

```
index.html      the page: story text, chapter layout and chart placeholders
style.css       all styling (colours, typography, layout), one file
js/main.js      embeds each chart from its JSON file with vegaEmbed
json/           16 Vega-Lite specifications, one per chart
data/           22 data files used by the charts (CSV, JSON, TopoJSON)
README.md       this file
```

All charts and maps are built with Vega-Lite. JavaScript only loads the JSON specifications; no chart is drawn by hand.

## How to view it

Browsers block data files when `index.html` is opened directly, so the page must be served:

- **Visual Studio Code:** right-click `index.html` and choose **Open with Live Server**.
- **Online:** upload the contents of this folder to a public GitHub repository, then go to Settings, then Pages, choose the `main` branch and the root folder. The site appears at `https://YOUR-USERNAME.github.io/REPOSITORY-NAME/`.

## Story and charts

| Chapter | Chart | Idiom | Specification |
|---|---|---|---|
| 1 Origins | Where the minerals came from | Stacked bar and lollipop | `origin_waffle.json` |
| 1 Origins | Recorded origins converge on Adelaide | Flow map | `specimen_journeys_flow.json` |
| 1 Origins | Size changes the ranking | Choropleth (world) | `world_origins_choropleth.json` |
| 1 Origins | Acquisition methods by decade | Bump chart | `acquisition_bump.json` |
| 2 Australian ground | South Australia collected closest to home | Choropleth linked to bar chart | `state_choropleth_linked.json` |
| 2 Australian ground | Mining towns are the real treasure chests | Proportional symbol map | `locality_proportional_symbols.json` |
| 2 Australian ground | Collecting followed old mines | Layered point map | `mines_then_now_map.json` |
| 2 Australian ground | Six signature minerals | Small-multiple maps | `signature_minerals_small_multiples.json` |
| 2 Australian ground | Museum against today's mines | Back-to-back bar chart | `state_then_now_butterfly.json` |
| 3 Chemistry | Each state's mineral-family mix | Heatmap | `state_class_heatmap.json` |
| 3 Chemistry | The twelve favourites | 100 percent stacked bar | `top_species_origin_bar.json` |
| 4 Crystal shapes | Most minerals crystallise as monoclinic | Treemap | `crystal_treemap.json` |
| 4 Crystal shapes | Which shapes gain, which shapes lose | Slope chart | `crystal_systems_slope.json` |
| 5 Gemstones | Hardness by crystal shape | Jittered strip plot | `crystal_hardness_jitter.json` |
| 5 Gemstones | Hardness by mineral family | Box plot with jittered points | `mineral_family_hardness.json` |
| 5 Gemstones | What makes a gemstone distinctive? | Radar chart | `gemstone_radar.json` |

Map idioms: choropleth (world and Australian states), flow map, proportional symbol map, layered point map and small-multiple maps.

## Data sources

1. South Australian Museum (2016). *South Australian Museum minerals collection.* Data South Australia. https://data.sa.gov.au/data/dataset/south-australian-museum-minerals-collection
2. *IMA mineral list.* (2025). RRUFF Project. https://www.rruff.net/ima-mineral-list/
3. Geoscience Australia (2026). *Australian operating mines 2025.* https://ecat.ga.gov.au/
4. Erebaur (2026). *The stones* (gem properties). https://erebaur.com/chapters/stones/
5. Australian Bureau of Statistics (2026). *Australian Statistical Geography Standard: states and territories.* https://www.abs.gov.au/statistics/standards/australian-statistical-geography-standard-asgs
6. Natural Earth country outlines through the world-atlas package. https://github.com/topojson/world-atlas

## How the data was prepared

- **Origins:** country and state come from each specimen's written locality. 1,153 records (4.7 percent) have no country and are left off the maps.
- **Collecting places:** sixty well-known towns were matched to approximate coordinates; circles sit at the town, not the exact mine.
- **Mineral families:** each mineral's family comes from its chemical formula in the International Mineralogical Association list. Quartz and other silica are counted as silicates.
- **Crystal systems:** only species with a single recorded crystal system are counted, so every count is unambiguous. Hexagonal includes trigonal, as in the source list.
- **Normalised values:** choropleths divide specimen counts by land area (per million or per 100,000 square kilometres).
- **Today's mines:** distances between museum places and 2025 mines are straight-line and illustrative.
- **Treemap and radar:** Vega-Lite has no built-in treemap or radar, so rectangle and axis positions are prepared in `crystal_treemap_layout.csv` and the `radar_*.csv` files, then drawn by Vega-Lite.

## Key techniques

- **Joins:** CSV data is joined to TopoJSON outlines with a `lookup` transform (country name for the world map, state name for Australia).
- **Classification:** choropleth classes are set with thresholds (classes = thresholds + 1) and shown in a labelled legend.
- **Interaction:** tooltips, dropdown filters, sliders, checkboxes, legend highlighting and a click-linked map and bar chart.

## Use of artificial intelligence

AI assistance was used to revise page structure, explanatory text, visual styling and Vega-Lite code. All design decisions were reviewed by the author.
