import { initializeMenusAnimation } from "@/animations/menu-animation.js"

export default function runInitMenuAnimation() {

  // === Initializing menus DOM ===
  const burgerMenuGlobal = document.querySelector('.burger-menu-global')
  const menuGlobal = document.querySelector('.menu-global')
  const menuLinks = document.querySelector('.menu-links')
  const runningText = document.querySelector('.running-line')
  const homeOverlay = document.querySelector('.home-overlay')

  // === Initializing animation menu ===
  initializeMenusAnimation(homeOverlay, burgerMenuGlobal, menuGlobal, menuLinks, runningText)
}
