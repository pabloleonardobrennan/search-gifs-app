import { Container, Row , Col } from "react-bootstrap";
import styled from 'styled-components';
import SearchBar from "./components/Searchbar/SearchBar";
import Results from "./components/Results/Results";
import { useState,useEffect } from "react";
import axiosInstance from "./config/axiosInstance";
import { apikey } from "./constants";

const MyCol = styled(Col)`
height: 100vh;
`

const App = () => {
  const [value,setValue] = useState('')
  const [results,setResults] = useState([])
  const handleChange = (e) => {
    setValue(e.target.value);
  }
  const getSearch = async (value) => {
    try {
      const response = await axiosInstance(`/search?api_key=${apikey}&q=${value}`)
      setResults(response.data.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    getSearch(value)
  },[value])
  return (
    <Container fluid>
      <Row>
        <MyCol xs={12} md={3} className='bg-black d-flex align-items-center justify-content-center'>
          <SearchBar value={value} handleChange={handleChange}/>
        </MyCol>
        <MyCol xs={12} md={9} className=''>
          <Results results={results}/>
        </MyCol>
      </Row>
    </Container>
  );
}

export default App;