import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID d6711c969d8ed846f0600bcaf16840eef87d09cbe905a9d820cdb75dd333c3f0'
  }
})
