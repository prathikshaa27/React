import React from 'react'

function ContentComponent({render}) {
    const data = "prathi";
  return (
    <div>
        <h1>Content Component</h1>
        {render(data)}
    </div>

  )
}

export default ContentComponent;