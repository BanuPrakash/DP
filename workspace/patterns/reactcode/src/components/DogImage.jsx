import React, { useEffect, useState } from 'react'

// HOC, Decorator

function withHover(Element) {
    return props => {
        let [hovering, setHovering] = useState();

        return <Element
            hovering={hovering}
            {...props}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
        />
    }
}
// HOC, decorator
function withLoading(Element, url) {

    return props => {
        let [data, setData] = useState();
        useEffect(() => {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    setData(data.message)
                })
        }, []);
        if (!data) {
            return <div>Loading...</div>
        } else {
            return <Element data={data} {...props} />
        }
    }
}

function DogImage(props) {
    return (
        <div>
            {
                props.hovering && <div> Hovering </div>
            }
            <img src={props.data} {...props} />
        </div>
    )
}

export default withHover(withLoading(DogImage,
    "https://dog.ceo/api/breeds/image/random"));