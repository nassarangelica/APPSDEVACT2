import React, { useState } from 'react'
import ProductCard from './component/ProductCard';
import Sidebar from './component/Sidebar';

function App() {

  const [Search, setSearch] = useState("");
  
  const product = [
    {
      id: 1,
      image: "./1.png",
      name: "Taylor Swift",
      price: "$140",
      description: "Taylor Swift’s self-titled debut studio album, released on October 24, 2006, marked her breakthrough into the country music scene. Written during her teenage years, the album captures themes of love, heartbreak, friendship, and self-discovery, reflecting her personal experiences. ",
    },
    {
      id: 2,
      image: "./2.png",
      name: "Fearless (Taylor's Version)",
      price: "$90",
      description: "Fearless is the second studio album by American singer-songwriter Taylor Swift, released on November 11, 2008, in North America through Big Machine Records and later internationally in 2009. "
    },
    {
      id: 3,
      image: "./3.png",
      name: "Speak Now (Taylor's Version)",
      price: "$160",
      description: "Speak Now is the third studio album by American singer-songwriter Taylor Swift, released on October 25, 2010, through Big Machine Records. Written entirely by Swift during her 2009–2010 tour, the album reflects her transition from adolescence to adulthood with deeply personal, confessional songwriting."
    },
    {
      id: 4,
      image: "./4.png",
      name: "Red (Taylor's Version)",
      price: "$170",
      description: "Red, released on October 22, 2012, is Taylor Swift’s fourth studio album and a pivotal moment in her career. Marketed as her final country album, it bridges her country roots with a bold pop crossover. "
    },
    {
      id: 5,
      image: "./5.png",
      name: "1989 (Taylor's Version)",
      price: "$450",
      description: "Taylor Swift’s 1989, released on October 27, 2014, marked a pivotal shift in her career as she transitioned from country to full-fledged pop. Inspired by 1980s synth-pop, the album featured polished production from Max Martin, Shellback, Jack Antonoff, and others, showcasing lush synthesizers, drum machines, and layered vocals."
    },
    {
      id: 6,
      image: "./6.png",
      name: "Reputation",
      price: "$140",
      description: "Taylor Swift’s Reputation is her sixth studio album, released on November 10, 2017, through Big Machine Records. Conceived amid intense media scrutiny and public feuds, the album marked a reinvention of Swift’s image from “America’s Sweetheart” to a darker, more defiant persona."
    },
    {
      id: 7,
      image: "./7.png",
      name: "Lover",
      price: "$140",
      description: "Lover is her seventh studio album, released on August 23, 2019, through Republic Records. Marking her first project after parting ways with Big Machine Records, the album symbolized creative freedom and a softer, romantic reinvention following the darker Reputation era. ",
    },
    {
      id: 8,
      image: "./8.png",
      name: "Folklore",
      price: "$140",
      description: "Folklore is Taylor Swift’s eighth studio album, released on July 24, 2020, through Republic Records as a surprise during the COVID-19 pandemic. Conceived in quarantine, the album marked a major shift in Swift’s artistry, embracing fictional storytelling, character-driven narratives, and a cottagecore-inspired aesthetic.",
    },
    {
      id: 9,
      image: "./9.png",
      name: "Evermore",
      price: "$140",
      description: "Evermore is Taylor Swift’s ninth studio album, released as a surprise on December 11, 2020, through Republic Records. Conceived as the “sister record” to Folklore, it continues Swift’s exploration of indie folk, folk-pop, and alternative rock, created primarily with Aaron Dessner at Long Pond Studio during the COVID-19 pandemic.",
    },
    {
      id: 10,
      image: "./10.png",
      name: "Midnights",
      price: "$150",
      description: "Midnights is the tenth studio album by American singer-songwriter Taylor Swift, released on October 21, 2022, through Republic Records. Conceived as a concept album inspired by her sleepless nights, it explores themes of regret, self-criticism, infatuation, heartbreak, and revenge.",
    },
    {
      id: 11,
      image: "./11.png",
      name: "The Tortured Poets Department",
      price: "$160",
      description: "The Tortured Poets Department is Taylor Swift’s eleventh studio album, released on April 19, 2024, through Republic Records. Crafted alongside Jack Antonoff and Aaron Dessner, Swift described it as her “lifeline” album, born from the intense media scrutiny during her Eras Tour. ",
    },
    {
      id: 12,
      image: "./12.png",
      name: "The Life of a Show Girl",
      price: "$800",
      description: "The Life of a Showgirl, is set for release on October 3, 2025, through Republic Records. Conceived during the European leg of her record-breaking Eras Tour, the album reflects Swift’s experiences behind the scenes of her life as an entertainer. ",
    }
  ];

 const prodData = product.filter((prod) => {
    return prod.name.toLowerCase().includes(Search.toLowerCase()) || 
           prod.price.toLowerCase().includes(Search.toLowerCase())
  });

  return (
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('./bg.png')" }}>
     
      {/* Header sa albums */}
      <header className="w-full bg-black/70 text-white px-8 py-4 flex flex-col md:flex-row md:items-center md:justify-between shadow-md gap-4">
        <h1 className="text-2xl font-bold">Albums</h1>
        
        {/* New Find Products Search Bar */}
        <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-md w-full md:w-96">
          <input
            type="text"
            placeholder="Find Products..."
            value={Search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full text-black outline-none bg-transparent"
          />
        </div>
      </header>

      {/* Product Grid */}
      <main className="p-10 flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
          {prodData.map((proditem) => (
            <ProductCard 
              key={proditem.id} 
              image={proditem.image} 
              name={proditem.name} 
              price={proditem.price} 
              description={proditem.description} 
              onBuy={() => console.log(`Thank you for buying: ${proditem.name}`)} 
            />
          ))}
        </div>
      </main>

      {/* Footer */}
    <footer className="bg-black/80 text-white text-center py-4">
      <p>&copy; {new Date().getFullYear()} My Album Store. Nassar Project Appsdev 2025.</p>
    </footer>
  </div>
  )
}

export default App;