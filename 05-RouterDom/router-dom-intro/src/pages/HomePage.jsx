import React from 'react'
import Card from '../components/UI/Card'
import PageTitle from '../components/UI/PageTitle'

const HomePage = () => {
  return (
    <>
   <PageTitle title= {"Home Page"}/>
 <img src="https://picsum.photos/1200/600" class="img-fluid w-100" alt="..."></img>
 <div className="container d-flex flex-wrap  gap-2 mt-3 justify-content-between">
  <Card/>
  <Card/>
  <Card/>
  <Card/>
  <Card/>
  <Card/>
  <Card/>
  <Card/>
  
 </div>

    
    </>
  )
}

export default HomePage
