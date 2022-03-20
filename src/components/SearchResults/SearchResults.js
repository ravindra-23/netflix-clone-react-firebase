import React, { useState, useEffect } from 'react'
import { Container, Inner, Text, Valid, Results, QueryText } from './styles'
import { Card, BrowserHeader } from '../index'
import ax from '../../Axios/axios'
import axios from 'axios'
import requests from '../../Axios/requests'
import { useParams } from 'react-router-dom'

const SearchResults = () => {
  const { query } = useParams();
  const [searchResultData, setSearchResultData] = useState([]);
  const [noResultFound, setNoResultFound] = useState(false);
  const limit = 15;
  console.log(query)

  useEffect(() => {
    const fetchData = async () => {
      
        await axios.all([
            ax.get(`${requests.fetchSearchResultMovies}${query}&page=1`),
            ax.get(`${requests.fetchSearchResultSeries}${query}&page=1`),
            ax.get(`${requests.fetchSearchResultMovies}${query}&page=2`),
            ax.get(`${requests.fetchSearchResultSeries}${query}&page=2`),
            ax.get(`${requests.fetchSearchResultMovies}${query}&page=3`),
            ax.get(`${requests.fetchSearchResultSeries}${query}&page=3`),
        ])
        .then(
            axios.spread(
                (request1, request2, request3, request4, request5, request6) => {
                    if(request1.data.results?.length === 0 &&
                        request2.data.results?.length === 0 &&
                        request3.data.results?.length === 0 &&
                        request4.data.results?.length === 0 &&
                        request5.data.results?.length === 0 &&
                        request6.data.results?.length === 0
                      ) {
                        setNoResultFound(true)
                    } else {
                          const data1 = request1.data.results.filter(
                            (item) => item?.backdrop_path
                          );
                          const data2 = request2.data.results.filter(
                            (item) => item?.backdrop_path
                          );
                          const data3 = request3.data.results.filter(
                            (item) => item?.backdrop_path
                          );
                          const data4 = request4.data.results.filter(
                            (item) => item?.backdrop_path
                          );
                          const data5 = request5.data.results.filter(
                            (item) => item?.backdrop_path
                          );
                          const data6 = request6.data.results.filter(
                            (item) => item?.backdrop_path
                          );
                        
                          if (
                            data1?.length === 0 &&
                            data2?.length === 0 &&
                            data3?.length === 0 &&
                            data4?.length === 0 &&
                            data5?.length === 0 &&
                            data6?.length === 0
                            ) {
                                setNoResultFound(true)
                            } else {
                                setNoResultFound(false);
                                const Data = [...data1, ...data2, ...data3, ...data4, ...data5, ...data6]
                                setSearchResultData(Data)
                            }
                    }
                }
            )
        )
        .catch(() => {
            setNoResultFound(true)
        })
    } 

    if(query?.length > 50) {
        setNoResultFound(true);
      } else {
        fetchData();
      }
      return () => {
        //clean up
        setNoResultFound(false);
        setSearchResultData([]);
      }  

  },[query])

  return (
    <>
        <BrowserHeader isSearch />

        {noResultFound ? (
            <Container>
                <Inner>
                    <Text>Your search for<QueryText>"{query}"</QueryText>did not have any matches.</Text>
                    <Valid>Enter Valid Movie or Series Name.</Valid>
                </Inner>
            </Container>
        ) : (
            <Results>
                {searchResultData &&
                    <>
                        <Card 
                            isSearch 
                            SearchResult={searchResultData?.slice(0, limit)} 
                        />
                        <Card
                            isSearch
                            SearchResult={searchResultData?.slice(limit, 2 * limit)}
                        />
                        <Card
                            isSearch
                            SearchResult={searchResultData?.slice(2 * limit, 3 * limit)}
                        />
                        <Card
                            isSearch
                            SearchResult={searchResultData?.slice(3 * limit, 4 * limit)}
                        />
                        <Card
                            isSearch
                            SearchResult={searchResultData?.slice(4 * limit, 5 * limit)}
                        />
                        <Card 
                            isSearch 
                            SearchResult={searchResultData?.slice(5 * limit)} 
                        />
                    </>
                }
            </Results>
        )}
    </>
  )
}

export default SearchResults