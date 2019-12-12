import React from "react"
import Checkbox from "rc-checkbox"
import "rc-checkbox/assets/index.css"

const Radio = ({ title, modo, onChange }) => (
  <>
    <h3>{title}</h3>
    <div>
      <p>
        <label>
          <Checkbox
            defaultCheckedchecked
            onChange={onChange}
            value={1}
            checked={modo === 1}
          />
          &nbsp; Modo 1
        </label>
      </p>
    </div>

    <div>
      <p>
        <label>
          <Checkbox onChange={onChange} value={2} checked={modo === 2} />
          &nbsp; Modo 2
        </label>
      </p>
    </div>

    <div>
      <p>
        <label>
          <Checkbox onChange={onChange} value={3} checked={modo === 3} />
          &nbsp; Modo 3
        </label>
      </p>
    </div>
  </>
)

export default Radio
