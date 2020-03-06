import React, {useState} from 'react';
import axios from 'axios'

export default () => {
  const [country, setCountry] = useState(null);

  useState(() => {
    axios
      .get('https://get.geojs.io/v1/ip/country')
      .then(resp => setCountry(resp.data))
      .catch(() => setCountry('error'))
  }, [country]);

  switch(country) {
    case null:    return <p>Loading...</p>
    case 'error': return <p>Something went wrong...</p>
    default:      return <p>You're in {country}</p>
  }
};
