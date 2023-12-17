import styled from "styled-components";
import PropTypes from 'prop-types';
import { BASE_URL } from "./App";
import { Button } from "./Components/TopSection";

const FoodCards = ({ data }) => {
  return (
    <FoodCardsContainer>
      {data && data.map((item, index) => (
        <FoodCard key={index}>
          <div className="FoodImage">
          < img src={BASE_URL + item.image} alt={item.name}/>
          </div>
          <div className="foodInfo">
            <div className="info">
          <h3>{item.name}</h3>
        <p>{item.text}</p>
          
          <p>{item.type}</p>
          </div>
          <Button>${item.price.toFixed(2)}</Button>
          </div>
          
        </FoodCard>
      ))}
    </FoodCardsContainer>
  );
}

FoodCards.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      // Add other prop-types as needed
    })
  ),
}

export default FoodCards;

const FoodCardsContainer = styled.section`
 
  background-image: url("./Images/bg.png");
  background-size: cover;
  min-height: calc(100vh - 210px);
  display:flex;
  flex-wrap:wrap;
  column-gap:20px;
  row-gap:32px;
  justify-content:center;
  align-items:center;
`;

const FoodCard = styled.div`
   padding:8px;
   display:flex;
   width: 340px;
   height:186px; 
  border-radius: 19.447px;
border: 0.659px solid #98F9FF;
background: url(<path-to-image>), lightgray 0% 0% / 50.8334219455719px 50.8334219455719px repeat, radial-gradient(151.92% 127.02% at 15.32% 21.04%, rgba(165, 239, 255, 0.20) 0%, rgba(110, 191, 244, 0.04) 77.08%, rgba(70, 144, 212, 0.00) 100%);
backdrop-filter:blur(40px);



.FoodImage{
width: 153px;
height: 153px;
border-radius:133px;
gap:17px;


.info{
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  h3{
    font-size:16px;
    font-weight:500;
    margin-top:8px;
  }

  p{font-size:12px;
    font-weight:500;

  }
}

.foodInfo{
  align-items:end;
  
}

 }
`;




