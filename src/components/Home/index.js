import {useState, useEffect} from 'react'
import Loader from 'react-loader-spinner'

import TabItem from '../TabItem'
import Navbar from '../Navbar'

import './style.css'

const Home = () => {
  const [tablist, setTabList] = useState([])
  const [isloader, setLoader] = useState(false)
  const [activeTab, setActiveTab] = useState('')

  useEffect(() => {
    const apiCall = async () => {
      const responce = await fetch(
        'https://apis2.ccbp.in/restaurant-app/restaurant-menu-list-details',
      )
      const data = await responce.json()
      console.log(data[0])
      setTabList(data[0].table_menu_list)
      setLoader(true)
      const {menu_category_id: activdId} = data[0].table_menu_list[0]
      setActiveTab(activdId)
    }

    apiCall()
  }, [])

  console.log(tablist)

  const changeTab = id => {
    setActiveTab(id)
  }

  const restaurantContainer = () => (
    <div className="home-container">
      <ul className="tabs-container">
        {tablist.map(each => (
          <TabItem
            activeTab={activeTab}
            key={each.menu_category_id}
            tabItem={each}
            changeTab={changeTab}
          />
        ))}
      </ul>
    </div>
  )

  const loaderContainer = () => (
    <div className="loader-container">
      <Loader type="ThreeDots" color="#000" width="50px" height="50px" />
    </div>
  )

  return (
    <>
      <Navbar />

      {isloader ? restaurantContainer() : loaderContainer()}
    </>
  )
}

export default Home
