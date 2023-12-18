import styled from "styled-components";
import PropTypes from 'prop-types'


const TopSection = ({ searchFood, filterFood} ) => {

  

 
  return (
    <Container>
    <TopContainer>
     <div className="logo">
        <img src = "./Images/Foody Zone.svg" alt="logo"/>
     </div>
     <div className="search">
     <input
            placeholder="Search Food...."
            onChange={searchFood}
          />
     </div>
    </TopContainer>
    <FilterContainer>
     <Button  onClick={() => filterFood("all")}>All</Button>
     <Button onClick={()=>filterFood("Breakfast")}>Breakfast</Button>
     <Button onClick={()=>filterFood("Lunch")}>Lunch</Button>
     <Button onClick={()=>filterFood("Dinner")}>Dinner</Button>
     

    </FilterContainer>
    </Container>
  )
}


TopSection.propTypes = {
  searchFood: PropTypes.func.isRequired,
  filterFood:PropTypes.func.isRequired, // Validate the searchFood prop as a function
};

export default TopSection

const Container =styled.div`
max-width:1200px;
margin: 0 auto;

`;


const TopContainer =styled.section`
 background-color: #323334;
 display:flex;
 min-height:140px;
 justify-content:space-between;
 padding:16px;
 align-items:center;
 
 
 .search{
    input{
background:transparent;
border: 1px solid red;
border-radius:5px;
height:40px;
color:white;
font-size:16px;
padding: 0 10px;


    }
 }
@media (0 < width < 600px){
flex-direction:column;
height:80px;
}
  


`;

const FilterContainer =styled.section`
display:flex;
justify-content:center;
gap:12px;
margin-bottom: 40px;



`;


 export const Button = styled.button`

border-radius: 5px;
background: #FF4343;
color:white;
padding: 6px 12px;
border: none;
font-size: 16px;
font-weight:500;
cursor:pointer;

&:hover{
  background-color:#441515;
}

`;






































