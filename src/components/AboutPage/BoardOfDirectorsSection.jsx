/* eslint-disable react/prop-types */
/* eslint-disable eqeqeq */

import  {  useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import './scss/aboutpagescss.scss'
import { boardofDirectorsApi } from "../../api/boardOfDirectorsApi";
import { backendApi } from "../../config/config";
import axios from "axios";
const BoardOfDirectorsComp = (props) => {


  const [data,setData] = useState(boardofDirectorsApi)
  useEffect(() => {
    async function callapi() {
      try {
        const response = await axios.get(`${backendApi}/teamsget`);
        
        console.log(response.data);
        setData(response.data.data);
      } catch (error) {
        console.log(error);
      }
    }
    callapi();
  }, []);
  return (
    <>
      <div className="boardofdirectors">
        <div className="containermini">

        {
            data.map((item,key)=>{
              return(
              
          <Row key={key} className={`rightofdirector align-items-center ${key%2==1?"flex-row-reverse":""}`}>
            <Col
              lg={4} xs={12} sm={3} md={6}
              data-aos-delay="300"
              data-aos="fade-in"
              data-aos-duration="1000"
            >
              <div className="hexagon">
                <img src={item.image} alt="" />
              </div>
            </Col>
            <Col
              lg={8} xs={12} sm={9} md={6}
              data-aos-delay="300"
              data-aos={props.version=="mobile"?"fade-in":"fade-left"}
              data-aos-duration="1000"
              className="text-left"
            >
              <h6>{item.title}</h6>
              <p>{item.name}</p>
              <h5>
                {item.description}
              </h5>
            </Col>
          </Row>
                
              
              )
            })
          }
         <div className="div" style={{height:"80px"}}></div>
        </div>
     
       
        </div>
     
    </>
  );
};

export default BoardOfDirectorsComp;
