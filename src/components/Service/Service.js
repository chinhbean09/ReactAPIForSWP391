import { Avatar } from "@chakra-ui/react";
import React from "react";
import "./Service.css";



const Service = () => {

    const hinh = "echbuon.png";

    return (
        <section
        class="p-5 w-100"
        style={{ backgroundColor: "#eee", borderRadius: ".5rem .5rem 0 0" }}
      >
        <div className="hi">
            <h1>BẢNG GIÁ GIẶT ỦI</h1>
        <div className="container">
            <div id="full-combo-giat-sai-kho-quan-ao" className="combo-item">
                <div className="full-combo-image">
                    <Avatar src={hinh} width={463} height={513} alt="blaiti" />
                </div>
                <div className="full-combo-text">
                    <h2>Giặt & sấy khô quần áo</h2>
                    <button>Đặt dịch vụ</button>
                </div>
            </div>
            <div className="vertical-line"></div>
            <div id="giat-hap" className="combo-item">
                <div className="full-combo-image">
                    <Avatar src={hinh} width={463} height={513} alt="blaiti" />
                </div>
                <div className="giat-hap-text">
                    <h2>Giặt hấp (tỉnh theo bộ)</h2>
                    <button>Đặt dịch vụ</button>
                </div>
            </div>
        </div>
        </div>
        </section>
    )
}
export default Service;