import Header from "../../Layout/Header";
import Form from "../../components/form";
import Detail from "../../components/detail";
import Footer from "../../Layout/Footer";
function DetailPage() {
    return (
        <div>
            <Header />
            <div className="pt-4 bg-[#f2f2f2]">
                <Form  />
            </div>
            <Detail />
            <Footer />
        </div>
    );
}

export default DetailPage;
