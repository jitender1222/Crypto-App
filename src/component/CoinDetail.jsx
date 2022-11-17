import {
    Badge,
  Box,
  Container,
  HStack,
  Image,
  Progress,
  Radio,
  RadioGroup,
  Stat,
  StatArrow,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
  VStack,
} from '@chakra-ui/react';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { server } from '..';
import ErrorComponent from './ErrorComponent';
import Loader from './Loader';


const CoinDetail = () => {
  const [coin, setCoin] = useState({});
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);
  const [currency, setCurrency] = useState('inr');
  const params = useParams();

  const currencySymbol =
    currency === 'inr' ? '₹' : currency === 'eur' ? '€' : '$';

  const fetchCoinData = async () => {
    try {
      const { data } = await axios.get(`${server}/coins/${params.id}`);
      console.log(data);
      setCoin(data);
      setLoading(false);
    } catch (error) {
      setErr(true);
      loading(false);
    }
  };

  useEffect(() => {
    fetchCoinData();
  }, [params.id]);

  if (err) return <ErrorComponent message={'Error while fetching Coin'} />;

  return (
    <Container maxW={'container.xl'}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Box width={'full'} borderWidth={'1'}></Box>

          <RadioGroup value={currency} onChange={setCurrency} p={'8'}>
            <HStack>
              <Radio value={'inr'}>INR</Radio>
              <Radio value={'usd'}>USD</Radio>
              <Radio value={'eur'}>EUR</Radio>
            </HStack>
          </RadioGroup>

          <VStack spacing={'4'} p={'16'} alignItems={'flex-start'}>
            <Text fontSize={'small'} alignSelf={'center'} opacity={'0.7'}>
              Last Updated on{' '}
              {Date(coin?.market_data?.last_updated).split('G')[0]}
            </Text>

            <Image
              src={coin?.image?.large}
              w={'16'}
              h={'16'}
              objectFit={'contain'}
            />

            <Stat>
              <StatLabel>{coin.name}</StatLabel>
              <StatNumber>
                {currencySymbol}
                {coin?.market_data?.current_price[currency]}
              </StatNumber>
              <StatHelpText>
                <StatArrow
                  type={
                    coin.market_data?.price_change_percentage_24h > 0
                      ? 'increase'
                      : 'decrease'
                  }
                />
                {coin.market_data?.price_change_percentage_24h}
              </StatHelpText>
            </Stat>

            <Badge fontSize={"2xl"} bgColor={"blackAlpha.900"} color={"white"}>#{coin.market_cap_rank}</Badge>

            <CustomerBar 
            high={`${currencySymbol}${coin?.market_data?.high_24h[currency]}`}
            low={`${currencySymbol} ${coin?.market_data?.low_24h[currency]}`} 
            />
            
            <Box w={"full"} p="4">
                <Item title="Max Supply" value={coin.market_data?.max_supply} />
                <Item title="Circulating Supply" value={coin.market_data?.circulating_supply} />
                <Item title="Market Cap" value={`${currencySymbol}${coin.market_data?.market_cap[currency]}`} />
                <Item title="All time low" value={`${currencySymbol}${coin.market_data?.atl[currency]}`} />
                <Item title="All time high" value={`${currencySymbol}${coin.market_data?.ath[currency]}`} />
            </Box>
          </VStack>
          
        </>
      )}
    </Container>
  );
};


const Item=({title,value})=>(
    <HStack justifyContent={"space-between"}>
        <Text fontFamily={"sans-serif"} fontWeight={"semibold"}>{title}</Text>
        <Text fontWeight={"semibold"}>{value}</Text>
    </HStack>
)

const CustomerBar=({high,low})=>(
    <VStack w={"full"}>
        <Progress value={50} colorScheme={"teal"} w={"full"}/>
        <HStack justifyContent={"space-between"} w={"full"}>
            <Badge children={low} colorScheme={"red"} />
            <Text fontSize={"sm"}>24H Range</Text>
            <Badge children={high} colorScheme={"green"}></Badge>
        </HStack>
    </VStack>
)

export default CoinDetail;
