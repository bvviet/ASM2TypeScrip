function Button(props: {
    title: string;
    width?: string;
    height?: string;
    backgroundColor?: string;
    color?: string;
    fontWeight?: string;
    borderColor?: string; // Added borderColor property
}) {
    const { title, width, height, backgroundColor, color, fontWeight, borderColor } = props;

    // Thiết lập các giá trị mặc định cho các props nếu chúng không được truyền vào
    const buttonStyles = {
        width: width ?? "8.1rem",
        height: height ?? "2.25rem",
        backgroundColor: backgroundColor ?? "#ffffff",
        color: color ?? "#0D2E59",
        fontWeight: fontWeight ?? "normal",
        border: `2px solid ${borderColor ?? "#FFFFFF"}`, // Set border with color
    };

    return (
        <button className="rounded-md text-[#0D2E59] font-semibold focus:outline-none" style={buttonStyles}>
            {title}
        </button>
    );
}

export default Button;
