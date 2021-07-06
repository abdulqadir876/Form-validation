import React from 'react';
import * as yup from 'yup';
import Schema from './Valid';

const Validation =  () => {
    const createUser = (event) =>{
        event.preventDefault();
        let formData = {
            name: event.target[0].value,
            password: event.target[1].value,
        }
        
    }
    return (

        <div className="container" style={{width:'300px'}}>
            <h2>Form Validation</h2>
            
            <form onSubmit={createUser} className="form-group mt-5">
                <div className="mt-4">
                    <input type="text" className="form-control p-4" placeholder="Username" />
                </div>
                <div className="mt-4">
                    <input type="text" className="form-control p-4"  placeholder="Password" />
                </div>
                <div className="d-flex justify-content-between mt-2">
                   <div>
                        <input type="checkbox" /> Remember me
                   </div>
                   <div>
                       <a href="#">Forget</a>
                   </div>
                </div>
                <div className="mt-4">
                    <button className="btn btn-primary">Login</button>
                </div>
            </form>

        </div>
    );
}

export default Validation