import { Container, HStack } from '@chakra-ui/react';
import axios from 'axios';
import Loader from './Loader';
import { useEffect, useState } from 'react';
import ErrorComponent from "./ErrorComponent";

import { server } from '../index';
import ExchangeCard from './ExchangeCard';

const Exchange = () => {
  const [exchange, setExchange] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err,setErr]=useState(false);

  useEffect(() => {
    const FetchData = async () => {
        try{
        const { data } = await axios.get(`${server}/exchanges`);
        setExchange(data);
        setLoading(false);
        }
        catch(error){
            setErr(true);
            setLoading(false);
            console.log(err);
            console.log(error);
        }
      };
    FetchData();
  }, []);


  if(err){
    return <ErrorComponent />
  }

  return (
    <Container maxW={'container.xl'}>
      {loading ? <Loader /> : <>
      <HStack wrap={"wrap"} justifyContent={"center"}>
      {
        exchange.map((item)=>(
            <ExchangeCard 
            img={item.image}
            name={item.name}
            rank={item.trust_score_rank} 
            url={item.url}
            />
        ))
      }
      </HStack>
      </>}
    </Container>
  );
};
export default Exchange;
