import axios from 'axios';

export type ParamsJob = {
  query: string;
  page: string;
  num_pages: string;
  date_posted: string;
};
export const fetchPopularJob = async (params?: ParamsJob) => {
  const options = {
    params: {...params},
    headers: {
      'x-rapidapi-key': 'abf6030450mshf2ae10569553dccp1b380ejsn661cb8ae8321',
      'x-rapidapi-host': 'jsearch.p.rapidapi.com',
    },
  };

  const url = 'https://jsearch.p.rapidapi.com/search';

  return await axios
    .get(url, options)
    .then(res => {
      return res.data.data;
    })
    .catch(e => console.log(e));
};
