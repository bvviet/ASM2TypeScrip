import Button from "./butoon";
function PayTicket() {
    return (
        <div className="w-3/6 flex flex-col ml-auto mr-auto rounded-md bg-white pt-6 pb-6 pl-6 pr-6 mt-12">
            <form action="" className="w-full flex justify-between pb-5">
                <input
                    type="text"
                    placeholder="Mã giảm giá"
                    className="border rounded-md border-[#ccc] h-[2.25rem] w-10/12 pl-3"
                />
                <Button title="Áp dụng" color="#2474e5" borderColor="#2474e5" />
            </form>
            <div className="text-[#535252] pt-2 text-[1.2rem] font-[500] border-b-2 pb-7">Thông tin vé</div>
            <div className="border-b-2 border-[#ccc] pb-9 mt-9">
                <div className="flex text-[#141414] pt-1.5 pb-1.5 text-[1.5rem] font-[700]">
                    Tổng tiền: <div className="ml-auto">160.000d</div>
                </div>
                <div className="flex text-[#535252] pt-1.5 pb-1.5 text-[1.01rem] font-[500]">
                    Giá vé:
                    <div className="ml-auto">
                        <p>100.000d</p>
                        <p>Ghế/Giường: 8</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-[2rem] text-[#535252] pt-2 pb-2 text-[1.2rem] font-[500]">
                <div className="">
                    <p className="text-[#999999] text-[0.9rem]">Tuyến:</p>
                    <p>Hà Nội - Hà Giang</p>
                </div>
                <div>
                    <p className="text-[#999999] text-[0.9rem]">Nhà xe:</p>
                    <p>Việt limousine</p>
                </div>
                <div>
                    <p className="text-[#999999] text-[0.9rem]">Đón lúc:</p>
                    <p>8:00 - 30/4/2024 (dự kiến)</p>
                </div>
            </div>
            <div className="ml-auto mt-10">
                <Button title="Thanh toán" backgroundColor="#ffd333" height="3rem" />
            </div>
        </div>
    );
}

export default PayTicket;
