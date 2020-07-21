import axios from 'axios'

const KEY = "AIzaSyBI7TOL67tQ6AlW2K4FKYUiRS5f9cpTdjM"

const youtube = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/'
})

const params = {
  part: 'snippet',
  maxResults: 40,
  key: KEY,
  regionCode: 'JP',
  type: 'video'
}

export const fetchPopularData = async () => {
  return await youtube.get('/videos', {
    params: {
      ...params,
      chart: 'mostpopular'
    }
  })
}

export const fetchSelectedData = async (id) => {
  return await youtube.get('videos', {
    params: {
      ...params,
      id
    }
  })
}