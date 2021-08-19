import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import { render } from "react-dom";
import Select, { components } from "react-select";

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

            </div>

            <div className="country-detailed-data"> 
            </div>

          </div>

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