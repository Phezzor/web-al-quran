import { useEffect, useState } from "react";
import Navbar from "./Navbar";
function Doa() {
  const [doa, setDoa] = useState([]);

  useEffect(() => {
    fetch("https://open-api.my.id/api/doa")
      .then((res) => res.json())
      .then((data) => setDoa(data));
  }, []);

  return (
    <div className="w-screen min-h-screen bg-gradient-to-r from-[#0C4340] via-[#0E423A] to-[#0E423A] text-white flex flex-col items-center p-6">
        <img className="absolute inset-0 w-full h-full opacity-20" src="https://static.vecteezy.com/system/resources/previews/008/557/913/non_2x/ramadhan-pattern-with-dark-blue-gradient-vector.jpg  " alt="" />
      
        
      {/* Header */}
      
      <h1 className="text-4xl font-extrabold text-[#2bccb4] mb-8 shadow-xl">
        Kumpulan Doa Sehari-hari
      </h1>
      

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-7xl">
        {doa.slice(0, 24).map((item, index) => (
          <div
            key={index}
            className="bg-white text-green-900 p-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-[#2bccb4] cursor-pointer"
          >
            <h2 className="text-xl font-bold mb-2 text-center"><span className="mr-1">{item.id}.</span>{item.judul}</h2>
            <p className="text-sm text-center noto">{item.arab}</p>
            <p className="text-xs text-gray-600 italic text-center mt-2 font-bold">
              {item.latin}
            </p>
            <p className="text-xs text-black italic text-center mt-2">{item.terjemah}</p>
          </div>
        ))}
      </div>
      <Navbar/>
    </div>
  );
}

export default Doa;
