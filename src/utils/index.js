import meow from "../sounds/meow.wav"
import purr from "../sounds/purr.wav"
import trill from "../sounds/trill.wav"

const sounds = [meow, purr, trill]

export const start = () => {
  const cat = sounds[Math.floor(Math.random() * sounds.length)]

  const audio = new Audio(cat)

  audio.play()
}
