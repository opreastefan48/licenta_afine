import poza_detalii from './problem.png';
import cules from './cules.png'
import total from './total.png'
import fertil from './fertilizare.png'
import './home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import { Box } from '@mui/system';

export default function Home() {
  return(
    <Box className='box'>
{/* interval={1000} */}
      <Carousel>
          <Carousel.Item >   
          <a href="/detalii">
            <img
                className="d-block  image"
                src={poza_detalii}
                alt="First slide"
                
              />          
          </a>
            <Carousel.Caption>
              <h3>Probleme</h3>
              <p>Adauga sau vizioneaza problemele existente din plantatie.</p>
            </Carousel.Caption>
          </Carousel.Item>
          
          <Carousel.Item>
          <a href="/total">

            <img
              className="d-block  image"
              src={total}
              alt="Second slide"
            />
          </a>
            <Carousel.Caption>
              <h3>Cantitate culeasa</h3>
              <p>Vizioneaza cantitatea totala culeasa, si cantitatea culeasa de fiecare culegator.</p>
            </Carousel.Caption>
          </Carousel.Item>
          
          <Carousel.Item>
          <a href="/fertilizare">
            <img
              className="d-block  image"
              src={fertil}
              alt="Third slide"
            />
          </a>
            <Carousel.Caption>
              <h3>Fertilizare</h3>
              <p>Programul de fertilizare pe saptamani.</p>
            </Carousel.Caption>
          </Carousel.Item>
      </Carousel>
        
    </Box>
  );
}
