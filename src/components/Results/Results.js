import { useEffect, useState } from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import axiosInstance from '../../config/axiosInstance';
import styled from 'styled-components';
import { apikey } from '../../constants';

const Results = ({results}) => {
    const MyColResult = styled(Col)`
    height: 300px;
    margin: 10px;
    `
    const [trending,setTrending] = useState([])
    const getData = async () => {
        try {
          const response = await axiosInstance('/trending?api_key='+apikey);
          setTrending(response.data.data);
        } catch (error) {
          console.log(error);
        }
      }
    useEffect(()=>{
      getData();
    },[]);
    return(
        <Container>
            <Row>
                {
                results.length === 0?
                trending.length === 0?
                'Cargando'
                :
                trending.map((gif,index)=>{
                    return <MyColResult key={index} xs={3}>
                    <img src={gif.images.original.url} className="img-fluid h-100" alt={gif.title}/>
                    </MyColResult>
                })
                :
                results.map((gif,index)=>{
                  return <MyColResult key={index} xs={3}>
                  <img src={gif.images.original.url} className="img-fluid h-100" alt={gif.title}/>
                  </MyColResult>})
                }
            </Row>
        </Container>
    );
}

export default Results;