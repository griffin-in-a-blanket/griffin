import React, {useEffect} from "react"

const Griffin = () => {
  useEffect(() => {
    const rEye = document.querySelector(".r-eye")
    const rPupil = document.querySelector(".r-pupil")
    const lPupil = document.querySelector(".l-pupil")
    
    if (rEye) {
      const px = rPupil.getBoundingClientRect().width
      const py = rPupil.getBoundingClientRect().height
      const ex = rEye.getBoundingClientRect().width
      const ey = rEye.getBoundingClientRect().height
  
      const xMovement = (ex - px) / 2
      const yMovement = (ey - py) / 2
  
      const followMouse = e => {
        const mouseX = e.clientX / document.body.clientWidth
        const mouseY = e.clientY / document.body.clientHeight
        const x = mouseX * 2 * xMovement
        const y = mouseY * 2 * yMovement
  
        rPupil.style.transform =
          "translateX(" + x + "px)" + "translateY(" + y + "px)"
        lPupil.style.transform =
          "translateX(" + x + "px)" + "translateY(" + y + "px)"
      }
  
      document.addEventListener("mousemove", followMouse, false)
    }
  })
  
  return (
    <div
      className="griffin"
      role="img"
      alt="a drawing of griffin with eyes that follows your mouse"
    >
      <div className="r-eye">
        <div className="r-pupil" />
      </div>
      <div className="l-eye">
        <div className="l-pupil" />
      </div>
    </div>
  )
}

export default Griffin
