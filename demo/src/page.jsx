import React from 'react'
import Header from './header'
import Footer from './footer'

function Page() {
  return (
    <div>
      <h1>Simple example for composition</h1>
        <Header/>
        <main>
            This is a ecommerce website
        </main>
        <Footer/>
    </div>
  )
}

export default Page;