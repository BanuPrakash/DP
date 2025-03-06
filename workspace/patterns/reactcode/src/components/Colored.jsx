import React from 'react'

export default function Colored({ children }) {
    return React.cloneElement(children, {
        style: {
            color: 'brown',
            backgroundColor: 'khaki'
        },
        onClick: () => alert("Clicked!")
    })
}
