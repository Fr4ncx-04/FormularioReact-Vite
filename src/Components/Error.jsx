import React from 'react';

const Error = (props) => {
    return (
        <div className="error" role="alert">
            <strong>Error: </strong>
            {props.mensaje}
        </div>
    );
}

export default Error;
