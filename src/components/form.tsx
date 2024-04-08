import React, { useEffect, useState } from "react";
import { IStation, ITrip } from "../interfaces";
import Button from "./butoon";
import Detail from "./detail";
import moment from "moment";

const Form = () => {
    const [trips, setTrips] = useState<ITrip[]>([]);
    const [stations, setStations] = useState<IStation[]>([]);
    const [fromStations, setFromStations] = useState<string>("");
    const [toStations, setToStations] = useState<string>("");
    const [startTime, setStartTime] = useState("");

    useEffect(() => {
        const fetchStations = async () => {
            const data = await fetch("http://localhost:3000/stations");
            const responseData = await data.json();
            setStations(responseData.data);
        };

        fetchStations();
    }, []);

    const AddTripHandle = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:3000/trips/search", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify({
                    fromStations: fromStations,
                    toStations: toStations,
                    startTime: startTime,
                }),
            });
            const data = await response.json();
            setTrips(data.data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <div
                className={`w-[63.5rem] rounded-xl pl-4 pr-4 pb-4 ml-auto mr-auto bg-white  bottom-[115px] left-[370px]`}
            >
                <div className="flex items-center justify-center pt-6 pb-6">
                    <a
                        href="#"
                        className="flex items-center w-[9.3rem] justify-center gap-3 pb-3 border-b-4 border-[#2474E5] text-[#2474E5]"
                    >
                        <i className="fa-solid fa-bus-simple fa-xl text-[#2474E5]"></i>
                        <p>Xe khách</p>
                    </a>
                    <a href="#" className="flex items-center w-[9.3rem] justify-center gap-3 pb-3">
                        <i className="fa-solid fa-jet-fighter-up fa-xl text-[#474747]"></i>
                        <p>Máy bay</p>
                    </a>
                    <a href="#" className="flex items-center w-[9.3rem] justify-center gap-3 pb-3">
                        <i className="fa-solid fa-train-subway fa-xl text-[#474747]"></i>
                        <p>Tàu hỏa</p>
                    </a>
                    <a href="#" className="flex items-center w-[9.3rem] justify-center gap-3 pb-3">
                        <i className="fa-solid fa-motorcycle"></i>
                        <p>Thuê xe</p>
                    </a>
                </div>
                <div className="ml-[4.25rem]">
                    <form action="" className="flex" onSubmit={AddTripHandle}>
                        {/* input Nơi xuất phát */}
                        <div className="flex items-center gap-2 w-[230px] h-[54px] pl-[23px] border-[2px] border-[#F2F2F2]">
                            <img src="/public/tron.png" alt="" className="w-6 h-6" />
                            <div className="flex flex-col">
                                <label htmlFor="" className="text-[#B8B8B8] text-[12px] font-normal">
                                    Nơi xuất phát
                                </label>
                                <select
                                    name="from"
                                    className="text-[#141414] font-medium text-[15.25px] outline-0 appearance-none"
                                    onChange={(e) => setFromStations(e.target.value)}
                                    value={fromStations}
                                >
                                    <option value="">Chọn nơi xuất phát</option>
                                    {stations.map((item) => (
                                        <option key={item._id} value={item._id}>
                                            {item.province}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        {/* input Nơi đến */}
                        <div className="flex items-center gap-2 w-[230px] h-[54px] pl-[23px] border-[2px] border-[#F2F2F2]">
                            <img src="/public/viTri.png" alt="" className="w-6 h-6" />
                            <div className="flex flex-col">
                                <label htmlFor="" className="text-[#B8B8B8] text-[12px] font-normal">
                                    Nơi đến
                                </label>
                                <select
                                    name="to"
                                    className="text-[#141414] font-medium text-[15.25px] outline-0 appearance-none"
                                    onChange={(e) => setToStations(e.target.value)}
                                    value={toStations}
                                >
                                    <option value="">Chọn nơi xuất phát</option>
                                    {stations.map((item) => (
                                        <option key={item._id} value={item._id}>
                                            {item.province}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        {/* input Ngày đi */}
                        <div className="flex items-center gap-2 w-[230px] h-[54px] pl-[23px] border-[2px] border-[#F2F2F2]">
                            <img src="/public/lich.png" alt="" className="w-6 h-6" />
                            <div className="flex flex-col">
                                <label htmlFor="" className="text-[#B8B8B8] text-[12px] font-normal">
                                    Ngày đi
                                </label>
                                <input
                                    type="date"
                                    min={moment().format("YYYY-MM-DD")}
                                    onChange={(e) => setStartTime(e.target.value)}
                                ></input>
                            </div>
                        </div>
                        {/* input Thêm ngày về */}
                        <Button title="Tìm kiếm" backgroundColor="#FFD333" width="148px" height="56px" />
                    </form>
                </div>
            </div>
            <Detail trips={trips} />
        </div>
    );
};

export default Form;
