import { useEffect } from "react"
import { fetchDataFromApi } from "./utils/api"
import { useSelector, useDispatch } from 'react-redux'
import { getApiConfigurations } from "./features/homeSlice"

function App() {
  const dispatch=useDispatch()
  const {url}=useSelector((state)=>state?.home)
  useEffect(()=>{
    apitesting()
  },[])
  const apitesting=()=>{
    fetchDataFromApi('/movie/popular')
    .then((res)=>{
      console.log(res);
      dispatch(getApiConfigurations(res))
    })
  }
useEffect
  return (
   <div className='App'>App
   {url?.total_pages}
   </div>
  )
}

export default App
