import React, { useEffect, useRef, useState } from 'react'
import Styles from './TextArea.module.scss'

// The component is a text area that can be expanded to show all text
// If you set the lines prop to 0, it will show all text without the expand button, and the container will adjust to the text height


function TextArea({text,lines}) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Initializing hooks for the expand feature

  // Reference to the text area element
  const textArea = useRef(null);
  // Variable to limit the number of lines
  const numberOfLines = {'--number-of-lines': lines}
  // Variable to show all lines
  const allLines = {'--number-of-lines': 'unset'}
  
  const linesLimit = lines == 0;


  useEffect(() => {
    // Checks if the text area has overflow 
    if (textArea.current) {
      const hasOverflow = textArea.current.scrollHeight > textArea.current.offsetHeight;
      // Sets the state to determine the expansion style
      setIsExpanded(!hasOverflow && !linesLimit);
      
    }
  }, [text]); 



  // All elements read the isExpanded state to apply the respective expansion style
  // If true, all elements except the text area disappear to show all text, and the container expands
  // The element's height is determined by the main page's layout section
  return (
    <div className={Styles['container']} 
    style={isExpanded ? {'height':'auto'} : {'height':'100%'} }>
      <p 
        className={Styles['text-area']} 
        ref={textArea}
        style={{
          ...(isExpanded ? numberOfLines : allLines ),
          ...(!isExpanded ? {'padding-bottom': '20%'} : {})
          
        }}
      >
        {text}
      </p>
      <div className={Styles['text-area__button-container']} style={{
        backgroundColor: isExpanded ? undefined : 'transparent',
        display: linesLimit ? 'none' : undefined,
      }}>
        <button className={Styles['text-area__button']} onClick={() => setIsExpanded(!isExpanded)} style={linesLimit ? {'display':'none'}: {}}>
          {isExpanded ? 'more' :'less' }
        </button>
        
      </div>
    </div>
  )
}

export default TextArea