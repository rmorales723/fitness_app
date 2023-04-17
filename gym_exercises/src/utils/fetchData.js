export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '271c05965bmshc2a18060a0ea44ap111183jsnc39b13d0e9b4',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

  export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '271c05965bmshc2a18060a0ea44ap111183jsnc39b13d0e9b4',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    },
  };
  

export const fetchData = async (url, options) => {
    const response = await fetch(url, options)
    const data = await response.json()
    return data;
}