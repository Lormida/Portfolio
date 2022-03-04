const runTextFunc = (words, runText) => {
  let count = 0
  let count2 = 0
  let t = 600
  let delay = 1000
  let t0 = t
  let previousT = t

  for (let i = 0; i < words.length; i++) {
    t = t0 - t0 * count / (words.length * 1.2)
    previousT = t
    delay += previousT
    count++

    setTimeout(() => {
      runText.innerText = words[count2]
      count2++

      if (count2 == words.length - 1) {
        runText.style.animationName = 'pathWay'
        runText.style.animationPlayState = 'running'
        runText.style.pointerEvents = 'auto'
      }
    }, delay)
  }
}

export default function runAnimation(words, runText) {
  if (!runText.onclick) runText.onclick = () => runAnimation(words, runText)

  runText.style.color = '#fff'
  runText.style.animationName = 'null'
  runText.style.pointerEvents = 'none'

  runTextFunc(words, runText)
}