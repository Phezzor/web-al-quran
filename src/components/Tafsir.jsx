import { useEffect, useState } from "react";
import Navbar from "./Navbar";

function Tafsir() {
    const [surahList, setSurahList] = useState([]);
    const [selectedSurah, setSelectedSurah] = useState(1);
    const [tafsir, setTafsir] = useState(null);
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    useEffect(() => {
        fetch("https://equran.id/api/v2/surat")
            .then((res) => res.json())
            .then((data) => setSurahList(data.data))
            .catch((err) => console.error("Error fetching surah list:", err));
    }, []);

    useEffect(() => {
        fetch(`https://equran.id/api/v2/tafsir/${selectedSurah}`)
            .then((res) => res.json())
            .then((data) => setTafsir(data.data))
            .catch((err) => console.error("Error fetching tafsir:", err));
    }, [selectedSurah]);

    return (
        <div className="w-screen min-h-screen flex flex-col lg:flex-row bg-gradient-to-r from-[#0C4340] via-[#0E423A] to-[#0E423A] text-white ">
            <div className="pt-"><Navbar /></div>
            
            {/* Tombol Toggle Sidebar di Mobile */}
            <button
                className="lg:hidden bg-[#3aab9a] p-3 m-2 rounded-md shadow-md mt-12"
                onClick={() => setSidebarOpen(!isSidebarOpen)}
            >
                Pilih Surah
            </button>
            

            {/* Sidebar daftar surah */}
            <div
                className={`sidebar overflow-y-scroll h-screen w-64 bg-[#0E423D] p-3 rounded-xl shadow-lg transition-all duration-300
                ${isSidebarOpen ? "block" : "hidden"} lg:block`}
            >
                <h2 className="text-center text-xl font-bold mb-4">Daftar Surah</h2>
                {surahList.map((surah) => (
                    <div
                        key={surah.nomor}
                        onClick={() => { setSelectedSurah(surah.nomor); setSidebarOpen(false); }}
                        className="border mb-3 py-2 px-4 rounded-2xl shadow-md bg-[#3b7068] hover:bg-[#3aab9a] cursor-pointer transition duration-300"
                    >
                        <p className="text-xl font-semibold noto">
                            <span className="text-sm">{surah.nomor}. </span>{surah.nama}
                        </p>
                        <p className="text-sm font-bold">{surah.namaLatin} <span>- ({surah.jumlahAyat}) </span></p>
                        <p className="text-sm ">{surah.arti}</p>
                    </div>
                ))}
            </div>

            {/* Konten Tafsir */}
            <div className="w-full overflow-y-scroll h-screen mt-10 p-4">
                {tafsir ? (
                    <div className="border rounded-xl bg-[#3b7068] p-6 shadow-lg">
                        <h2 className="text-2xl font-bold text-center">{tafsir.namaLatin}</h2>
                        {tafsir.tafsir.map((item, index) => (
                            <div key={index} className="mt-4">
                                <h3 className="text-lg font-semibold">Ayat {item.ayat}</h3>
                                <p className="text-sm italic">{item.teks}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-center">Loading...</p>
                )}
            </div>
        </div>
    );
}

export default Tafsir;
