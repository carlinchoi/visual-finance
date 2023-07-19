import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchStockDataNews } from 'store/actions/stockDataPriceActions';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';

const HomeNews = () => {
  const dispatch = useDispatch();
  const stockDataNews = useSelector((state) => state.stockDataPrice.stockDataNews);
  const loading = useSelector((state) => state.stockDataPrice.loading);
  const error = useSelector((state) => state.stockDataPrice.error);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/news');
        const data = response.data;
        dispatch(fetchStockDataNews(data));
      } catch (error) {
        console.error('Error fetching financial news: ', error);
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

  const formatDate = (dateString) => {
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric'
    };

    const date = new Date(dateString);
    return date.toLocaleString('en-US', options);
  };

  return (
    <Grid container spacing={2}>
      {stockDataNews?.map((item) => (
        <Grid item xs={12} sm={6} md={6} lg={6} key={item.uuid}>
          <Card sx={{ height: '100%' }}>
            <CardActionArea>
              <div style={{ position: 'relative' }}>
                <CardMedia component="img" height="250" image={item.image_url} alt="Article Image" />
                <Typography
                  variant="h6"
                  component="div"
                  style={{
                    position: 'absolute',
                    top: 8,
                    left: 8,
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    color: '#fff',
                    padding: '4px 8px',
                    borderRadius: 4
                  }}
                >
                  {item.source}
                </Typography>
              </div>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {formatDate(item.published_at)}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default HomeNews;
