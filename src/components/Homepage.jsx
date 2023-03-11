import React from 'react'
import millify from 'millify'
import {Typography, Row , Col , Statistic} from 'antd'
import {Link} from 'react-router-dom';


const { Title } = Typography;


const Homepage = () => {
  return (
      <>
       <Title level={2} className='heading'>
Global Crypto States
       </Title>
       <Col level={2} className='col'></Col>
      </>
    )
}

export default Homepage