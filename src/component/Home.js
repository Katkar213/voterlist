import React,{useState} from 'react';
// import axios from "axios";
import "./style.css"

const Home = () => {


    const [state,setState]=useState({
        name:""
    });

    // const [data,setData]=useState([]);


    const [list,setList]=useState([]);

  



// manual..
const arr=
`
  [
    {"VoterName": "Kimberly Pratt", "VoterId": 1},
    {"VoterName": "Mark Lozano", "VoterId": 2},
    {"VoterName": "Jessica Gross", "VoterId": 3},
    {"VoterName": "Joan Vang", "VoterId": 4},
    {"VoterName": "Karen Bryant", "VoterId": 5},
    {"VoterName": "Jaclyn Carter", "VoterId": 6},
    {"VoterName": "Lisa Garcia", "VoterId": 7},
    {"VoterName": "Sean Rivas", "VoterId": 8},
    {"VoterName": "Michelle Kemp", "VoterId": 9},
    {"VoterName": "Patricia Landry", "VoterId": 10},
    {"VoterName": "Matthew Frey", "VoterId": 11},
    {"VoterName": "Amanda Romero", "VoterId": 12},
    {"VoterName": "Alexis Garcia", "VoterId": 13},
    {"VoterName": "Ian Johnson", "VoterId": 14},
    {"VoterName": "Nicole Pineda", "VoterId": 15},
    {"VoterName": "Danielle Jackson", "VoterId": 16},
    {"VoterName": "Amanda Barnett", "VoterId": 17},
    {"VoterName": "Alan Singh", "VoterId": 18},
    {"VoterName": "Eric Smith", "VoterId": 19},
    {"VoterName": "Debbie Bennett", "VoterId": 20},
    {"VoterName": "John Campbell", "VoterId": 21},
    {"VoterName": "Michael Caldwell", "VoterId": 22},
    {"VoterName": "Nicole Walls", "VoterId": 23},
    {"VoterName": "Walter Smith", "VoterId": 24},
    {"VoterName": "Carl Turner", "VoterId": 25},
    {"VoterName": "Mrs. Jennifer Smith", "VoterId": 26},
    {"VoterName": "Kimberly Olson", "VoterId": 27},
    {"VoterName": "Linda Smith", "VoterId": 28},
    {"VoterName": "Yolanda Goodwin", "VoterId": 29},
    {"VoterName": "Joanna Contreras", "VoterId": 30},
    {"VoterName": "Kristen Sanchez", "VoterId": 31},
    {"VoterName": "William Lynch", "VoterId": 32},
    {"VoterName": "David Watson", "VoterId": 33},
    {"VoterName": "Gregory Kennedy", "VoterId": 34},
    {"VoterName": "Edward Gilbert", "VoterId": 35},
    {"VoterName": "Erin Patrick", "VoterId": 36},
    {"VoterName": "Bryan Francis", "VoterId": 37},
    {"VoterName": "Stephanie Wilcox", "VoterId": 38},
    {"VoterName": "Michael Esparza", "VoterId": 39},
    {"VoterName": "Rachel Shelton", "VoterId": 40},
    {"VoterName": "Carl Garcia", "VoterId": 41},
    {"VoterName": "Kelly Kennedy", "VoterId": 42},
    {"VoterName": "Jane Tran", "VoterId": 43},
    {"VoterName": "Justin Delacruz", "VoterId": 44},
    {"VoterName": "Steven Ward", "VoterId": 45},
    {"VoterName": "Darlene Sanchez", "VoterId": 46},
    {"VoterName": "Erin Baker", "VoterId": 47},
    {"VoterName": "Belinda Miller", "VoterId": 48},
    {"VoterName": "Lynn Chen", "VoterId": 49},
    {"VoterName": "Ashley Allen", "VoterId": 50},
    {"VoterName": "Jennifer Pugh", "VoterId": 51},
    {"VoterName": "Erica Bowen", "VoterId": 52},
    {"VoterName": "Heather Jacobs", "VoterId": 53},
    {"VoterName": "Michael Smith", "VoterId": 54},
    {"VoterName": "Kimberly Davis", "VoterId": 55},
    {"VoterName": "Elizabeth Fields", "VoterId": 56},
    {"VoterName": "Randy Powers", "VoterId": 57},
    {"VoterName": "David Jones", "VoterId": 58},
    {"VoterName": "Joshua Kelly", "VoterId": 59},
    {"VoterName": "Jay Armstrong", "VoterId": 60},
    {"VoterName": "Kelsey Welch", "VoterId": 61},
    {"VoterName": "Robert Thompson", "VoterId": 62},
    {"VoterName": "Brett Wallace", "VoterId": 63},
    {"VoterName": "Daniel Smith", "VoterId": 64},
    {"VoterName": "Anthony Perez", "VoterId": 65},
    {"VoterName": "William Johnson", "VoterId": 66},
    {"VoterName": "Kristie Watts", "VoterId": 67},
    {"VoterName": "James Lee", "VoterId": 68},
    {"VoterName": "Caroline Nelson", "VoterId": 69},
    {"VoterName": "Darryl Nichols", "VoterId": 70},
    {"VoterName": "Juan Sanchez", "VoterId": 71},
    {"VoterName": "Anthony Hays", "VoterId": 72},
    {"VoterName": "Mary Mann", "VoterId": 73},
    {"VoterName": "Kimberly Morgan DDS", "VoterId": 74},
    {"VoterName": "Christina Stewart", "VoterId": 75},
    {"VoterName": "Christy Moore", "VoterId": 76},
    {"VoterName": "Bryan Johnson", "VoterId": 77},
    {"VoterName": "Marcus Holt", "VoterId": 78},
    {"VoterName": "Jimmy Myers", "VoterId": 79},
    {"VoterName": "Ann Williams", "VoterId": 80},
    {"VoterName": "Randall Tucker", "VoterId": 81},
    {"VoterName": "Mrs. Erica Grimes", "VoterId": 82},
    {"VoterName": "Jeffrey Smith", "VoterId": 83},
    {"VoterName": "Adrian Perry", "VoterId": 84},
    {"VoterName": "Casey Anderson", "VoterId": 85},
    {"VoterName": "Melissa James", "VoterId": 86},
    {"VoterName": "Amy Larson", "VoterId": 87},
    {"VoterName": "Robin Doyle", "VoterId": 88},
    {"VoterName": "Theresa Maldonado", "VoterId": 89},
    {"VoterName": "Christopher Nelson", "VoterId": 90},
    {"VoterName": "Megan Perry", "VoterId": 91},
    {"VoterName": "Mr. Paul Banks DVM", "VoterId": 92},
    {"VoterName": "Tanya Frank", "VoterId": 93},
    {"VoterName": "Cassandra Thompson", "VoterId": 94},
    {"VoterName": "Cynthia Johnson", "VoterId": 95},
    {"VoterName": "Kyle Hughes", "VoterId": 96},
    {"VoterName": "Jeffrey Melendez", "VoterId": 97},
    {"VoterName": "Austin Garcia", "VoterId": 98},
    {"VoterName": "Jason Allen", "VoterId": 99},
    {"VoterName": "Scott Howard", "VoterId": 100},
      {"VoterId": 122, "VoterName": "Brett Daniels"},
  {"VoterId": 123, "VoterName": "Heidi Carson"},
  {"VoterId": 124, "VoterName": "Jessica Ramirez"},
  {"VoterId": 125, "VoterName": "Melissa Miller"},
  {"VoterId": 126, "VoterName": "Bryan Gray"},
  {"VoterId": 127, "VoterName": "Raymond Freeman"},
  {"VoterId": 128, "VoterName": "Kimberly Mendoza"},
  {"VoterId": 129, "VoterName": "Nicole Campbell"},
  {"VoterId": 130, "VoterName": "Nathan Jenkins"},
  {"VoterId": 131, "VoterName": "Michael Moore"},
  {"VoterId": 132, "VoterName": "Elizabeth Ray"},
  {"VoterId": 133, "VoterName": "Gary French"},
  {"VoterId": 134, "VoterName": "Jean Perez"},
  {"VoterId": 135, "VoterName": "Mr. Chad Rose Jr."},
  {"VoterId": 136, "VoterName": "Jesse Jacobs"},
  {"VoterId": 137, "VoterName": "Troy Ross"},
  {"VoterId": 138, "VoterName": "Charles Cole"},
  {"VoterId": 139, "VoterName": "Sherry Farrell"},
  {"VoterId": 122, "VoterName": "Brett Daniels"},
  {"VoterId": 123, "VoterName": "Heidi Carson"},
  {"VoterId": 124, "VoterName": "Jessica Ramirez"},
  {"VoterId": 125, "VoterName": "Melissa Miller"},
  {"VoterId": 126, "VoterName": "Bryan Gray"},
  {"VoterId": 127, "VoterName": "Raymond Freeman"},
  {"VoterId": 128, "VoterName": "Kimberly Mendoza"},
  {"VoterId": 129, "VoterName": "Nicole Campbell"},
  {"VoterId": 130, "VoterName": "Nathan Jenkins"},
  {"VoterId": 131, "VoterName": "Michael Moore"},
  {"VoterId": 132, "VoterName": "Elizabeth Ray"},
  {"VoterId": 133, "VoterName": "Gary French"},
  {"VoterId": 134, "VoterName": "Jean Perez"},
  {"VoterId": 135, "VoterName": "Mr. Chad Rose Jr."},
  {"VoterId": 136, "VoterName": "Jesse Jacobs"},
  {"VoterId": 137, "VoterName": "Troy Ross"},
  {"VoterId": 138, "VoterName": "Charles Cole"},
  {"VoterId": 139, "VoterName": "Sherry Farrell"},
  {"VoterId": 140, "VoterName": "Heidi Weaver"},
  {"VoterId": 141, "VoterName": "Makayla Richmond"},
  {"VoterId": 142, "VoterName": "Alexandra Stewart"},
  {"VoterId": 143, "VoterName": "Matthew Brandt"},
  {"VoterId": 144, "VoterName": "Juan Pope"},
  {"VoterId": 145, "VoterName": "Caroline Coleman"},
  {"VoterId": 146, "VoterName": "Anthony Thomas"},
  {"VoterId": 147, "VoterName": "Kevin Hansen"},
  {"VoterId": 148, "VoterName": "Kurt Willis"},
  {"VoterId": 149, "VoterName": "Tina Pearson"},
  {"VoterId": 150, "VoterName": "Jamie Green"},
  {"VoterId": 151, "VoterName": "Christopher Olson"},
  {"VoterId": 152, "VoterName": "James Jordan"},
  {"VoterId": 153, "VoterName": "Lauren Gomez"},
  {"VoterId": 154, "VoterName": "Rachel Allen"},
  {"VoterId": 155, "VoterName": "Mr. Austin Bennett"},
  {"VoterId": 156, "VoterName": "Michael Fuentes"},
  {"VoterId": 157, "VoterName": "Jeffery Sanchez"},
  {"VoterId": 158, "VoterName": "Jesse West"},
  {"VoterId": 159, "VoterName": "Thomas Mack"},
  {"VoterId": 160, "VoterName": "Dana Williams"},
  {"VoterId": 161, "VoterName": "Joe Hatfield"},
  {"VoterId": 162, "VoterName": "Kayla Lowe"},
  {"VoterId": 163, "VoterName": "Amanda Fischer"},
  {"VoterId": 164, "VoterName": "Stacie Frost"},
  {"VoterId": 165, "VoterName": "Melanie Williams"},
  {"VoterId": 166, "VoterName": "Kyle Aguirre"},
  {"VoterId": 167, "VoterName": "Jamie Brewer"},
  {"VoterId": 168, "VoterName": "Ashley Wade"},
  {"VoterId": 169, "VoterName": "April Spence"},
  {"VoterId": 170, "VoterName": "Laura Michael"},
  {"VoterId": 171, "VoterName": "Debbie Horne"},
  {"VoterId": 172, "VoterName": "Matthew Walker"},
  {"VoterId": 173, "VoterName": "David Deleon"},
  {"VoterId": 174, "VoterName": "Ashley Rowe"},
  {"VoterId": 175, "VoterName": "Randy Moore"},
  {"VoterId": 176, "VoterName": "Kristen Adams"},
  {"VoterId": 177, "VoterName": "Andrea Morris"},
  {"VoterId": 178, "VoterName": "Russell Simpson"},
  {"VoterId": 179, "VoterName": "Ryan Miller"},
  {"VoterId": 180, "VoterName": "Stacey Payne"},
  {"VoterId": 181, "VoterName": "Diane Vasquez"},
  {"VoterId": 182, "VoterName": "Joel Walton"},
  {"VoterId": 183, "VoterName": "Brianna Jensen"},
  {"VoterId": 184, "VoterName": "Natalie Schmidt"},
  {"VoterId": 185, "VoterName": "Jason Becker"},
  {"VoterId": 186, "VoterName": "Crystal Lucas"},
  {"VoterId": 187, "VoterName": "Tammy Williams"},
  {"VoterId": 188, "VoterName": "David Porter"},
  {"VoterId": 189, "VoterName": "Steve Smith"},
  {"VoterId": 190, "VoterName": "Alexander Fernandez"},
  {"VoterId": 191, "VoterName": "Brian Brown"},
  {"VoterId": 192, "VoterName": "Katie Lee"},
  {"VoterId": 193, "VoterName": "William Rodriguez"},
  {"VoterId": 194, "VoterName": "Andrea Patton"},
  {"VoterId": 195, "VoterName": "Toni Stevens"},
  {"VoterId": 196, "VoterName": "Perry Schaefer"},
  {"VoterId": 197, "VoterName": "Nicholas Blake"},
  {"VoterId": 198, "VoterName": "Helen Rose"},
  {"VoterId": 199, "VoterName": "Jeremy Brown"},
  {"VoterId": 200, "VoterName": "Jeffrey Jones"},
  {"VoterId": 201, "VoterName": "Manuel Watson"},
  {"VoterId": 202, "VoterName": "Kristin Ray"},
  {"VoterId": 203, "VoterName": "Cathy Jennings"},
  {"VoterId": 204, "VoterName": "Kayla Sanchez"},
  {"VoterId": 205, "VoterName": "Steven White"},
  {"VoterId": 206, "VoterName": "Thomas Fuller"},
  {"VoterId": 207, "VoterName": "Katherine Rivera"},
  {"VoterId": 208, "VoterName": "Jay Padilla"},
  {"VoterId": 209, "VoterName": "Heidi Brown"},
  {"VoterId": 210, "VoterName": "Nicole Thompson"},
  {"VoterId": 211, "VoterName": "Alex Chan"},
  {"VoterId": 212, "VoterName": "Alexander Elliott"},
  {"VoterId": 213, "VoterName": "Lacey Carroll"},
  {"VoterId": 214, "VoterName": "Michael Vargas"},
  {"VoterId": 215, "VoterName": "Jeffrey Gomez"},
  {"VoterId": 216, "VoterName": "Kayla Evans"},
  {"VoterId": 217, "VoterName": "David Mills"},
  {"VoterId": 218, "VoterName": "Jennifer Fuentes"},
  {"VoterId": 219, "VoterName": "Craig Ryan"},
  {"VoterId": 220, "VoterName": "Daniel Espinoza"},
  {"VoterId": 221, "VoterName": "Brian Ryan"},
  {"VoterId": 222, "VoterName": "Billy Washington"},
  {"VoterId": 223, "VoterName": "Deanna Barr"},
  {"VoterId": 224, "VoterName": "Donna Bowen"},
  {"VoterId": 225, "VoterName": "Leslie Perry"},
  {"VoterId": 226, "VoterName": "Melissa Rodriguez"},
  {"VoterId": 227, "VoterName": "Diane Williams"},
  {"VoterId": 228, "VoterName": "Carrie Brown"},
  {"VoterId": 229, "VoterName": "William Morgan"}
  ] `
  

  const parsedData = JSON.parse(arr);










// useEffect(()=>{
//   axios.get("https://jsonplaceholder.typicode.com/users")
//   .then((res)=>{
//     // console.log(res.data)
// setData(res.data)
//   })
// },[])


// handlechange function.........................................................//

const handleChange=(e)=>{
  const { name, value } = e.target;
        setState({ [name]: value });

        console.log(value);

  
       const data2 = parsedData.filter((item) =>{
        return(
          item && item.VoterName && item.VoterName.toLowerCase().includes(value)

        )
       });
     
    //  console.log(data2)

    if(value){
      setList(data2);
    }
    else{
      setList([])
    }

}

  return (
   
<div className="input-container">

      <h1>Search for VoterId </h1>
      <input type="text" id="Fullname" name="name" placeholder="Enter voters name" value={state.name} onChange={handleChange}/>
 
      


{/* list ternary......................................... */}

{list.length>0 ?<div className="list">
 
 {list.length>0 && list.slice(0,5).map((item,index)=>{
   return(

  
<div key={index}>

<div className="output-list" >
 <b> VoterName: {item.VoterName}</b>
 <br/>
VoterId:  {item.VoterId}
</div>

 



</div>
)
 })}

</div>
:<>{null}</>
}
            </div>
  
  )
}

export default Home
