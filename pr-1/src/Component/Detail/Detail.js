import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import { Link, useNavigate, useParams } from 'react-router-dom'

const Detail = () => {
    let{dtId}=useParams();
    let[data,setData]=useState([]);
    let navigate = useNavigate();
    useEffect(()=>{
        axios.get(`http://localhost:1000/Product/${dtId}`).then(res=>{
            console.log("axio res :",res);
            setData(res.data)
        }).catch(err=>{
            console.log("axios err :",err);
        })
    },[setData,dtId])
    let deleteItem=(id)=>{
        axios.delete(`http://localhost:1000/Product/${id}`).then(res=>{
            alert("delete successfully")
            console.log("delete ",res);
            navigate("/view");
        }).catch(err=>{
            alert("not done");
            console.log("delete err", err);
        })
    }
  return (
    <div>
        <Container>
            <Row>
                <Col>
                    <h1>{data.pname}</h1>
                    <h3>{data.company}</h3>
                    <p><strong>Price :</strong>{data.price}</p>
                    <p><strong>Description :</strong>{data.desc} </p>
                    <br />
                    <button onClick={()=>{deleteItem(data.id)}}>Delete</button>
                    <Link to={`/edit/${data.id}`}>
                        <button>Edit</button>
                    </Link>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Detail