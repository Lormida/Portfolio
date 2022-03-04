export default function useLeftCardTilt() {
  const leftTitleTilt = `Who's this guy?`
  const leftTextTilt = [
    `My name is Andrew.`,
    `I'm a Full-Stack Developer from Minsk, 21 y.o.`,
    `I love javascript and am seriously into building modern, scalable,
    fast-performing web applications.`,
    `I have serious passion for UI effects, animations and creating intuitive,
    dynamic user experiences.`
  ]
  const extraClassLeft = "about-me-left"
  const imageTiltLeft = "lough.webp"
  return { leftTitleTilt, leftTextTilt, extraClassLeft, imageTiltLeft }
}