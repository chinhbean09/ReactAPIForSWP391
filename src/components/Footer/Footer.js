// import { Container } from "react-bootstrap";
import styles from "./Footer.module.css";

const Footer = () => {
    const logo = "echbuon.png";
    return (
        <div className={`${styles.big} center`}>
        <div className={`${styles.container}`}>
            <img src={logo} alt="logo" className={`${styles.brand}`} />
            <div className={`${styles.text1}`}>
                <div>Step into our enchanting </div>
                <div>online world, where every</div> 
                <div>visit is an invitation to </div>
                <div>experience the magic of </div>
                <div>what we have to offer.</div>
            </div>
            <div className={`${styles.text3}`}>
                Hỗ Trợ
            </div>

            <div className={`${styles.text2}`}>
                <div className={`${styles.LH}`}>Liên Hệ: </div>
                <div>Câu hỏi thường gặp</div>
                <div>Điều khoản sử dụng</div>
                <div>Chính sách bảo mật</div>
                <div>Giải quyết khiếu nại</div>
            </div>
            <div className={`${styles.text4}`}>
                <div>Địa chỉ</div>
                <div>FPT University </div>
            </div>
            <div className={`${styles.text5}`}>
                <div>Mở cửa</div>
                <div>08:00 - 20:00 </div>
                <div>Thứ 2 - Chủ Nhật</div>
            </div>
            <div className={`${styles.icon}`}>
            <span>
              <a href="https://www.facebook.com/" className="fab fa-facebook-square">
                {" "}
              </a>
            </span>
            <span>
              <a href="https://twitter.com/" className="fab fa-twitter">
                {" "}
              </a>
            </span>
            <span>
              <a
                href="https://instagram.com/" className="fab fa-instagram">
                {" "}
              </a>
            </span>
            <span>
              <a href="https://www.pinterest.com/" className="fab fa-pinterest">
                {" "}
              </a>
            </span>
          </div>
        </div>
        </div>
    )
}
export default Footer;