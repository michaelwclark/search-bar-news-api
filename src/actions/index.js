const api_key = '8b8d07de6a6f40d7b42a56fcd49a07f7'

const URL_NEWS = 'https://newsapi.org/v2/everything?q=technology&+sortBy=publishedAt,relevancy,popularity&language=en&pageSize=10&apiKey=8b8d07de6a6f40d7b42a56fcd49a07f7'

const URL_ROOT = 'https://newsapi.org/v2/everything'
                                



export function getNews(keyword){

    const request = fetch(`${URL_ROOT}?q=${keyword}&+sortBy=relevancy&language=en&pageSize=10&apiKey=${api_key}`, { method: 'GET'})
                    .then(response => response.json());

    return{
      type: 'PARTICULAR_NEWS',
      payload:request
    }

  }



export function allTheNews() {

  const request = fetch(`${URL_NEWS}`, { method: 'GET' })
    .then(response => response.json());

  return {
    type: 'ALL_NEWS',
    payload: request

  }
  
}






