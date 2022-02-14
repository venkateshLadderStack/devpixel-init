import React, { useEffect, useState } from "react"
import { useWindowScroll } from "react-use"

import "./backtotop.scss"

const BackToTopItem = () => {
  const { y: pageYOffset } = useWindowScroll()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (pageYOffset > 400) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  }, [pageYOffset])

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" })

  if (!visible) {
    return false
  }
  return (
    <div
      className="scroll-to-top cursor-pointer float-right"
      onClick={scrollTop}
    >
      <svg
        aria-hidden="true"
        data-prefix="fas"
        data-icon="chevron-up"
        className="chevron-up_svg__svg-inline--fa chevron-up_svg__fa-chevron-up chevron-up_svg__fa-w-14"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path
          fill="currentColor"
          d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"
        />
      </svg>
    </div>
  )
}
export default BackToTopItem
