import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchIndicesData } from 'store/actions/IndicesDataActions';
import axios from 'boot/axios';

const Indices = () => {
  const dispatch = useDispatch();
  const indicesData = useSelector((state) => state.indicesData.indicesData);
  const loading = useSelector((state) => state.indicesData.loading);
  const error = useSelector((state) => state.indicesData.error);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseDJI = await axios.get('http://localhost:8080/indices?symbol=DJI');
        const responseNDX = await axios.get('http://localhost:8080/indices?symbol=NDX');
        const responseSPX = await axios.get('http://localhost:8080/indices?symbol=SPX');
        dispatch(fetchIndicesData([responseDJI.data, responseNDX.data, responseSPX.data]));
      } catch (error) {
        console.error('Error fetching Indices Data:', error);
      }
    };
    fetchData();
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>DJI</h1>
      <p>Last: {indicesData[0]?.last}</p>
      <p>Change: {indicesData[0]?.change}</p>
      <p>Change %: {indicesData[0]?.changepct}</p>

      <h1>NDX</h1>
      <p>Last: {indicesData[1]?.last}</p>
      <p>Change: {indicesData[1]?.change}</p>
      <p>Change %: {indicesData[1]?.changepct}</p>

      <h1>SPX</h1>
      <p>Last: {indicesData[2]?.last}</p>
      <p>Change: {indicesData[2]?.change}</p>
      <p>Change %: {indicesData[2]?.changepct}</p>
    </div>
  );
};

export default Indices;
