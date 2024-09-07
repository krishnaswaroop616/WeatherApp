import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';

export default function InfoBox({info}){
    let cardstyle={border:"2px solid black",borderRadius:"15px",margin:"auto",marginTop:"20px"};
    const initialUrl="https://media.istockphoto.com/id/2152765847/photo/very-prominent-storm-clouds-gather-over-a-lush-green-garden.webp?a=1&b=1&s=612x612&w=0&k=20&c=tf6nKvEXzUef8qo25eXudhMC8XHakuc0hLZ84cDyVSY="
    const HOT_URL="https://media.istockphoto.com/id/1312596921/photo/summer-noon-sun.webp?a=1&b=1&s=612x612&w=0&k=20&c=pOpURENydDZZMKvr5BXEs2d-xv8_TaOu7TQ7M85jweo=";
    const COLD_URL="https://media.istockphoto.com/id/1181599019/photo/empty-panoramic-winter-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=E8kZ7W9nBf9gnsz9l9LBIiDs_2jiOPcWlkaMQATFEvI=";
    const RAIN_URL="https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=sw_CRZcGopaGHDWqtT1M8y64k5uCcq-nro55Bw3YzyQ=";
    return (
        <div className="InfoBox">
            <Card sx={{ maxWidth: 345 }} style={cardstyle}>
      <CardMedia
        sx={{ height: 160 }}
        image={info.humidity>85?RAIN_URL:(info.temp>20?HOT_URL:COLD_URL)}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          <div>Temperature : {info.temp}&deg;C</div>
          <div> Humidity : {info.humidity}%</div>
          <p>Min Temp : {info.tempMin} &deg;C</p>
          <p>Max Temp : {info.tempMax} &deg;C</p>
          <p>The weather can be described as <i>{info.weather}</i></p>
        </Typography>
      </CardContent>
    </Card>
    </div>
    )
}