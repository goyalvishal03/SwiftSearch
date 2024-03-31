const API_BASE_URL = 'https://google-web-search1.p.rapidapi.com/?'

const fetchSearchResults = async (query) => {
  const encodedQuery = encodeURIComponent(query);
  const response = await fetch(
    API_BASE_URL + 'query=' + encodedQuery + '&limit=20&related_keywords=true',
    {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'a6735afa62mshd31f2856f6d7364p141926jsnddf80e5f6e4f',
        'X-RapidAPI-Host': 'google-web-search1.p.rapidapi.com',
      },
    }
  );

  if (!response.ok) {
    throw new Error('API request failed');
  }

  return response.json();
};

export default fetchSearchResults;