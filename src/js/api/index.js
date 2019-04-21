require('isomorphic-fetch');
import CONSTANTS from '../utils/const';


const { HOST, KEY, PATH } = CONSTANTS.API;

const { MOVIES_POPULAR, TV_POPULAR, PEOPLE_POPULAR, MOVIES, TV, PEOPLE } = PATH;

const handleErrors = (res) => {
  if (!res.ok) {
    throw Error(res.statusText);
  }

  return res.json();
};

const get = ({ path, subpath = '', params = '' }) => {
  const config = `${HOST}/${path}${subpath}?api_key=${KEY}${params}`;
  const req = new Request(config);
  return fetch(req).then(res => handleErrors(res));
};

const api = {
  getPopularMovies: () => {
    const config = {
      path: MOVIES_POPULAR,
      params: '&total_results=20'
    };

    return get(config);
  },
  getMovie: (id) => {
    const config = {
      path: MOVIES,
      subpath: `/${id}`,
    };

    return get(config);
  },
  getPopularTv: () => {
    const config = {
      path: TV_POPULAR,
      params: '&total_results=20'
    };

    return get(config);
  },
  getTv: (id) => {
    const config = {
      path: TV,
      subpath: `/${id}`,
    };

    return get(config);
  },
  getPopularPeople: () => {
    const config = {
      path: PEOPLE_POPULAR,
      params: '&total_results=20'
    };

    return get(config);
  },
  getPeople: (id) => {
    const config = {
      path: PEOPLE,
      subpath: `/${id}`,
    };

    return get(config);
  }
};

export default api;
