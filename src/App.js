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

  const [allcontinentsdata,setallcontinentsdata] = useState()

  const [allcountriesdata,setallcountriesdata] = useState([])

  const [selectedcountrydata,setselectedcountrydata] = useState({})

  useEffect( async ()=>{
        await axios.get(`https://corona.lmao.ninja/v2/countries/Rwanda?yesterday&strict&query%20`,headers)
        .then(response => {
          setselectedcountrydata(response.data)
        })

        axios.get(`https://corona.lmao.ninja/v2/countries?yesterday&sort`,headers)
        .then( response => {
            setallcountriesdata(response.data)

            response.data.map(countrydata => {
              options.push({ value: countrydata.country, label: countrydata.country, icon: countrydata.countryInfo.flag })
            })
        })
  },[])


  const services = [
    {
        title: 'Case Management',
        description: "Yombi help you to add and assign cases, level of completion of case,working on the assigned cases,graphic visualization of level."
  
    },
    {
        title: 'Daily Task Management',
        description: " With Yombi you can organize your daily work clearly to minimize time wastage. Yombi helps to add and complete daily todos list corresponding comment after completetion"
    },
    {
        title: 'Messaging service',
        description: "With Yombi messaging service, we link up the law firm members in interactive conversation, sharing documents in messaging app."
    },
    {
      title: 'Messaging service',
      description: "With Yombi messaging service, we link up the law firm members in interactive conversation, sharing documents in messaging app."
  },
  {
    title: 'Messaging service',
    description: "With Yombi messaging service, we link up the law firm members in interactive conversation, sharing documents in messaging app."
}]

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
    control: styles => ({ ...styles, backgroundColor: 'white',minWidth: '200px',fontFamily: 'Roboto',border: '1px solid hsl(0deg 0% 70% / 38%)',fontSize: '13px',fontWeight: 900,outline: 'none'}),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        fontFamily: 'Roboto',
        fontSize: '13px',
        fontWeight: 900
      };
    }
  };


  const getselectedcountrychange = async (selectedOption )  => {
    await axios.get(`https://corona.lmao.ninja/v2/countries/${selectedOption.value}?yesterday&strict&query%20`,headers)
    .then(response => {
      setselectedcountrydata(response.data)
    })
  }


  return (
    <div className="App">
      <div className="app-upper-part">
          
          {/* app navigation bar */}

          <Navbar />
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
            />

            <input type="date" className="choose-date" />
            
            <button>SUBMIT</button>
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
                  {services.map((services)=>
                    <div className="rounded-md ml-12 continent-container">
                    <div className="grid grid-cols-2">
                        <div className="left-part p-2">
                          <h1 className="text-center font-bold mt-6">AFRICA</h1>
                          <h2 className="text-center mt-14">12,600</h2>
                          <h3 className="text-center">New cases</h3>
                          <h4 className="text-center mt-24">All cases: 23,000,900</h4>
                        </div>
                        <div className="right-part">
                          <div>
                            <h1 className="text-center mt-4">619</h1>
                            <h4 className="text-center">New deaths</h4>
                            <h2 className="text-center mt-4">Total deaths: 20,300</h2>
                          </div>
                          <div>
                            <h1 className="text-center mt-4">23,200</h1>
                            <h4 className="text-center">Newly recovered</h4>
                            <h2 className="text-center mt-4">Total recovered: 20,300</h2>
                          </div>
                          <div>
                            <h1 className="text-center mt-4">50,009</h1>
                            <h4 className="text-center">New vaccinated</h4>
                            <h2 className="text-center mt-4">Total vaccinated: 20,300</h2>
                          </div>
                        </div>                      
                    </div>                                     
                  </div>
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
                  <p> <a className="text-center font-bold" href="https://www.linkedin.com/in/ntwari-egide-93b53218a/">ntwari egide,my cv</a> </p>
                  
              </div>
      </div>
    </div>
  );
}

export default App;

