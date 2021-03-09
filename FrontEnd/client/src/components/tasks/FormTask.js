import React from 'react';

const FormTask = () => {
    return ( 
        <div className="form">
            <form>
                <div className="container-input">
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Enter new task..."
                        name="name"
                    />
                </div>

                <div className="container-input">
                    <input
                        type="submit"
                        className="btn btn-primary btn-submit btn-block-small"
                        value="Add Task"
                    />
                </div>
            </form>
        </div> 
      
    );
}
 
export default FormTask;