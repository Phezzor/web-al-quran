import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "./styles.css";

function Quran() {
    const [surah, setsurah] = useState([]);
    const [ayat, setayat] = useState([]);
    const [nomor, setnomor] = useState(1);
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState(""); 
    const [filteredSurah, setFilteredSurah] = useState([]); 

    useEffect(() => {
        fetch("https://equran.id/api/v2/surat")
            .then((response) => response.json())
            .then((data) => {
                setsurah(data.data);
                setFilteredSurah(data.data); 
            });
    }, []);

    useEffect(() => {
        fetch(`https://equran.id/api/v2/surat/${nomor}`)
            .then((response) => response.json())
            .then((data) => setayat(data.data.ayat));
    }, [nomor]);

    const convertToArabicNumber = (num) => {
        return num.toString().replace(/[0-9]/g, (digit) => "٠١٢٣٤٥٦٧٨٩"[digit]);
    };

    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);

        const filtered = surah.filter(
            (surat) =>
                surat.nama.toLowerCase().includes(query) ||
                surat.namaLatin.toLowerCase().includes(query) ||
                surat.arti.toLowerCase().includes(query)
        );
        setFilteredSurah(filtered);
    };

    return (
        <div className="w-screen min-h-screen flex flex-col lg:flex-row bg-gradient-to-r from-[#0C4340] via-[#0E423A] to-[#0E423A] text-white">
            
            <div className="pt-1"><Navbar /></div>
            
            {/* Tombol Toggle Sidebar di Mobile */}
            <button className=" lg:hidden bg-[#3aab9a] p-3 m-2 rounded-xl shadow-md mt-13"
                onClick={() => setSidebarOpen(!isSidebarOpen)}
            >
                Pilih Surah
            </button>

            {/* Sidebar Surah */}
            <div className={`sidebar overflow-y-scroll h-screen w-64 bg-[#0E423D] p-3 rounded-xl shadow-lg transition-all duration-300 
                ${isSidebarOpen ? "block" : "hidden"} lg:block`}>
                <h2 className="text-center text-xl font-bold mb-4">Daftar Surah</h2>

                {/* Input Pencarian */}
                <input
                    type="text"
                    placeholder="Cari surah..."
                    value={searchQuery}
                    onChange={handleSearch}
                    className="w-full p-2 mb-4 rounded-md bg-[#3b7068] text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1bf5d4]"
                />
                

                {/* Daftar Surah (Filtered) */}
                {filteredSurah.map((surat) => (
                    <div
                        key={surat.nomor}
                        onClick={() => { setnomor(surat.nomor); setSidebarOpen(false); }}
                        className="border mb-3 py-2 px-4 rounded-2xl shadow-md bg-[#3b7068] hover:bg-[#3aab9a] cursor-pointer transition duration-300">
                        <p className="text-xl font-semibold noto">
                            <span className="text-sm">{surat.nomor}. </span>{surat.nama}
                        </p>
                        <p className="text-sm font-bold">{surat.namaLatin} <span>- ({surat.jumlahAyat}) </span></p>
                        <p className="text-sm ">{surat.arti}</p>
                    </div>
                ))}
            </div>

            {/* Ayat */}
            <div className="w-full overflow-y-scroll h-screen mt-2 p-4">
                <div className="text-center mb-4">
                    <h1 className="text-3xl lg:text-4xl font-extrabold">Ramadhan <span className="text-[#2bccb4]">Kareem</span></h1>
                    <p className="italic text-md lg:text-lg">Bulan penuh berkah, mari perbanyak ibadah.</p>
                </div>
                {ayat.map((ayat) => (
                    <div key={ayat.nomorAyat} className="pb-4 rounded-xl">
                        <div className="border rounded-xl bg-[#3b7068] p-4 shadow-lg flex flex-col text-right">
                            <p className="text-2xl lg:text-3xl noto">
                                <span className="arabic-number mr-2">
                                    {convertToArabicNumber(ayat.nomorAyat)}
                                </span>
                                {ayat.teksArab}
                            </p>
                            <p className="p-2 italic text-[#1bf5d4]">{ayat.teksLatin}</p>
                            <p className="ml-2 text-sm lg:text-base">{ayat.teksIndonesia}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Quran;