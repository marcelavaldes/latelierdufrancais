import React from "react"
import Slider from "rc-slider"

import "rc-slider/assets/index.css"

export default ({ title, description, marks, onChange }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      <Slider
        min={1}
        max={Object.keys(marks).length}
        marks={marks}
        step={null}
        onChange={onChange}
        defaultValue={1}
      />
    </div>
  )
}
