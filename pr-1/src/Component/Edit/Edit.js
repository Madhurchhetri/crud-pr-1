import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  let { edId } = useParams();
  let [data, setData] = useState({
    pname: "",
    company: "",
    price: "",
    desc: "",
  });
  let navigate=useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost:1000/Product/${edId}`)
      .then((res) => {
        console.log("edit res", res);
        setData(res.data)
      })
      .catch((err) => {
        console.log("edit err", err);
      });
  }, [setData, edId]);
  let clickSubmit=(event)=>{
        event.preventDefault();
        console.log("submitted value :",data);
        axios.put(`http://localhost:1000/Product/${data.id}`,data).then((res)=>{
            alert("successfully update");
            console.log("successfully update",res);
            navigate("/view")
        }).catch((err)=>{
            alert("updataion failed")
            console.log("updatation error :",err);
        })
  }
  return (
    <div>
      <form onSubmit={clickSubmit}>
        <input
          type="text"
          name="pname"
          placeholder="enter product name"
          value={data.pname}
          onChange={(event)=>
          setData((prev)=>({...prev,pname:event.target.value}))}
        />
        <input
          type="text"
          name="company"
          placeholder="enter company name"
          value={data.company}
          onChange={(event)=>
          setData((prev)=>({...prev,company:event.target.value}))}
        />
        <input
          type="text"
          name="price"
          placeholder="enter price"
          value={data.price}
          onChange={(event)=>
          setData((prev)=>({...prev,price:event.target.value}))}
        />
        <input
          type="text"
          name="desc"
          placeholder="enter Description"
          value={data.desc}
          onChange={(event)=>
          setData((prev)=>({...prev,desc:event.target.value}))}
        />
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default Edit;
