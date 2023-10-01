import React from "react";
import styles from "./Home.css";
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap";
import Row from "react-bootstrap";
import DropdownButton from "react-bootstrap";

const Home = ({ hamActive, setHamActive }) => {
    const logo = "echbuon.png";
    const icon = "washing-machine.png"
     const handleClick = () => {
      setHamActive(!hamActive);
    };
    return(
      <div className="header container-fluid">
        <h3 className="header-1">Đơn hàng đã nhận</h3>
        <div className="order-table">
          <span className="tieu-de">
            <ul>
              <li>Order ID:</li>
              <li><img src={icon} alt="icon" className="icon"/> 123/15</li>
              <li><i class="fa-solid fa-location-dot"></i> FPT University</li>
            </ul>
          </span>
          <div className="accept-table ">
              <button type="button" className="accept-1">Chi tiết</button>
              <button type="button" className="accept-2"><i class="fa-solid fa-diamond-turn-right"></i>Địa chỉ</button>
          </div>
        </div>
        <h3 className="header-2 ">Đơn hàng</h3>
        <div className="row justify-content-end">
            <div className="col-6 col-md-4">55 Đơn đã đặt hôm nay</div>
            <div className="col-6 col-md-4">05 Đơn đã đặt tuần này</div>
            <div className="w-100 d-none d-md-block"></div>
            <div className="col-6 col-md-4">155 Tổng đơn đã xong</div>
            <div className="col-6 col-md-4">10 Đơn đã bị hủy</div>
        </div>
        <h3 className="header-3">Tiền đã nhận</h3>
        <div className="cash-table">
          <span className="cash-tieu-de">
          <ul className="first">
          <i class="fa-solid fa-wallet"></i>
            <li className="content-1">Balance</li>
            <li className="content-2">120.00đ</li>
            </ul>
            <ul className="second">
              <li>Hôm nay</li>
              <li>Tuần này</li>
              <li>Tháng này</li>
            </ul>
            <ul className="last">
              <li>10.000đ</li>
              <li>100.000đ</li>
              <li>1.000.000đ</li>
            </ul>
          </span>
        </div>
      </div>
    )
} 
export default Home;