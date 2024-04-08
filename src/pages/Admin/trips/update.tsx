import React, { useState, useEffect } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Button from "../../../components/butoon";
import { IStation, ITrip } from "../../../interfaces";

function UpdateTrips() {
    const data = useLoaderData() as ITrip;
    const { id } = useParams();

    interface Station {
        _id: number;
        name: string;
        province: string;
    }
    interface BusHouses {
        _id: number;
        name: string;
    }

    const navigate = useNavigate();

    const [stations, setStations] = useState<Station[]>([]);
    const [busHouse, setBusHouse] = useState<BusHouses[]>([]);
    const [startTime, setStartTime] = useState(data.startTime);
    const [seats, setSeats] = useState<number>(data.seats);
    const [price, setPrice] = useState<number>(data.price);
    const [fromStations, setFromStations] = useState<IStation | string | number>(data.fromStations);
    const [toStations, setToStations] = useState<IStation | string | number>(data.toStations);
    const [busHouseId, setHouse] = useState<string>(data.busHouseId._id);
    const [busStation, setBusStation] = useState(data.fromStations._id);
    console.log(busStation);

    console.log({ fromStations, toStations, startTime, seats, price, busHouseId });

    useEffect(() => {
        const fetchStation = async () => {
            try {
                const response = await fetch("http://localhost:3000/stations");
                const data = await response.json();
                if (!response.ok) {
                    console.log(data.message);
                }
                setStations(data.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchStation();
    }, []);

    useEffect(() => {
        const fetchBusHouse = async () => {
            try {
                const response = await fetch("http://localhost:3000/busHouse");
                const data = await response.json();
                if (!response.ok) {
                    console.log(data.message);
                }
                setBusHouse(data.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchBusHouse();
    }, []);

    const UpdateTripHandle = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const newData = {
                fromStations: fromStations,
                toStations: toStations,
                startTime: startTime,
                seats: seats,
                price: price,
                busHouseId: busHouseId,
            };
            console.log(newData);

            const response = await fetch(`http://localhost:3000/trips/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newData),
            });
            const responseData = await response.json();
            navigate("/admin/trips");
            if (!response.ok) {
                console.log(responseData.message);
            } else {
                console.log("Sửa thành công");
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
                    onSubmit={UpdateTripHandle}
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
                                onChange={(e) => setSeats(e.target.value ? parseFloat(e.target.value) : data.seats)}
                                type="number"
                                defaultValue={data.seats}
                                className="w-[277.71px] h-[55px] bg-[#FFFFFF] border border-[#000] rounded-[5px] pl-5"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="">Giá</label>
                            <input
                                onChange={(e) => setPrice(e.target.value ? parseFloat(e.target.value) : data.price)}
                                type="number"
                                defaultValue={data.price}
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
                                    onChange={(e) => setHouse(e.target.value ? e.target.value : data.busHouseId._id)}
                                >
                                    {busHouse.map((value) => (
                                        <option key={value._id} value={value._id}>
                                            {value.name}
                                        </option>
                                    ))}
                                    {/* Set the selected option based on data.busHouseId */}
                                    {data.busHouseId && (
                                        <option value={data.busHouseId._id} selected>
                                            {data.busHouseId.name}
                                        </option>
                                    )}
                                </select>
                            )}
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="">Điểm đi</label>
                            {Array.isArray(stations) && (
                                <select
                                    className="w-[277.71px] h-[55px] bg-[#FFFFFF] border border-[#000] rounded-[5px] pl-5"
                                    onChange={(e) =>
                                        setFromStations(e.target.value ? e.target.value : data.fromStations._id)
                                    }
                                >
                                    {stations.map((value) => (
                                        <option key={value._id} value={value._id}>
                                            {value.province}
                                        </option>
                                    ))}
                                    {data.fromStations && (
                                        <option value={data.fromStations._id} selected>
                                            {data.fromStations.province}
                                        </option>
                                    )}
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
                                    onChange={(e) =>
                                        setToStations(e.target.value ? e.target.value : data.toStations._id)
                                    }
                                >
                                    {stations.map((value) => (
                                        <option key={value._id} value={value._id}>
                                            {value.province}
                                        </option>
                                    ))}
                                    {data.toStations && (
                                        <option value={data.toStations._id} selected>
                                            {data.toStations.province}
                                        </option>
                                    )}
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
                                    onChange={(e) =>
                                        setBusStation(e.target.value ? e.target.value : data.fromStations._id)
                                    }
                                >
                                    {stations.map((value) => (
                                        <option key={value._id} value={value._id}>
                                            {value.name}
                                        </option>
                                    ))}
                                    {data.toStations && (
                                        <option value={data.toStations._id} selected>
                                            {data.toStations.name}
                                        </option>
                                    )}
                                </select>
                            )}
                        </div>
                    </div>
                    <div className="w-[165px] ml-auto">
                        <Button title="Cập nhật" backgroundColor="#B8B8B8" color="white" height="43px" />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default UpdateTrips;
