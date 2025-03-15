import React from 'react';

const Events = () => {
    const Alert =()=>{
        alert("Welcome to React Js ");
    }
    const countryNames = (param)=> {
        alert("Your country is:"+param);
    }
    const onMouseEnter = ()=> {
        console.log("Mouse is hovering on div ");
    }
    const onMouseLeave = ()=> {
        console.log("Mouse is leaving  div ");
    }
    const inputData =(param)=>{
        console.log("Data:"+param)
    }
    return (
        <div>
            <div className="row">
                <div className="col-md-12">
                    {/* There are two ways to show click event using function.
                    This is first way to show click event using function. */}
                    <button className='btn btn-sm btn-primary' onClick={Alert}>Click Alert </button>

                </div>
            </div>
            <div>
                <div className="col-md-12">
                    {/* This is second way to show click event using function. */}
                    <button className='btn btn-sm btn-primary' onClick={()=>Alert()}> Alert </button>
                </div>
            </div>
            {/* Here is another button to show click event using function. In this case we are passing country name as parameter to function. */}
            {/* That e means event  passed  as parameter to function. */}
            <div className='row'>
                <div className="col-md-12">
                    <select className="form-control" id=""  onChange={(e)=>countryNames(e.target.value)}>
                        <option value="India">India</option>
                        <option value="USA">Usa</option>
                        <option value="Srilanka">Srilanka</option>
                        <option value="Australia">Australia</option>
                        
                    </select>
                </div>
            </div>
            <div>
                {/* Here is Mouse Hover event using function. When you hover on div then it will show message in console. */}
                <div className="col-md-12 bg-success" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                    My div area
                </div>
            </div>
            <div className='row'>
                <div className="col-3">
                    <input type="text"  onChange={(e)=> inputData(e.target.value)} />
                </div>
            </div>
        </div>
    );
};

export default Events;