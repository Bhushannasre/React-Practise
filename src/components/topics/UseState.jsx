import React from 'react';


const UseState = () => {
    const [languageName, setLanguageName] = React.useState('English');
    const [productPrice, setProductPrice] = React.useState(1000);
    const [isLogin, setIsLogin] = React.useState(false);
    const [studentObject, setStudentObject] = React.useState({ name: 'Bhushan', age: '26', contact:'8788571169'});
    const [cityList, setList] = React.useState(['Pune', 'Mumbai', 'Nagpur']);
   

    const studentObjectp=()=>{
        setStudentObject({ name: 'Brock', age: '26', contact:'9556686666'});
    }
        const addNewCity = () => {
            setList(prevArray => [...prevArray,'Thane'])
        }
    return (
        <div>
            Here is the language name: {languageName}. Setting it to {languageName === 'English' ? 'Spanish' : 'English'}.<br></br>
            <div className="row">
                <div className="col-3">
                    <p>{languageName}</p>

                </div>
            </div>
            <div>
                <div>
                    <button className='btn btn-success' onClick={() => setLanguageName('Spanish')}>Change button</button>
                </div>
            </div>
            <div className="row">
                <div className="col-3">
                    <p>{productPrice}</p>

                </div>
            </div>
            <div>
                <div>
                    Here is the product price: {productPrice}. Setting it to <br />
                    <button className='btn btn-success' onClick={() => setProductPrice('2000')}>Change Price</button>
                </div>
            </div>
            <div className="row">
                <div className="col-3">
                    <p>{studentObject.name}, {studentObject.age}, {studentObject.contact}</p>

                </div>
            </div>
            <div>
                <div>
                    
                    <button className='btn btn-success' onClick={() => studentObjectp()}>Change Name</button>
                </div>
            </div>
            <div className='row'>
                <div className='col-3'>
                    <p>{isLogin && 'You are logged in'}</p>
                    <p>{!isLogin && 'login fail'}</p>
                </div>
            </div>
            <div className='row'>
                <div className='col-6'>
                    <button className='btn btn-success' onClick={() => setIsLogin()}>Change Login</button>
                </div>
            </div>
            Here is the state of the component. <br />
            <div className='row'>
                <div className='col-3'>
                   <p>{cityList}</p>
                </div>
            </div>
            <div className='row'>
                <div className='col-3'>
                           <button className='btn btn-success' onClick={() => addNewCity()}>Add city</button>
                </div>
            </div>
        </div>
    );
};

export default UseState;