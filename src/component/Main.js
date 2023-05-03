import React from "react";
import { useState } from "react";
import axios from "axios";
import MediaCard from "./Card";


import "./main.css";
const Main = () => {
  const [Data, setData] = useState([]);
  const [Search, setSearch] = useState("");

//   console.log(Search);
  const change = async(e) => {
    if (e.key === "Enter") {
        console.log(Search);
       await axios.get(`https://www.googleapis.com/books/v1/volumes?q='${Search}&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU&maxResults=40`).then((res)=>setData(res.data.items))
       .catch(e=>(console.log(e)))

       console.log(Data);
    }

    setSearch("");
  };

  return (
    <div className="header">
        <h1>Find Book</h1>  
      <div className="searchBox">
        
        <input
          type="text"
          placeholder=" Enter book name...  "
        //   value={Search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyPress={change}
        />
      </div>

      <div className="resultBox ">

            {
                
                Data.map((value)=>{
                    return <MediaCard info={value}/>
                })
            }
            

      </div>
    </div>
  );
};

export default Main;
