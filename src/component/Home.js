import React, { useState, useEffect } from 'react';
// import axios from "axios";
import "./style.css"
import img1 from "../component/Images/Image-2.jpg"
import data from './data';

const Home = () => {

  const [state, setState] = useState({
    name: ""
  });

const [limit,setLimit]=useState(5) ;

  const [parsedData, setParsedData] = useState([]);

  const [list, setList] = useState([]);


const chnageLimit=()=>{
  setLimit(limit+5)
}


  useEffect(() => {
  
  //  const data3=JSON.stringify(data)
  const data2= JSON.parse(data)
  //  console.log(data2)
      setParsedData(data2);
      // console.log('Parsed data:', parsedData); 
    
  }, []);

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ [name]: value });
  
    const data2 = parsedData.filter((item) => {
      if (item && item.ElectorName) {
        if (item.RelativeName) {
          const relation = item.ElectorName.split(" ");
          return `${item.ElectorName.split(" ")[0]} ${item.RelativeName.split(" ")[0]} ${item.ElectorName.split(" ")[relation.length - 1]}`.trim().toLowerCase().includes(value.toLowerCase());
        } else {
          return item.ElectorName.trim().toLowerCase().includes(value.toLowerCase());
        }
      }
      return false;
    });
  
    if (value) {
      setList(data2);
    } else {
      setList([]);
    }
  };
  return (
    <div className="input-container">
      <div className="image-1">
        <img src={img1} alt="Images-1"/>
      </div>
      <div>
      <h1>Enter Your Name</h1>
      <input
        type="text"
        id="Fullname"
        name="name"
        placeholder="Enter Your Name"
        value={state.name}
        onChange={handleChange}
      />

      {list.length > 0 && (
        <div className="list">
          {list.slice(0, limit).map((item, index) => {
            const relation=item.ElectorName.split(" ")
            return (
              <div key={index} className="output-list">
             



{`${item.RelativeName ? `VoterName : ${item.ElectorName.split(" ")[0].toUpperCase()} ${item.RelativeName.split(" ")[0].toUpperCase()} ${item.ElectorName.split(" ")[relation.length-1].toUpperCase()}` :
 ` VoterName: ${item.ElectorName}`
 }`}

                <br />
                VoterId: {item.SrNO}
              </div>
            );
          })}

<button className="btn-btn-primary mt-3" onClick={chnageLimit}>Read More</button>
        </div>

      
      )}
    </div>
    </div>
  );
}

export default Home;
