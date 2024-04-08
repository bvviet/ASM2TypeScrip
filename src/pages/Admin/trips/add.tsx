import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/butoon";
function FormAdmin() {
    const navigate = useNavigate();
    interface Station {
        _id: number;
        name: string;
        province: string;
    }
    interface BusHouses {
        _id: number;
        name: string;
    }
    const [stations, setStations] = useState<Station[]>([]);
    const [busHouse, setBusHouse] = useState<BusHouses[]>([]);
    const [startTime, setStartTime] = useState("");
    const [seats, setSeats] = useState("");
    const [price, setPrice] = useState("");
    const [fromStations, setFromStations] = useState("");
    const [toStations, setToStations] = useState("");
    const [busHouseId, setHouse] = useState("");
    const [busStation, setBusStation] = useState("");

    useEffect(() => {
        const fetchStation = async () => {
            try {
                const response = await fetch("http://localhost:3000/stations");
                const data = await response.json();
                if (!response) {
                    console.log(data.message);
                }
                setStations(data.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchStation();

        const fetchBusHouse = async () => {
            try {
                const response = await fetch("http://localhost:3000/busHouse");
                const data = await response.json();
                if (!response) {
                    console.log(data.message);
                }
                setBusHouse(data.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchBusHouse();
    }, []);

    const AddTripHandle = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(busStation);
        try {
            const response = await fetch("http://localhost:3000/trips", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ fromStations, toStations, startTime, seats, price, busHouseId }),
            });
            const data = await response.json();
            navigate("/admin/trips");
            if (!response.ok) {
                console.log(data.message);
            } else {
                console.log("Thêm thành công");
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className=" flex-1">
            <h1 className="text-center text-[40px] text-[#000000] font-semibold mt-5 mb-3">Thêm chuyến xe</h1>
            <div className="flex flex-col items-center">
                <form
                    action=""
                    onSubmit={AddTripHandle}
                    className="border border-[#000000] bg-[#F2F2F2] w-[990px] h-[431px] rounded-md"
                >
                    <div className="grid grid-cols-3 gap-4 justify-items-center mt-8">
                        <div className="flex flex-col">
                            <label htmlFor="">Thời gian bắt đầu</label>
                            <input
                                onChange={(e) => setStartTime(e.target.value)}
                                type="datetime-local"
                                className="w-[277.71px] h-[55px] bg-[#FFFFFF] border border-[#000] rounded-[5px] pl-5"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="">Số ghế</label>
                            <input
                                onChange={(e) => setSeats(e.target.value)}
                                type="number"
                                className="w-[277.71px] h-[55px] bg-[#FFFFFF] border border-[#000] rounded-[5px] pl-5"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="">Giá</label>
                            <input
                                onChange={(e) => setPrice(e.target.value)}
                                type="number"
                                className="w-[277.71px] h-[55px] bg-[#FFFFFF] border border-[#000] rounded-[5px] pl-5"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="">Nhà xe</label>
                            {Array.isArray(busHouse) && (
                                <select
                                    name=""
                                    id=""
                                    className="w-[277.71px] h-[55px] bg-[#FFFFFF] border border-[#000] rounded-[5px] pl-5"
                                    onChange={(e) => setHouse(e.target.value)}
                                >
                                    <option value="">---chọn---</option>
                                    {busHouse.map((value) => (
                                        <option key={value._id} value={value._id}>
                                            {value.name}
                                        </option>
                                    ))}
                                </select>
                            )}
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="">Điểm đi</label>
                            {Array.isArray(stations) && (
                                <select
                                    className="w-[277.71px] h-[55px] bg-[#FFFFFF] border border-[#000] rounded-[5px] pl-5"
                                    onChange={(e) => setFromStations(e.target.value)}
                                >
                                    <option value="">---chọn---</option>
                                    {stations.map((value) => (
                                        <option key={value._id} value={value._id}>
                                            {value.province}
                                        </option>
                                    ))}
                                </select>
                            )}
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="">Điểm đến</label>
                            {Array.isArray(stations) && (
                                <select
                                    name=""
                                    id=""
                                    className="w-[277.71px] h-[55px] bg-[#FFFFFF] border border-[#000] rounded-[5px] pl-5"
                                    onChange={(e) => setToStations(e.target.value)}
                                >
                                    <option value="">---chọn---</option>
                                    {stations.map((value) => (
                                        <option key={value._id} value={value._id}>
                                            {value.province}
                                        </option>
                                    ))}
                                </select>
                            )}
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="">Bến xe</label>
                            {Array.isArray(stations) && (
                                <select
                                    name=""
                                    id=""
                                    className="w-[277.71px] h-[55px] bg-[#FFFFFF] border border-[#000] rounded-[5px] pl-5"
                                    onChange={(e) => setBusStation(e.target.value)}
                                >
                                    <option value="">---chọn---</option>
                                    {stations.map((value) => (
                                        <option key={value._id} value={value._id}>
                                            {value.name}
                                        </option>
                                    ))}
                                </select>
                            )}
                        </div>
                    </div>
                    <div className="w-[165px] ml-auto">
                        <Button title="Thêm mới" backgroundColor="#B8B8B8" color="white" height="43px" />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default FormAdmin;
