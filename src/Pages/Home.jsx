import { useEffect, useState } from "react";
import { json } from "react-router-dom";


const Home = (props) => {
    const [value, setvalue] = useState([]);
    async function fetchRecipe(){
      let res= await fetch ("https://api.edamam.com/search?q='pizza'&app_id=9cc1d118&app_key=6adaff457bceb1c4d9cf4a11d3be59b8")

      let data = await res.json()
      // console.log(data.hits)
      setvalue(data.hits)
    }
    useEffect(()=>{
      fetchRecipe()
    },[])

 console.log(value)

   
 

 
  return (
    <div>
      
       {
        value.map((ele)=>{
          return <img src={ele.recipe.image} alt="" />
        })
       }
    
      
     
    </div>
    
  )
}

export default Home
