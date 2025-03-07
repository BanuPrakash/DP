import React, { useEffect, useState } from 'react'

// HOC, Decorator

function withHover(Element) {
    return props => {

        return <Element  {...props} />
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
            <img src={props.data} {...props} />
        </div>
    )
}

export default withHover(withLoading(DogImage,
    "https://dog.ceo/api/breeds/image/random"));