import React from 'react';

function AddUser({onAdd}) {

    const handleOnSubmit = (e) => {
      e.preventDefault();
      onAdd(e.target.name.value);
      e.target.name.value = "";
    }

    return (
        <div className="form-container">
            <form className="form" onSubmit={handleOnSubmit}>

                <h3>Add User</h3>
                <div className="container list">
                    <input placeholder="Name" name="name"/>
                    <button className="add-btn" onSubmit={handleOnSubmit}>+</button>
                </div>
            </form>
        </div>
    );
}

export default AddUser;