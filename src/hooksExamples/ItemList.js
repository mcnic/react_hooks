import React, { useState, useEffect } from 'react'

export default function ItemList({ getItems }) {
    const [items, setItems] = useState([])

    useEffect(() => {
        setItems(getItems())
        console.log('render');
    }, [getItems])

    return (
        <ul>
            { items.map((i, idx) => <li key={idx}>{i}</li>)}
        </ul>
    )
}
