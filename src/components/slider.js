import React from "react"
import Slider from "rc-slider"

import "rc-slider/assets/index.css"

export default ({ title, marks, onChange }) => {
  return (
    <div style={{ margin: "50px auto" }}>
      <h3>{title}</h3>

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
