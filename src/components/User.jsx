import React from 'react';

function User({id, name, onDelete}) {

    const handleDelete = () => {
      onDelete(id)
    }

    return (
        <div className="list">
            <span>{name}</span>
            <span>
                <button className="btn" onClick={handleDelete}>X</button>
            </span>
        </div>
    );
}

export default User;