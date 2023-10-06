import React from 'react';
import "./EditProfile.css";
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBBtn,
    MDBBreadcrumb,
    MDBBreadcrumbItem,
    MDBProgress,
    MDBProgressBar,
    MDBIcon,
    MDBListGroup,
    MDBListGroupItem
  } from 'mdb-react-ui-kit';

export default function EditProfile() {
  return (
    
    <section style={{ backgroundColor: '#eee' }}>
         <MDBContainer className="py-5">
         <MDBRow>
          <MDBCol>
            <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
              <MDBBreadcrumbItem>
                <a href='#'>Home</a>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem>
                <a href="#">User</a>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem active>User Profile</MDBBreadcrumbItem>
            </MDBBreadcrumb>
          </MDBCol>
        </MDBRow>
      <div className="container-xl px-4 mt-4">      
        <div className="mt-0 mb-4">
        <div className="row">
          <div className="col-xl-4">
            <div className="card mb-4 mb-xl-0">
              <div className="card-header">Ảnh Hồ Sơ</div>
              <div className="card-body text-center">
                <img className="img-account-profile rounded-circle mb-2" src="https://bazaarvietnam.vn/wp-content/uploads/2021/04/BZ_05_21_LeeminHo_louisvuitton_ChannelK-e1618290969549.jpg" alt="" />
                <div className="small font-italic text-muted mb-4">JPG hoặc PNG không lớn hơn 5mb</div>
                <button className="btn btn-primary" type="button">Tải Hình Ảnh</button>
              </div>
            </div>
          </div>
          <div className="col-xl-8">
            <div className="card mb-4">
              <div className="card-header">Chi tiết tài khoản</div>
              <div className="card-body">
                <form>
                  <div className="mb-3">
                    <label className="small mb-1" htmlFor="inputUsername">Tên Người Dùng</label>
                    <input className="form-control" id="inputUsername" type="text" placeholder="Tên Người Dùng" value="Tên Người Dùng" />
                  </div>
                  <div className="row gx-3 mb-3">
                    <div className="col-md-6">
                      <label className="small mb-1" htmlFor="inputFirstName">Tên</label>
                      <input className="form-control" id="inputFirstName" type="text" placeholder="Nhập tên" value="" />
                    </div>
                    <div className="col-md-6">
                      <label className="small mb-1" htmlFor="inputLastName">Họ</label>
                      <input className="form-control" id="inputLastName" type="text" placeholder="Nhập Họ" value="" />
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <label className="small mb-1" htmlFor="inputEmailAddress">Địa chỉ Email</label>
                    <input className="form-control" id="inputEmailAddress" type="email" placeholder="Nhập Địa Chỉ Email" value="" />
                  </div>
                  <div className="row gx-3 mb-3">
                    <div className="col-md-6">
                      <label className="small mb-1" htmlFor="inputPhone">Số Điện Thoại</label>
                      <input className="form-control" id="inputPhone" type="tel" placeholder="Nhập Số Điện Thoại" value="" />
                    </div>
                    <div className="mb-3">
                    <label className="small mb-1" htmlFor="inputEmailAddress">Địa chỉ</label>
                    <input className="form-control" id="inputEmailAddress" type="email" placeholder="Nhập Địa Chỉ " value="" />
                  </div>
                    
                  </div>
                  
                  <button className="btn btn-primary" type="button">Lưu Thay Đổi</button>
                </form>

                <form>
                <div className="container-xl px-4 mt-4"> 
                <div className="row gx-3 mb-3">
                        
                          
                          <label className="small mb-1" htmlFor="inputOrgName">Mật Khẩu Hiện Tại</label>
                          <input
                            id="password"
                            name="password"
                            className="form-control"                     
                            type="password"
                          />                                      
                      </div>
                  <div className="row gx-3 mb-3">
                    <div className="col-md-6">
                      <label className="small mb-1" htmlFor="inputOrgName">Mật Khẩu Mới </label>
                      <input
                            id="password"
                            name="password"
                            className="form-control"                     
                            type="password"
                          />                         
                          </div>
                    <div className="col-md-6">
                      <label className="small mb-1" htmlFor="inputLocation">Xác Nhận Mật Khẩu</label>
                      <input
                            id="password"
                            name="password"
                            className="form-control"                     
                            type="password"
                          />
                          </div>
                  </div>
                </div>
                <button className="btn btn-primary" type="button">Changes Password</button>
                </form>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      
      </div>
      
      
      </MDBContainer>
    </section>
    
  );
}
