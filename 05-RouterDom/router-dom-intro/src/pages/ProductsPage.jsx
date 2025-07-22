import React from 'react'
import Card from '../components/UI/Card'
import PageTitle from '../components/UI/PageTitle'

const ProductsPage = () => {
  return (
    <>
  <PageTitle title= {"Products"}/>
    <div className="container d-flex flex-wrap  gap-2 mt-3 justify-content-between">
        
        <Card/>
        <Card/>
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

export default ProductsPage
