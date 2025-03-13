import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate(); // Aktifkan useNavigate

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#0C4340] via-[#0E423A] to-[#0E423A] text-white flex flex-col items-center p-6 relative shadow-lg">
      <img className="absolute inset-0 w-full h-full opacity-20" src="https://static.vecteezy.com/system/resources/previews/008/557/913/non_2x/ramadhan-pattern-with-dark-blue-gradient-vector.jpg  " alt="" />

      {/* Header */}
      <h1 className="text-4xl font-extrabold top-5 left-5 noto drop-shadow-lg justify-items-center rounded-xl p-4">
        <span className="text-[#2bccb4]">Al-</span>Qur'an
      </h1>

      {/* Grid Menu */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-24 w-full max-w-5xl ">
        {/* Card Qur'an */}
        <div
          className="card bg-white text-green-900 p-6 rounded-lg shadow-md duration-300 ease-in-out transition-transform transform hover:scale-110 cursor-pointer hover:shadow-xl shadow-[#2bccb4]"
          onClick={() => navigate("/quran")}
        >
          <h2 className="text-2xl font-bold text-center">Qur'an</h2>
          <p className="text-sm mt-2 text-center">Baca ayat suci Al-Qur'an dengan terjemahan.</p>
        </div>

        {/* Card Tafsir */}
        <div
          className="card bg-white text-green-900 p-6 rounded-lg shadow-md duration-300 ease-in-out transition-transform transform hover:scale-110 cursor-pointer hover:shadow-xl shadow-[#2bccb4]"
          onClick={() => navigate("/tafsir")}
        >
          <h2 className="text-2xl font-bold text-center">Tafsir</h2>
          <p className="text-sm mt-2 text-center">Pelajari tafsir ayat-ayat dalam Al-Qur'an.</p>
        </div>

        {/* Card Doa */}
        <div
          className="card bg-white text-green-900 p-6 rounded-lg shadow-md duration-300 ease-in-out transition-transform transform hover:scale-110 cursor-pointer hover:shadow-xl shadow-[#2bccb4]"
          onClick={() => navigate("/doa")}
        >
          <h2 className="text-2xl font-bold text-center">Doa</h2>
          <p className="text-sm mt-2 text-center">Kumpulan doa sehari-hari yang bermanfaat.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
