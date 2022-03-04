import { drawChart, initializeFontChart, initiliazeChartCanvas } from './chart-draw.js'

export const runInitChartAnimation = () => {
  //---Drawing chart---
  initiliazeChartCanvas()
  initializeFontChart()
  drawChart()
}
