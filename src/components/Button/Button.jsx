import React from 'react';

const Button = ({children}) => {
    // console.log(props);
    // const {children} = props;
    
    return (
        <div className='text-center'>
            <button className="btn btn-error">{children}</button>
        </div>
    );
};

export default Button;