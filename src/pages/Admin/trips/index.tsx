import { useState, useEffect } from "react";
import { ITrip } from "../../../interfaces";
import { Link } from "react-router-dom";
interface TripProps {
    data: ITrip;
    delete: () => void;
}
const ListTrip = () => {
    const [trips, setTrips] = useState<ITrip[]>([]);
    const [reload, setReload] = useState<boolean>(false);

    useEffect(() => {
        const fetchTrips = async () => {
            try {
                const response = await fetch("http://localhost:3000/trips");
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setTrips(data.data);
                console.log(data.data);
            } catch (error) {
                console.error("Error fetching trips:", error);
            }
        };

        fetchTrips();
    }, [reload]);

    const DeleteHandle = async (tripId: string) => {
        try {
            const response = await fetch(`http://localhost:3000/trips/${tripId}`, {
                method: "DELETE",
            });
            if (response.ok) {
                console.log("Xoa thanh cong");
                setReload(!reload);
            } else {
                console.error("Failed to delete trip.");
            }
        } catch (error) {
            console.error("Error deleting trip:", error);
        }

        console.log("Xóa chuyến xe với ID:", tripId);
    };

    return (
        <div>
            <h1 className="text-center text-[40px] text-[#000000] font-semibold mt-5 mb-3">Danh sách chuyến xe</h1>
            {trips.map((item) => (
                <Trip key={item._id} data={item} delete={() => DeleteHandle(item._id)} />
            ))}
        </div>
    );
};

export default ListTrip;

function Trip(props: TripProps) {
    return (
        <div className="flex flex-col items-center">
            <div className="w-[987px] h-[365px] border rounded-[10px] border-[#969696] bg-[#F2F2F2] mt-5">
                <div className="flex items-center justify-around text-[24px] mt-11">
                    <div className="flex flex-col gap-5">
                        <p className="font-semibold">Mã chuyến : XRF123</p>
                        <p>
                            <span className="font-semibold">Nhà xe</span> : {props.data.busHouseId.name}
                        </p>
                        <p>
                            <span className="font-semibold">Số ghế còn trống</span> : {props.data.seats}
                        </p>
                        <p>
                            <span className="font-semibold">Khởi hành:</span> {props.data.startTime}
                        </p>
                        <p>
                            <span className="font-semibold">Bến xe : </span>
                            {props.data.toStations.name}
                        </p>
                    </div>
                    <div className="flex flex-col gap-5">
                        <p>
                            <span className="font-semibold">SĐT nhà xe</span> : {props.data.busHouseId.phone}
                        </p>
                        <p>
                            <span className="font-semibold">Điểm đến: </span>
                            {props.data.toStations?.province}
                        </p>
                        <p>
                            <span className="font-semibold">Điểm đi: </span>
                            {props.data.fromStations.province}
                        </p>
                    </div>
                </div>
                <button onClick={props.delete}>Xóa</button>
                <Link to={"/admin/update/" + props.data._id}>Sửa</Link>
            </div>
        </div>
    );
}
