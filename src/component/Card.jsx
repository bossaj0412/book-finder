// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import './main.css'

// export default function MediaCard({info}) {
//     let thumbnail=info.volumeInfo.imageLinks && info.volumeInfo.imageLinks.smallThumbnail;
//     let title=info.volumeInfo.title
//     let description=info.volumeInfo.description
//   return (
//     <Card sx={{ maxWidth: 345, bg:"white" }} className='cardBox'>
//       <CardMedia> <img src={thumbnail} alt="" /> </CardMedia>
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div" className='ccc'>
//           {title}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           {description}
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">Share</Button>
//         <Button size="small">Learn More</Button>
//       </CardActions>
//     </Card>
//   );
// }

import React from 'react'
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css'
// ..
AOS.init({
    offset:200,
    delay: 300,
    duration: 1000
});
const MediaCard = ({info}) => {

        let thumbnail=info.volumeInfo.imageLinks && info.volumeInfo.imageLinks.smallThumbnail;
    let title=info.volumeInfo.title
    // let description=info.volumeInfo.description

  return (
    <div data-aos="fade-in " className='cardBox '>

        <div className="cardImage">
            <img src={thumbnail} alt="img" />
        </div>
        <div className="titleBook">
            {title}
        </div>

    </div>
  )
}

export default MediaCard