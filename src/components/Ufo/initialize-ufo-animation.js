import { animateRay, initializeRayCanvas } from './canvas-ray.js'
import { runAppearanceUfo } from '../../animations/ufo-animation.js'

export const runInitUfoAnimation = () => {
  //---Initialize ufo's rays & appearance ufo---
  initializeRayCanvas()
  runAppearanceUfo(animateRay)
}
