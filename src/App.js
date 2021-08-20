import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Select, { components } from "react-select";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import {useState,useEffect} from "react"
import axios from "axios"

const options = [
  { value: "Rwanda", label: "Rwanda", icon: "https://disease.sh/assets/img/flags/rw.png" }
];

const { Option,Control } = components;

const IconControl = props => (
  <Control {...props}>
    <div  className="flex"> 
      <img
        src={props.data.icon}
        style={{ width: 16 }}
        alt={props.data.label}
      />
      <p className ="ml-2">{props.data.label}</p>
    </div>
  </Control>
)
const IconOption = props => (
  <Option {...props} >

    <div  className="flex"> 
      <img
        src={props.data.icon}
        style={{ width: 20 }}
        alt={props.data.label}
      />
      <p className ="ml-2">{props.data.label}</p>
    </div>
  </Option>
);

function App() {

  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }

  const [allcontinentsdata,setallcontinentsdata] = useState([])

  const [allcountriesdata,setallcountriesdata] = useState([])

  const [selecteddate,setselecteddate] = useState("")

  const [datenotselected,setdatenotselected] = useState(false)

  const [selectedcountry,setselectedcountry] = useState("")

  const [selectedcountrydata,setselectedcountrydata] = useState({})

  useEffect( async ()=>{
        await axios.get(`https://corona.lmao.ninja/v2/countries/Rwanda?yesterday&strict&query%20`,headers)
        .then(response => {
          setselectedcountrydata(response.data)
        })

        await axios.get(`https://corona.lmao.ninja/v2/continents?yesterday&sort`,headers)
        .then(response => {
          setallcontinentsdata(response.data)
        })

        axios.get(`https://corona.lmao.ninja/v2/countries?yesterday&sort`,headers)
        .then( response => {
            setallcountriesdata(response.data)

            response.data.map(countrydata => {
              options.push({ value: countrydata.country, label: countrydata.country, icon: countrydata.countryInfo.flag })
            })
        })
  },[])


  const responsive = {
      superLargeDesktop: {
      breakpoint: { max: 1500, min: 3000 },
      items: 2.5
      },
      desktop: {
      breakpoint: { max: 1500, min: 500 },
      items: 2.5
      },
      tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
      },
      mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
      }
  };

  const colourStyles = {
    control: styles => ({ ...styles, backgroundColor: 'white',minWidth: '',fontFamily: 'Roboto',border: '1px solid hsl(0deg 0% 70% / 38%)',fontSize: '13px',fontWeight: 900,outline: 'none'}),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        fontFamily: 'Roboto',
        fontSize: '13px',
        fontWeight: 900
      };
    }
  };


  const getselectedcountrychange = (selectedOption )  => {
    setselectedcountry(selectedOption.value)
  }

  const handledatechange = (e) => {
    setselecteddate(e.target.value)
  }

  const handleformsubmission = (e) => {

    /* validating forms */

    if(selecteddate === "") {
      setdatenotselected(true)
      alert("date is not choosen, choose date and try again")
    }
    else if(selecteddate !== ""){
      setdatenotselected(false)

      axios.get(`https://corona.lmao.ninja/v2/countries/${selectedcountry}?${selecteddate}&strict&query%20`,headers)
      .then(response => {
          setselectedcountrydata(response.data)
      })
    }
  }


  return (
    <div className="App">
      {/* app navigation bar */}

      <Navbar />
      <div className="app-upper-part">
          <h1 className="updates-title text-center text-white font-bold">UPDATES</h1>
          <p className="search-title text-sm text-center text-white font-sm mb-4">Search a country</p>

          {/* search form */}

          <div className="flex justify-between search-form">
            <Select
            defaultValue={options[0]}
            options={options}
            components={{ Option: IconOption }} 
            styles = {colourStyles}
            onChange = {getselectedcountrychange}
            className="select-country"
            />

            {datenotselected ? 
            <input type="date" className="choose-date" style={{border: '1px solid red'}} onChange={handledatechange} />
            :
            <input type="date" className="choose-date" onChange={handledatechange} />
            }
            
            <button onClick={handleformsubmission}>SUBMIT</button>
          </div>

          <div className="mt-12">
            <div className="country-brief-data"> 
                <h1 className="text-center text-xl pt-8">{selectedcountrydata.cases}</h1>
                <p className="text-center text-sm pt-8">Cumulatively</p>
            </div>

            <div className="country-detailed-data p-4 grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 gap-2 xs:grid-cols-2 gap-2 justify-between "> 
              <div>
                <h1>11,270</h1>
                <p className="small-text">Tests</p>
                <p className="small-numbers">{selectedcountrydata.testes}</p>
              </div>

              <div>
                <h1>{selectedcountrydata.todayCases}</h1>
                <p className="small-text">Positive cases</p>
                <p className="small-numbers">{selectedcountrydata.cases}</p>
              </div>

              <div>
                <h1>{selectedcountrydata.critical}</h1>
                <p className="small-text">Hospitalized</p>
                <p className="small-numbers">{selectedcountrydata.active}</p>
              </div>

              <div>
                <h1>{selectedcountrydata.recovered}</h1>
                <p className="small-text">Recovered</p>
                <p className="small-numbers">{selectedcountrydata.recovered}</p>
              </div>

              <div>
                <h1>{selectedcountrydata.todayDeaths}</h1>
                <p className="small-text">Death</p>
                <p className="small-numbers">{selectedcountrydata.deaths}</p>
              </div>

              <div>
                <h1>11,270</h1>
                <p className="small-text">Vaccinated</p>
                <p className="small-numbers">2,188,881</p>
              </div>
            </div>

          </div>

          <h1 className="text-center mt-28 per-continent-title">PER CONTINENTS</h1>

          <Carousel  
              className="mt-16 mb-16 pt-4 pb-4" 
              responsive={responsive}
              keyBoardControl={true}
              draggable={true}
              swipeable = {true}>
                  {allcontinentsdata.map((continentdata) =>
                  <ContinentDataComponent key={continentdata.continent} {...continentdata} />
                )}
                </Carousel>
              <br />
              <div className="grid lg:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
                  <div className="my-image">
                  </div>

                  <div className="my-portifolio">
                    <h1 className="ml-16 mt-24">NTWARI EGIDE</h1>
                    <p className="ml-16 mt-4 skills">I am a software developer who is skilled in working in Big Groups using Agile methodology and devops, expert in programming , passionate in coding , best UI & UX Designer with best upcoming trends. <br /> <br />
                    My front end skills: React Js,Vue Js, Angular Js, Nuxt Js,Php - Laravel. <br />
                    Best achievement ever: React Js Developer @ <a className="font-light link" href="https://yombi.rw/">yombi</a> <br />
                    My github: <a className="font-light link" href="https://github.com/ntwari-egide">ntwari egide github</a>
                    </p>

                    <p className="ml-16 mt-8 date">19 August 2021</p>
                  </div>
              </div>

              <div className="footer">
                  <h1 className="text-center pt-16 font-bold">REACH ME</h1>
                  <h2 className="text-center mt-8 font-bold">Email</h2>
                  <p className="text-center font-bold">ntwariegide2@gmail.com</p>

                  <h2 className="text-center mt-8 font-bold">Phone</h2>
                  <p className="text-center font-bold">call:  +250 780 964 4307,+250 788881955</p>
                  <p className="text-center font-bold">whatsap: +250 727 509 011</p>

                  <h2 className="text-center mt-8 font-bold">Profile</h2>
                  <p> <a className="text-center font-bold" href="https://www.linkedin.com/in/ntwari-egide-93b53218a/">ntwari egide,linked in profile</a> </p>
                  <p> <a className="text-center font-bold" href="https://docs.google.com/document/d/1pp_HSpSiOKsbRZRGuCCL46kdKHd4mbwLFkCDIYbaBu4/edit?usp=sharing">ntwari egide,my cv</a> </p>
                  
              </div>
      </div>
    </div>
  );
}


const ContinentDataComponent = ({...continentdata}) =>{
  return <div className="rounded-md ml-12 continent-container">
  <div className="grid grid-cols-2">
      <div className="left-part p-2">
        <h1 className="text-center font-bold mt-6">{continentdata.continent}</h1>
        <h2 className="text-center mt-14">{continentdata.todayCases}</h2>
        <h3 className="text-center">New cases</h3>
        <h4 className="text-center mt-24">All cases: {continentdata.cases}</h4>
      </div>
      <div className="right-part">
        <div>
          <h1 className="text-center mt-4">{continentdata.todayDeaths}</h1>
          <h4 className="text-center">New deaths</h4>
          <h2 className="text-center mt-4">Total deaths: {continentdata.deaths}0</h2>
        </div>
        <div>
          <h1 className="text-center mt-4">{continentdata.critical}</h1>
          <h4 className="text-center">Newly recovered</h4>
          <h2 className="text-center mt-4">Total recovered: {continentdata.recovered}</h2>
        </div>
        <div>
          <h1 className="text-center mt-4">50,009</h1>
          <h4 className="text-center">New vaccinated</h4>
          <h2 className="text-center mt-4">Total vaccinated: 20,300</h2>
        </div>
      </div>                      
  </div>                                     
</div>
}

export default App;

