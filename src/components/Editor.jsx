import React, { useState } from 'react'
import "codemirror/lib/codemirror.css"
import "codemirror/theme/material.css"
import "codemirror/mode/xml/xml"
import "codemirror/mode/css/css"
import "codemirror/mode/javascript/javascript"
import { Controlled as ControlledEditor } from 'react-codemirror2'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCompressAlt, faExpandAlt} from '@fortawesome/free-solid-svg-icons'

const Editor = (props) => {
  const {
    displayName,
    language,
    value,
    onChange
  } = props;
  const [open, setOpen] = useState(true);
  function handleChange(editor, data, value){
    onChange(value);
  }
  function handleClick(){
    setOpen(prevOpen => !prevOpen);
  }
  return (
    <div className={`editor-container ${open ? '' : "collapsed"}`}>
      <div className="editor-title">
        {displayName}
        <button type="button" onClick={handleClick}>
          <FontAwesomeIcon
            icon = {open ? faCompressAlt : faExpandAlt}
          />
        </button>
      </div>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className='code-mirror-wrapper'
        options={{
          theme: 'material',
          lineWrapping: true,
          lint: true,
          mode: language,
          lineNumbers: true
        }}
      />
    </div>
  )
}

export default Editor