// pages/index.js

import Head from 'next/head'
import Header from '../components/Header'
import ProfileSection from '../components/ProfileSection'
import AboutSection from '@/components/AboutSection'
import ServicesSection from '@/components/ServicesSection'
import Myprojects from '@/components/Myprojects'
import TestimonialSection from '@/components/TestimonialSection'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer '

export default function Home() {
  return (
    <>
    <div className="min-h-screen  text-white" style={{backgroundColor : '#1E1E1E', paddingLeft: '55px',paddingRight: '55px'}}>
      <Head>
        <title>Muhammad Umair - UI & UX Designer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="container mx-auto px-4 py-12">
        <ProfileSection />
        <AboutSection/>
        <ServicesSection/>
        <Myprojects/>
        <TestimonialSection/>
        <Contact/>
        <Footer/>
      </main>
    </div>
    </>
  )
}