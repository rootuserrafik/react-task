import React from 'react'

function TagList({TagName, TagItemClicked}) {
  return (
    <li onClick={TagItemClicked}>{TagName}</li>
  )
}

export default TagList