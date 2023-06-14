import React, {  useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './Add.css'

const Add = () => {
    let api_url='http://localhost:1000/Product'
    let [inputData,setInputData]=useState({pname:"",company:"",price:"",desc:""})
    let navigate=useNavigate();
    let handleChange=(event)=>{
        event.persist();
        let {name,value}=event.target;
        setInputData({...inputData,[name]:value})
    }
    let clickSubmit=(event)=>{
        event.preventDefault();
        console.log("submitted value :" , inputData);
        let data={
            pname:inputData.pname,
            company:inputData.company,
            price:inputData.price,
            desc:inputData.desc
        }
        axios.post(api_url,data).then(res=>{
            console.log("axios res :",res);
            alert("successfully done")
            navigate("/view")
        }).catch(err=>{
            console.log("axios err");
            alert(err.message)
        })
    }
  return (
    <>
    <h1 className='text-center'>Products Entries</h1>
    <div>
        <form onSubmit={clickSubmit}>
            <input type="text" name='pname' placeholder='enter product name' onChange={handleChange}  />
            <input type="text" name='company' placeholder='enter company name' onChange={handleChange}  />
            <input type="text" name='price' placeholder='enter price' onChange={handleChange}  />
            <input type="text" name='desc' placeholder='enter Description' onChange={handleChange}  />
            <br />
            <input type="submit" value='submit' />
        </form>
    </div>
    </>
  )
}

export default Add