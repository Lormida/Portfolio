export default function usePazzles() {
  const pazzlesImageSrcArray = [
    "responsive.svg",
    "universal.svg",
    "dynamic.svg",
    "speed.svg"
  ]
  const pazzlesTitleArray = [
    'Responsive',
    'Universal',
    'Dynamic',
    'Speed'
  ]
  const pazzlesTextArray = [
    'My layouts will work on any device, big or small',
    `Knowledge of front-end & back-end frameworks allows me to
    create full stack applications for a wide range of tasks`,
    `Websites don't have to be static,
    I love making pages come to life`,
    `Fast load times and lag free interaction using webpack`
  ]
  return { pazzlesImageSrcArray, pazzlesTitleArray, pazzlesTextArray }
}