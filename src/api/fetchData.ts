// import axios from 'axios'

import { store } from '../localDB/data'

export type TStoreKey = keyof typeof store

export const fetchData = async (pageName: TStoreKey) => {
  // const URL = `${import.meta.env.VITE_API_PATH}/${pageName}`
  try {
    // const { data } = await axios.get(URL)
    return store[pageName]
  } catch (error) {
    console.log('error fetch data func')
    return null
  }
}
