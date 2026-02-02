import React, { useEffect, useRef, useState } from 'react'
import Styles from './TextArea.module.scss'


function TextArea({text,sectionHeight}) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Initializing hooks for the expand feature

  // Reference to the text area element
  const textArea = useRef(null);
  // Variable to limit the number of lines
  const numberOfLines = {'--number-of-lines': 8}
  // Variable to show all lines
  const allLines = {'--number-of-lines': 'unset'}
  


  useEffect(() => {
    // Checks if the text area has overflow 
    if (textArea.current) {
      const hasOverflow = textArea.current.scrollHeight > textArea.current.offsetHeight;
      // Sets the state to determine the expansion style
      setIsExpanded(!hasOverflow);
      
    }
  }, [text]); 



  // All elements read the isExpanded state to apply the respective expansion style
  // If true, all elements except the text area disappear to show all text, and the container expands
  // The element's height is determined by the main page's layout section
  return (
    <div className={Styles['container']} 
    style={isExpanded ? {'height':'auto'} : {'height':'100%'}}>
      <p 
        className={Styles['text-area']} 
        ref={textArea}
        style={{
          ...(isExpanded ? allLines : numberOfLines),
          ...(isExpanded ? {} : { 'padding-bottom': '30%' })
        }}
      >
        {text}
      </p>
      <div 
        className={Styles['text-area__button-container']}
        style={isExpanded ? {} : {'background': 'transparent'}}
      >
        <button className={Styles['text-area__button']} onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? 'more' :'less' }
        </button>
      </div>
    </div>
  )
}

export default TextArea