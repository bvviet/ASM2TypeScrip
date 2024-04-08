import { useEffect, useState } from "react";
import { busHouseId } from "../../../interfaces";

interface busHouseIdProps {
    data: busHouseId;
    delete: () => void;
}

const BusHouse = () => {
    const [busHouse, setBusHouse] = useState<busHouseId[]>([]);

    useEffect(() => {
        const fetchBusHouse = async () => {
            try {
                const response = await fetch("http://localhost:3000/busHouse");
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setBusHouse(data.data);
            } catch (error) {
                console.error("Error fetching bus houses:", error);
            }
        };

        fetchBusHouse();
    }, []);

    const handleDelete = async (id: string) => {
        try {
            const response = await fetch(`http://localhost:3000/busHouse/${id}`, {
                method: "DELETE",
            });
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            setBusHouse((prevState) => prevState.filter((item) => item._id !== id));
        } catch (error) {
            console.error("Error deleting bus house:", error);
        }
    };

    return (
        <div>
            <h1 className="text-center text-[40px] text-[#000000] font-semibold mt-5 mb-3">Danh sách nhà xe xe</h1>
            {busHouse.map((item) => (
                <BusHouseRender key={item._id} data={item} delete={() => handleDelete(item._id)} />
            ))}
        </div>
    );
};

const BusHouseRender = (props: busHouseIdProps) => {
    return (
        <div className="flex flex-col items-center">
            <div className="w-[987px] h-[365px] border rounded-[10px] border-[#969696] bg-[#F2F2F2] mt-5">
                <div className="flex items-center justify-around text-[24px] mt-11">
                    <div className="flex flex-col gap-5">
                        <p className="font-semibold">Tên nhà xe : {props.data.name}</p>

                        <p>
                            <span className="font-semibold">Địa chỉ : </span>
                            {props.data.address}
                        </p>
                        <p>
                            <span className="font-semibold">Số điện thoại : </span>
                            {props.data.phone}
                        </p>
                        <p>
                            <span className="font-semibold">Bến: </span>
                            {Array.isArray(props.data.stations)
                                ? props.data.stations.map((vl: busHouseId) => vl.name)
                                : ""}
                        </p>
                    </div>
                    <div className="flex flex-col gap-5"></div>
                    <button onClick={props.delete}>Xóa</button>
                </div>
            </div>
        </div>
    );
};

export default BusHouse;
