import React, { memo ,useEffect } from 'react'

const Item = memo(({ user, handleDelete }) => {

    useEffect(() => {
        console.log("Item render");
    });

    return (
        <li>
            { user.name }
            <button onClick={() => handleDelete(user.id)}>Delete</button>
        </li>
    )
})

export default Item;