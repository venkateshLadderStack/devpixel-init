import React, {useEffect} from 'react'

import styled from "styled-components"
import * as basicScroll from "basicscroll"

const LayerOne = styled.div`
  background-image: url(${props =>
    props.image ? props.image : ""}) !important;
`
const LayerTwo = styled.div`
  background-image: url(${props =>
    props.image ? props.image : ""}) !important;
`
const LayerThree = styled.div`
  background-image: url(${props =>
    props.image ? props.image : ""}) !important;
`
const LayerFour = styled.div`
  background-image: url(${props =>
    props.image ? props.image : ""}) !important;
`
const LayerFive = styled.div`
  background-image: url(${props =>
    props.image ? props.image : ""}) !important;
`
const LayerSix = styled.div`
  background-image: url(${props =>
    props.image ? props.image : ""}) !important;
`
const LayerSeven = styled.div`
  background-image: url(${props =>
    props.image ? props.image : ""}) !important;
`
const LayerEight = styled.div`
  background-image: url(${props =>
    props.image ? props.image : ""}) !important;
`
const MobileLayer = styled.div`
  background-image: url(${props =>
    props.image ? props.image : ""}) !important;
`
const DesktopParallex = props => {
    const {layerOne, layerTwo, layerThree, layerFour, layerFive, layerSix, layerSeven } = props

    useEffect(()=>{
        document.querySelectorAll(".scene").forEach(elem => {
            const modifier = elem.getAttribute("data-modifier")
      
            basicScroll
              .create({
                elem: elem,
                from: 0,
                to: 519,
                direct: true,
                props: {
                  "--translateY": {
                    from: "0",
                    to: `${10 * modifier}px`,
                  },
                },
              })
              .start()
          })
    })

  return (
    <div id="parallax">
      <LayerOne
        className="scene"
        data-modifier="30"
        image={
            layerOne
        }
      />
      <LayerTwo
        className="scene"
        data-modifier="18"
        image={
            layerTwo
        }
      />

      <LayerThree
        className="scene"
        data-modifier="12"
        image={
          layerThree
        }
      ></LayerThree>
      <LayerFour
        className="scene"
        data-modifier="8"
        image={
          layerFour
        }
      />
      <LayerFive
        className="scene"
        data-modifier="6"
        image={
          layerFive
        }
      />
      <LayerSix
        className="scene"
        data-modifier="0"
        image={
          layerSix
        }
      />
      <LayerSeven
        className="scene"
        data-modifier="0"
        image={
          layerSeven
        }
      />
    </div>
  )
}

export default DesktopParallex