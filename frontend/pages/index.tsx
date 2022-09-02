import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { User, UserPlus, ShoppingCart, Menu2, Clock, Home2, ShieldCheck, Heart, ArrowLeft, ArrowRight, CircleCheck } from 'tabler-icons-react';
import { Dispatch, SetStateAction, useState } from 'react'


type Features = {
  icon: any,
  title: string,
  description: string
}

type Catergory = {
  index?: number,
  title: string,
  image: string,
}

type Products = {
  title: string,
  image: string,
  price: number,
}

type Brands = {
  title: string,
  image?: string,
}

const Stars = () => {
  return (
    <div className="flex items-center">
      <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
      <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
      <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
      <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
      <svg aria-hidden="true" className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
    </div>
  )
}

const Category = ({ title, image, index }: Catergory) => {
  if (index === 0) {
    return (
      <div className='relative group md:col-span-2 md:row-span-2 bg-[url("/images/cat1.png")] bg-cover min-h-[160px] max-h-[450px] rounded-md  flex items-end '>
        <h1 className='p-2  text-xs md:text-base text-white font-bold bg-gray-400 w-44 text-center'>BIG APPLIENCES</h1>
      </div>
    )
  }
  else if (index === 1) {
    return (
      <div className='md:col-span-1 bg-[url("/images/cat2.png")] bg-cover rounded-md  flex items-end min-h-[160px]'>
        <h1 className='p-2 text-xs md:text-base text-white font-bold bg-gray-400 w-44 text-center'>SMALL APPLIENCES</h1>

      </div>
    )
  }
  else if (index === 2) {
    return (
      <div className='md:col-span-1 bg-[url("/images/cat3.png")] bg-cover rounded-md  flex items-end min-h-[160px]'>
        <h1 className='p-2 text-xs md:text-base text-white font-bold bg-gray-400 w-44 md:w-48 text-center'>SMALL ELECTRONICS </h1>

      </div>
    )
  }
  else {
    return (
      <div className='md:col-span-2  row-span-1 bg-[url("/images/cat4.png")] bg-cover h-52 rounded-md flex items-end'>
        <h1 className='p-2 text-xs md:text-base text-white font-bold bg-gray-400 w-44 text-center'>BIG ELECTRONICS</h1>

      </div>
    )
  }
}


const ProductsCard = ({ title, image, price }: Products) => {
  return (
    <div className='relative flex flex-col items-center   mb-8 bg-white  rounded-xl shadow-xl pb-4'>
      <img src={image} alt={title} className='   w-[500px] h-[170px]' />
      <div className='flex flex-start w-full mt-6 px-4'>
        <Stars />
      </div>

      <div className='flex justify-between items-center w-full mt-2 px-4'>
        <h1 className='text-sm text-gray-700 font-semibold ml-1'>Simple Product</h1>
        <Heart className='absolute right-4 bottom-7' />
      </div>
    </div>
  )
}


const Brands = [
  {
    title: 'BRAND A'
  },
  {
    title: 'BRAND B'
  },
  {
    title: 'BRAND C'
  },
  {
    title: 'BRAND D'
  },
  {
    title: 'BRAND E'
  },
  {
    title: 'BRAND F'
  }
]
const Products = [
  {
    title: 'EXEMPLE PRODUCT',
    image: '/images/product1.png',
  },
  {
    title: 'EXEMPLE PRODUCT',
    image: '/images/product1.png',
  },
  {
    title: 'EXEMPLE PRODUCT',
    image: '/images/product1.png',
  },
  {
    title: 'EXEMPLE PRODUCT',
    image: '/images/product1.png',
  },
  {
    title: 'EXEMPLE PRODUCT',
    image: '/images/product1.png',
  },
  {
    title: 'EXEMPLE PRODUCT',
    image: '/images/product1.png',
  },
  {
    title: 'EXEMPLE PRODUCT',
    image: '/images/product1.png',
  },
  {
    title: 'EXEMPLE PRODUCT',
    image: '/images/product1.png',
  }
]

const Categories = [
  {
    title: 'Catergory',
    image: '/images/cat1.png'
  },
  {
    title: 'Catergory',
    image: '/images/cat3.png'
  },
  {
    title: 'Catergory',
    image: '/images/cat2.png'
  },
  {
    title: 'Catergory',
    image: '/images/cat4.png'
  },

]

const Features = [
  {
    icon: <Clock size={35} color='#177B57' />,
    title: 'PROP HERE',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum'
  },
  {
    icon: <Home2 size={35} color='#177B57' />,
    title: 'PROP HERE',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum'
  },
  {
    icon: <ShieldCheck size={35} color='#177B57' />,
    title: 'PROP HERE',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum'
  },
  {
    icon: <ShieldCheck size={35} color='#177B57' />,
    title: 'PROP HERE',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum'
  },

]

const BrandsCard = ({ title }: Brands) => {
  return (
    <div className='bg-white  py-20 px-16 rounded shadow-md'>
      <h1 className='font-thin text-xs md:text-base mb-1 '>{title}</h1>
    </div>
  )
}

const FeaturesCard = ({ icon, title, description }: Features) => {
  return (

    <div className="relative flex flex-col items-center justify-center w-96 mb-2">

      <div className="flex items-center justify-center w-5 h-5 md:w-14 md:h-14 rounded-full bg-white shadow-md">
        {icon}
      </div>
      <h3 className="mt-4 text-sm md:text-lg font-semibold text-gray-700">{title}</h3>
      <p className="mt-3 text-[14px] text-gray-700 text-center">{description}</p>

    </div>
  )
}

type Props = {
  drop?: boolean | string;
  mode?: boolean | string;
  setMode: React.Dispatch<React.SetStateAction<boolean | string>>;
  setLogin: React.Dispatch<React.SetStateAction<boolean | string>>;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Login = ({setLogin} : Props) => {

  return (
    <div className="rounded px-8 pt-6 pb-6 h-full flex flex-col text-xs md:text-base">
      <h1 className='text-md md:text-lg text-center mt-2'>Lorem ipsum dolor sit amet consectetur</h1>
      <p className='text-center text-xs md:text-sm text-gray-900 mt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero eveniet</p>
      <div className="mt-10 mb-4">

        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="Fullname" type="text" placeholder="Full Name" />
      </div>
      <div className="mb-6">
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="shopName" type="text" placeholder="Shop Name" />
      </div>
      <div className="mb-6">
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="Business Email Address" type="text" placeholder="Business Email Address" />
      </div>
      <div className="mb-6">
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="username" type="text" placeholder="Username" />
      </div>
      <div className="mb-6">
        <input className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" id="password" type="password" placeholder="******************" />
        <p className="text-red text-xs italic">Please choose a password.</p>
      </div>
      <div className="mb-6">
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="phoneNumber" type="text" placeholder="123-45-678" />
      </div>
      <div className="flex items-center mb-4">
        <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300  " />
        <label htmlFor="default-checkbox" className="ml-2 text-sm font-thin tracking-wide">I have read and fully accept Marka's terms and conditions.</label>
      </div>
      <button  id="sign" onClick={() => setLogin('login')} className="bg-black text-white mt-1 py-3 px-4  focus:outline-none focus:shadow-outline" type="button">
        Sign Up
      </button>



    </div>
  )
}
const Retailer = ({ mode, setMode, setLogin }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full px-4">
      <h1 className={`text-3xl font-bold  ${!mode ? ' text-gray-100' : 'text-black'}`}>Are you a retailer?</h1>
      <p className={`text-gray-100  text-sm text-center mt-4 ${!mode ? ' text-gray-100' : 'text-black'}`}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
      <button onClick={() => { setMode(!mode), setLogin('retailer') }} id='button-modal' className="bg-white text-gray-800  py-2 px-10 mt-8 rounded-lg shadow-md hover:bg-gray-100">REGISTER AS A RETAILER</button>
    </div>
  )
}
const Supplier = ({ mode, setMode, setLogin }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full px-4">
      <h1 className={`text-md md:text-3xl font-bold ${mode ? ' text-gray-100' : 'text-black'}`}>Are you a supplier?</h1>
      <p className={`text-xs md:text-sm text-center mt-4 ${mode ? ' text-gray-100' : 'text-black'}`}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
      <button onClick={() => { setMode(mode == false ? false : false), setLogin('supplier') }} id='button-modal' className="bg-white text-gray-800  py-2 px-10 mt-8 rounded-lg text-xs md:text-base shadow-md hover:bg-gray-100">REGISTER AS A SUPPLIER</button>
    </div>
  )
}


export const Header = ({setModal, drop} :Props) => {
  return (
    <header className='bg-white  w-full  py-4'>
            <div className='flex justify-between items-center px-8 md:px-32'>
              <a href="/" className={styles.logo}>M</a>
              <div className='relative hidden md:flex items-center gap-12 '>
                <button className='drop' onClick={() => setModal(!drop)}><UserPlus strokeWidth={1.2} size={35} /></button>
                <button><ShoppingCart strokeWidth={1.2} size={35} /></button>
              </div>
              <button className='block md:hidden'><Menu2 /></button>
            </div>
          </header>
  )
}
const Success = ({setLogin, setMode, setModal} : Props) => {
  return (
    <div className='flex flex-col items-center p-8'>
      <h1 className='text-md md:text-3xl text-gray-700 tracking-wider  text-center mb-2'>Thank you for registering</h1>
      <CircleCheck size={124} strokeWidth={0.5}/>
      <p className='text-gray-700 text-xs md:text-base text-center mt-4 md:mx-20'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
      <button onClick={() => {setLogin(false), setModal(false), setMode(false)}} className='mt-9 px-20 md:px-32 bg-bag-def py-3 text-xs md:text-base text-white font-semibold rounded-md'>Back Home</button>
    </div>
  )
}

const Home: NextPage = () => {
  const [drop, setDrop] = useState(false)
  const [modal, setModal] = useState(false)
  const [mode, setMode] = useState<string | boolean>(false);
  const [login, setLogin] = useState<string | boolean>(false);
  if (typeof window !== 'undefined') {
    document.addEventListener('click', (event: any) => {

      if (!event.target.closest('.drop') && !event.target.closest('#popup-modal') && !event.target.closest('#button-modal') && !event.target.closest('#retailer') && !event.target.closest('#sign')) {
        setModal(false)
        setMode(false)
        setLogin(false)
      }
    });

  }


  return (
    <div>
      <Head>
        <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Open+Sans:300,400,600,700&amp;lang=en" />

        <title>Marka</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='relative'>
        <div className={`${styles.bg} ${modal ? 'block' : 'hidden'}`}></div>
        <div>
          <Header setModal={setModal} drop={drop} />
          <section className={`${styles.first} px-8 md:px-32`}>
            <div className='mt-0 md:mt-4 text-center md:text-start  py-32'>
              <h2 className='font-bold mb-2 md:mb-0 text-[12px] md:text-[16px]  tracking-[0.315em] text-white'>VISION STATEMENT</h2>
              <h1 className='mb-2 md:mb-0 font-bold text-[20px] md:text-[50px]  tracking-[0.245em] text-white'>MARKETING STATMENT</h1>
              <p className='text-[14px] tracking[0.5[x] max-w-[780px] text-white leading-]22px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
              <button onClick={() => { setModal(!drop), setLogin('retailer'), setMode(!mode) }} id='retailer' className='mt-8 md:mt-14 bg-white px-10 md:px-24 py-3 rounded-md text-xs md:text-base'>REGISTER AS RETAILER</button>
            </div>
            <div className='hidden md:block'>
              <img src='/illus.svg' className={styles.illus} />
            </div>
          </section>
          <div className={`${styles.modal} ${modal ? 'block' : 'hidden'} overflow-y-auto overflow-x-hidden  absolute md:fixed top-0 right-0 left-0  h-full `}>
            <div id="popup-modal" className="relative  mx-auto  w-full max-w-5xl  h-full md:h-auto md:mt-64 ">
              <div className={`relative bg-white rounded-lg shadow-xl ${!login && 'h-[640px]'} flex flex-col md:flex-row`}>
                <div className={`${login === 'login' ? 'hidden' : 'block'} ${mode ? styles.supplier : 'white'} md:w-1/2`}>

                  {login == 'supplier' ? <Login setLogin={setLogin} /> : <Supplier mode={mode} setMode={setMode} setLogin={setLogin} />}

                </div>
                <div className={`${login === 'login' ? 'hidden' : 'block'} ${!mode ? styles.supplier : 'white'} md:w-1/2 `}>
                  {login == 'retailer' ? <Login setLogin={setLogin} /> : <Retailer mode={mode} setMode={setMode} setLogin={setLogin} />}
                </div>
                <div  className={`${login === 'login' ? 'block' : 'hidden'} w-full`}>
                  <Success  setLogin={setLogin} setModal={setModal} setMode={setMode}/>
                </div>
              </div>
            </div>
          </div>

          <section className='bg-gray-100'>
            <section className={`${styles.second} px-8 md:px-32 flex flex-col`}>
              <div className='flex flex-wrap mt-10 gap-2 justify-center  lg:justify-between'>
                {Features.map((feature, index) => (
                  <FeaturesCard key={index} {...feature} />
                ))}

              </div>
            </section>
            <section className='relative mt-20  px-8 md:px-32 '>
              <h1 className='text-gray-800 font-semibold tracking-wide text-md text-center'>SHOP BY CATEGORY</h1>
              <p className='text-center text-gray-600 text-md font-light mt-1'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
              <div className='mt-14  grid grid-cols-1 md:grid-cols-4  md:grid-rows-2 gap-4'>
                {Categories.map((category, index) => (
                  <Category key={index} index={index} {...category} />
                ))}
              </div>
            </section>
            <section className='mt-20 mb-40 px-8 md:px-32'>
              <h1 className='text-center text-gray-800 font-semibold tracking-wide text-xs md:text-base'>LATEST HITS</h1>
              <p className='text-center text-gray-600 text-xs md:text-base font-light mt-1'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
              <div className='hidden md:flex items-center mt-8 justify-end text-blue-400 gap-1 '>
                <h1 className='text-en cursor-pointer'>View more</h1>
                <ArrowRight size={20} />
              </div>

              <div className='mt-18 grid grid-cols-1  md:grid-cols-4   place-items-center mt-2 gap-6 '>
                {Products.map((product, index) => (
                  <ProductsCard price={0} key={index} {...product} />
                ))}
              </div>
            </section>
            <section className='mb-10 '>
              <div className="bg-[url('/images/supp.jpeg')]  h-[450px] w-full bg-cover flex items-center md:pl-32">
                <div className=' text-center md:text-start '>
                  <h2 className='font-bold mb-2 md:mb-0 text-[12px] md:text-[16px]  tracking-[0.315em] text-white'>VISION STATEMENT</h2>
                  <h1 className='mb-2 md:mb-0 font-bold text-[20px] md:text-[45px]  tracking-[0.245em] text-white'>MARKETING STATMENT</h1>
                  <p className='text-[14px] tracking[0.5[x] max-w-[720px] text-white leading-]22px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                  <button onClick={() => { setModal(!drop), setLogin('supplier'), setMode(mode) }} id='retailer' className='mt-8 md:mt-14 bg-white px-10 md:px-24 py-3 rounded-md text-xs md:text-base'>REGISTER AS SUPPLIER</button>
                </div>
              </div>
            </section>
            <section className='text-center pb-20 px-8 md:px-32'>
              <h1 className='text-gray-800 font-semibold tracking-wide text-xs md:text-base'>OUR BRANDS</h1>
              <div className='mt-8 flex flex-col  md:flex-row items-center  gap-8 md:gap-0 md:justify-between'>
                {Brands.map((brand, index) => (
                  <BrandsCard key={index} {...brand} />
                ))}
              </div>
            </section>
          </section>
          <footer>
            <div className='bg-black py-8 md:px-32 text-center md:text-start'>
                <h1 className={styles.logo2}>M</h1>
                <h2 className='mt-3 mb-2 md:mb-0 text-xs md:text-sm  tracking-[0.215em]  md:tracking-[0.615em] text-white'>VISION STATEMENT</h2>
            <div className='hidden md:block mt-8 w-full h-[1px] bg-gray-100 mx-auto'></div>
            <h1 className='text-gray-200 text-sm tracking-wide text-center mt-4'>©2022 MARKA. All rights reserved.</h1>
            </div>
          </footer>
        </div>
      </main>
    </div>
  )
}



export default Home


/*

<div className='mt-32 mb-32 w-full flex flex-col items-center'>
              <h2 className='uppercase font-semibold text-center mb-20'>SHOP BY CATEGORY</h2>
              <div className='flex flex-col md:flex-row gap-32'>
                {Catergories.map((catergory, index) => (
                  <Catergory key={index} {...catergory} />
                ))}
              </div>
            </div>

            <div className='mt-13 flex flex-col items-center text-center'>
              <h2 className='uppercase font-semibold  mb-8'>LATEST HITS</h2>
              <p className='w-[703px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
              <div className='grid grid-cols-4 gap-16 mt-12'>
                {Products.map((product, index) => (
                  <ProductsCard price={0} key={index} {...product} />
                ))} 
              </div>
            </div>
*/


/*

<div className={`${drop ? 'block' : 'hidden'} absolute top-[52px] right-[5px] bg-white shadow-lg w-48`}>
                  <p className='text-xs text-gray-500 uppercase text-center pb-2 pt-1'>Signup as:</p>
                  <ul className='text-center text-sm  '>
                    <li className='px-4 py-2 hover:bg-gray-100 uppercase'><a href="#">Supplier</a></li>
                    <li className='px-4 py-2 hover:bg-gray-100 uppercase'><a href="#">Recruiter</a></li>
                  </ul>
                </div>

                */