import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Select, { components } from "react-select";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";

const options = [
  { value: "England", label: "England", icon: "https://www.countryflags.io/be/shiny/64.png" },
  { value: "Germany", label: "Germany", icon: "https://www.countryflags.io/be/shiny/64.png" }
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
        style={{ width: 16 }}
        alt={props.data.label}
      />
      <p className ="ml-2">{props.data.label}</p>
    </div>
  </Option>
);

function App() {

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
      items: 2.3
      },
      desktop: {
      breakpoint: { max: 1500, min: 500 },
      items: 3
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
            />

            <input type="date" className="choose-date" />
            
            <button>SUBMIT</button>
          </div>

          <div className="mt-12">
            <div className="country-brief-data"> 
                <h1 className="text-center text-xl pt-8">2,188,881</h1>
                <p className="text-center text-sm pt-8">Cumulatively</p>
            </div>

            <div className="country-detailed-data p-4 grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 gap-2 xs:grid-cols-2 gap-2 justify-between "> 
              <div>
                <h1>11,270</h1>
                <p className="small-text">Tests</p>
                <p className="small-numbers">2,188,881</p>
              </div>

              <div>
                <h1>11,270</h1>
                <p className="small-text">Tests</p>
                <p className="small-numbers">2,188,881</p>
              </div>

              <div>
                <h1>11,270</h1>
                <p className="small-text">Tests</p>
                <p className="small-numbers">2,188,881</p>
              </div>

              <div>
                <h1>11,270</h1>
                <p className="small-text">Tests</p>
                <p className="small-numbers">2,188,881</p>
              </div>

              <div>
                <h1>11,270</h1>
                <p className="small-text">Tests</p>
                <p className="small-numbers">2,188,881</p>
              </div>

              <div>
                <h1>11,270</h1>
                <p className="small-text">Tests</p>
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
                        </div>
                        <div className="right-part p-2">
                        </div>                      
                    </div>                                     
                  </div>
                )}
                </Carousel>

              <br />
      </div>
    </div>
  );
}

export default App;

// [
//   {
//     "updated": 1587140875524,
//     "country": "Afghanistan",
//     "countryInfo": {
//       "_id": 4,
//       "iso2": "AF",
//       "iso3": "AFG",
//       "lat": 33,
//       "long": 65,
//       "flag": "https://raw.githubusercontent.com/NovelCOVID/API/master/assets/flags/af.png"
//     },
//     "cases": 840,
//     "todayCases": 56,
//     "deaths": 30,
//     "todayDeaths": 5,
//     "recovered": 54,
//     "active": 756,
//     "critical": 0,
//     "casesPerOneMillion": 22,
//     "deathsPerOneMillion": 0,
//     "tests": 0,
//     "testsPerOneMillion": 0
//   },
//   {
//     "updated": 1587140875533,
//     "country": "Albania",
//     "countryInfo": {
//       "_id": 8,
//       "iso2": "AL",
//       "iso3": "ALB",
//       "lat": 41,
//       "long": 20,
//       "flag": "https://raw.githubusercontent.com/NovelCOVID/API/master/assets/flags/al.png"
//     },
//     "cases": 518,
//     "todayCases": 24,
//     "deaths": 26,
//     "todayDeaths": 1,
//     "recovered": 277,
//     "active": 215,
//     "critical": 5,
//     "casesPerOneMillion": 180,
//     "deathsPerOneMillion": 9,
//     "tests": 4827,
//     "testsPerOneMillion": 1677
//   },
//   {
//     "updated": 1587140875510,
//     "country": "Algeria",
//     "countryInfo": {
//       "_id": 12,
//       "iso2": "DZ",
//       "iso3": "DZA",
//       "lat": 28,
//       "long": 3,
//       "flag": "https://raw.githubusercontent.com/NovelCOVID/API/master/assets/flags/dz.png"
//     },
//     "cases": 2268,
//     "todayCases": 108,
//     "deaths": 348,
//     "todayDeaths": 12,
//     "recovered": 783,
//     "active": 1137,
//     "critical": 60,
//     "casesPerOneMillion": 52,
//     "deathsPerOneMillion": 8,
//     "tests": 3359,
//     "testsPerOneMillion": 77
//   },
//   {
//     "updated": 1587140875529,
//     "country": "Andorra",
//     "countryInfo": {
//       "_id": 20,
//       "iso2": "AD",
//       "iso3": "AND",
//       "lat": 42.5,
//       "long": 1.6,
//       "flag": "https://raw.githubusercontent.com/NovelCOVID/API/master/assets/flags/ad.png"
//     },
//     "cases": 673,
//     "todayCases": 0,
//     "deaths": 33,
//     "todayDeaths": 0,
//     "recovered": 169,
//     "active": 471,
//     "critical": 17,
//     "casesPerOneMillion": 8710,
//     "deathsPerOneMillion": 427,
//     "tests": 1673,
//     "testsPerOneMillion": 21653
//   },
//   {
//     "updated": 1587140875574,
//     "country": "Angola",
//     "countryInfo": {
//       "_id": 24,
//       "iso2": "AO",
//       "iso3": "AGO",
//       "lat": -12.5,
//       "long": 18.5,
//       "flag": "https://raw.githubusercontent.com/NovelCOVID/API/master/assets/flags/ao.png"
//     },
//     "cases": 19,
//     "todayCases": 0,
//     "deaths": 2,
//     "todayDeaths": 0,
//     "recovered": 5,
//     "active": 12,
//     "critical": 0,
//     "casesPerOneMillion": 0,
//     "deathsPerOneMillion": 0,
//     "tests": 0,
//     "testsPerOneMillion": 0
//   },
//   {
//     "updated": 1587140875596,
//     "country": "Anguilla",
//     "countryInfo": {
//       "_id": 660,
//       "iso2": "AI",
//       "iso3": "AIA",
//       "lat": 18.25,
//       "long": -63.1667,
//       "flag": "https://raw.githubusercontent.com/NovelCOVID/API/master/assets/flags/ai.png"
//     },
//     "cases": 3,
//     "todayCases": 0,
//     "deaths": 0,
//     "todayDeaths": 0,
//     "recovered": 1,
//     "active": 2,
//     "critical": 0,
//     "casesPerOneMillion": 200,
//     "deathsPerOneMillion": 0,
//     "tests": 0,
//     "testsPerOneMillion": 0
//   },
//   {
//     "updated": 1587140875572,
//     "country": "Antigua and Barbuda",
//     "countryInfo": {
//       "_id": 28,
//       "iso2": "AG",
//       "iso3": "ATG",
//       "lat": 17.05,
//       "long": -61.8,
//       "flag": "https://raw.githubusercontent.com/NovelCOVID/API/master/assets/flags/ag.png"
//     },
//     "cases": 23,
//     "todayCases": 0,
//     "deaths": 3,
//     "todayDeaths": 1,
//     "recovered": 3,
//     "active": 17,
//     "critical": 1,
//     "casesPerOneMillion": 235,
//     "deathsPerOneMillion": 31,
//     "tests": 73,
//     "testsPerOneMillion": 745
//   },
//   {
//     "updated": 1587140875508,
//     "country": "Argentina",
//     "countryInfo": {
//       "_id": 32,
//       "iso2": "AR",
//       "iso3": "ARG",
//       "lat": -34,
//       "long": -64,
//       "flag": "https://raw.githubusercontent.com/NovelCOVID/API/master/assets/flags/ar.png"
//     },
//     "cases": 2669,
//     "todayCases": 98,
//     "deaths": 122,
//     "todayDeaths": 10,
//     "recovered": 631,
//     "active": 1916,
//     "critical": 121,
//     "casesPerOneMillion": 59,
//     "deathsPerOneMillion": 3,
//     "tests": 26457,
//     "testsPerOneMillion": 585
//   }
// }