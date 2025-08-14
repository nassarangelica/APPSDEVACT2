import React, { useState } from 'react'
import ProductCard from './component/ProductCard';
import Ads from './component/ads';
import Sidebar from './component/sidebar';

function App() {

  const [Search, setSearch] = useState("");
  
  const product = [
    {
      id: 1,
      image: "./1.jpg",
      name: "Logitech G502 X Plus",
      price: "$140",
      description: "The G502 X Plus is the latest in a long line of G502 winners. The wireless pointer packs a seriously smooth sensor and a wad of extra buttons",
    },
    {
      id: 2,
      image: "./2.jpg",
      name: "Logitech G Pro X",
      price: "$90",
      description: "Logitech G Pro X Superlight 2 DEX, With its improved form factor, fantastic clicks, and speedy sensor, this isn't just the best Logitech gaming mouse, it's the best pointer I've used so far"
    },
    {
      id: 3,
      image: "./3.jpg",
      name: "Logitech G203",
      price: "$160",
      description: "Logitech G203 Wired Gaming Mouse - 8,000 DPI - LIGHTSYNC RGB - 6 Programmable Buttons"
    },
    {
      id: 4,
      image: "./4.jpg",
      name: "Gigabyte M32UC",
      price: "$170",
      description: "The Gigabyte M32UC packs in a 4K resolution and a 144Hz refresh rate all for an all-star price point which few of its competitors can claim."
    },
    {
      id: 5,
      image: "./5.jpg",
      name: "Asus TUF Gaming VG289Q",
      price: "$450",
      description: "The Asus TUF Gaming VG289Q is an outstanding value for the asking price. You get a beautiful 28-inch 4K display with all kinds of options for adjustments at an entry-level price range."
    },
    {
      id: 6,
      image: "./6.jpg",
      name: "Samsung Odyssey OLED G9",
      price: "$500",
      description: "The Samsung Odyssey OLED G9 doesn't come cheap, but it features a superfast 240Hz refresh rate, and an incredible 32:9 aspect ratio making the most of its extended 1440p resolution."
    }
  ];

  const prodData = product.filter((prod) => {
    return prod.name.toLowerCase().includes(Search.toLocaleLowerCase()) || prod.price.toLowerCase().includes(Search.toLocaleLowerCase())
  })


  return (
    <div className='w-auto h-auto flex items-center justify-center'>
      <div className='absolute left-15 top-50 fixed'>
            <Sidebar Search={Search} setSearch={setSearch}/>
          </div>
      <div className='flex flex-wrap gap-8 w-1/2 justify-center p-0 m-10'>
        {prodData.map((proditem) => (
          <ProductCard key={proditem.id} image={proditem.image} name={proditem.name} price={proditem.price} description={proditem.description} onBuy={() => console.log(`Thank you for buying: ${product.name}`)} />
        ))}
      </div>
          <div className='absolute right-5 fixed top-10'>
            <Ads/>
          </div>
          
    </div>

  )
}

export default App
