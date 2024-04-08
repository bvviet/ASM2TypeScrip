function Card() {
    return (
        <div className="w-[980px] ml-auto mr-auto mt-10 pb-16">
            <h2 className="text-[#484848] text-xl font-medium mb-4">Tuyến đường phổ biến</h2>
            <div className="grid grid-cols-4 gap-4">
                <div className="h-[211px] bg-[#9E947C] rounded-md">
                    <img
                        src="https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/destination/images/5/img_hero.png?v1"
                        alt=""
                    />
                    <div className="text-white pl-3">
                        <p className="text-[17px] font-semibold">Sài Gòn - Nha Trang</p>
                        <p className="font-normal">
                            <span className="text-[14px]">Từ 200.000đ</span>
                            <span className="text-[12px] line-through ml-2">250.000đ</span>
                        </p>
                    </div>
                </div>
                <div className="h-[211px] bg-[#585279] rounded-md">
                    <img
                        src="https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/destination/images/24/img_hero.png"
                        alt=""
                    />
                    <div className="text-white pl-3">
                        <p className="text-[17px] font-semibold">Hà Nội - Hải Phòng</p>
                        <p className="font-normal">
                            <span className="text-[14px]">Từ 100.000đ</span>
                            <span className="text-[12px] line-through ml-2"></span>
                        </p>
                    </div>
                </div>
                <div className="h-[211px] bg-[#C6324E] rounded-md">
                    <img
                        src="https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/destination/images/3/img_hero.png"
                        alt=""
                    />
                    <div className="text-white pl-3">
                        <p className="text-[17px] font-semibold">Sài Gòn - Đà Lạt</p>
                        <p className="font-normal">
                            <span className="text-[14px]">Từ 200.000đ</span>
                            <span className="text-[12px] line-through ml-2">320.000đ</span>
                        </p>
                    </div>
                </div>
                <div className="h-[211px] bg-[#4C6C8C] rounded-md">
                    <img
                        src="https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/destination/images/22/img_hero.png"
                        alt=""
                        className="w-[233px]"
                    />
                    <div className="text-white pl-3">
                        <p className="text-[17px] font-semibold">Sài Gòn - Phan Thiết</p>
                        <p className="font-normal">
                            <span className="text-[14px]">Từ 15.000đ</span>
                            <span className="text-[12px] line-through ml-2"></span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
