import { useForm, SubmitHandler } from "react-hook-form";
import { busHouseId } from "../../../interfaces";
import { useState, useEffect } from "react";
import { IStation } from "../../../interfaces";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/butoon";
function AddBusHouse() {
    const navigate = useNavigate();
    const [station, setStation] = useState<IStation[]>([]);
    useEffect(() => {
        const fetchStation = async () => {
            try {
                const response = await fetch("http://localhost:3000/stations");
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setStation(data.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchStation();
    }, []);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<busHouseId>();

    const onSubmit: SubmitHandler<busHouseId> = async (data) => {
        try {
            const response = await fetch("http://localhost:3000/busHouse", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            navigate("/admin/busHouse");
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
        } catch {
            alert("Thêm mới thất bại");
        }
    };

    console.log(errors);

    return (
        <div className=" flex-1">
            <h1 className="text-center text-[40px] text-[#000000] font-semibold mt-5 mb-3">Thêm chuyến xe</h1>
            <div className="flex flex-col items-center">
                <form
                    action=""
                    className="border border-[#000000] bg-[#F2F2F2] w-[990px] h-[431px] rounded-md"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className="grid grid-cols-2 gap-4 justify-items-center mt-8">
                        <div className="flex flex-col">
                            <label htmlFor="">Tên nhà xe</label>
                            <input
                                type="text"
                                className="w-[277.71px] h-[55px] bg-[#FFFFFF] border border-[#000] rounded-[5px] pl-5"
                                {...register("name", { required: "Dữ liệu bắt buộc" })}
                            />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="">Địa chỉ </label>
                            <input
                                type="text"
                                className="w-[277.71px] h-[55px] bg-[#FFFFFF] border border-[#000] rounded-[5px] pl-5"
                                {...register("address", { required: "Dữ liệu bắt buộc" })}
                            />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="">Số điện thoại </label>
                            <input
                                type="number"
                                className="w-[277.71px] h-[55px] bg-[#FFFFFF] border border-[#000] rounded-[5px] pl-5"
                                {...register("phone", { required: "Dữ liệu bắt buộc" })}
                            />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="">Bến</label>
                            <select
                                id=""
                                className="w-[277.71px] h-[55px] bg-[#FFFFFF] border border-[#000] rounded-[5px] pl-5"
                                {...register("stations", { required: "Dữ liệu bắt buộc" })}
                            >
                                <option value="">---chọn---</option>
                                {station.map((item) => (
                                    <option key={item._id} value={item._id}>
                                        {item.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="w-[165px] ml-auto mt-5">
                        <Button title="Thêm mới" backgroundColor="#B8B8B8" color="white" height="43px" />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddBusHouse;
