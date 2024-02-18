import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';
import City from './City';

function App() {
  const key = 'c17bc3b039b1b73de4e0175c6792ff96';
  const [search, setSearch] = useState('');
  const [city, setCity] = useState(null); 
  useEffect(() => {
    async function getApi() {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`
        );
        console.log(response);
        setCity(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setCity(null); 
      }
    }

    getApi();
  }, [search]);

  return (
    <div className='App'>
      <div className='flex flex-col items-center mt-10 mb-5 pt-0'> 
        <input
          onChange={(e) => setSearch(e.target.value)}
          type='text'
          placeholder='Placeholder'
          className='px-3 w-[250px] py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring '
        />
        <City city={city}/>
      </div>
    </div>
  );
}

export default App;
