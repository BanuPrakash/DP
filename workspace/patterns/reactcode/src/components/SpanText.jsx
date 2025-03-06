import React from 'react'

export default function SpanText({text, ...props}) {
  return (
    <span {...props}>
        {text}
    </span>
  )
}
