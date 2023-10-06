import {
    MDBCard,
    MDBCardBody,
    MDBCardFooter,
    MDBCardHeader,
    MDBCardImage,
    MDBCol,
    MDBContainer,
    MDBProgress,
    MDBProgressBar,
    MDBRow,
    MDBTypography,
  } from "mdb-react-ui-kit";
  import React from "react";
  
  export default function OrderDetails() {
    return (
      <>
        <section
          className="h-100 gradient-custom"
          style={{ backgroundColor: "#eee" }}
        >
          <MDBContainer className="py-5 h-100">
            <MDBRow className="justify-content-center align-items-center h-100">
              <MDBCol lg="10" xl="8">
                <MDBCard style={{ borderRadius: "10px" }}>
                  <MDBCardHeader className="px-4 py-5">
                    <MDBTypography tag="h5" className="text-muted mb-0">
                      Cảm ơn bạn đã đặt hàng,{" "}
                      <span style={{ color: "#1d3964" }}>ChinhDo</span>!
                    </MDBTypography>
                  </MDBCardHeader>
                  <MDBCardBody className="p-4">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <p
                        className="lead fw-normal mb-0"
                        style={{ color: "#1d3964" }}
                      >
                        Chinh's Store
                      </p>
                      <p className="small text-muted mb-0">
                        Mã Biên Lai : 1KAU9-84UIL
                      </p>
                    </div>
  
                    <MDBCard className="shadow-0 border mb-4">
                      <MDBCardBody>
                        <MDBRow>
                          <MDBCol md="2">
                            <MDBCardImage
                              src="https://png.pngtree.com/png-clipart/20190115/ourlarge/pngtree-washing-clothes-doing-housework-girl-woman-png-image_361987.jpg"
                              fluid
                              alt="Dịch Vụ"
                            />
                          </MDBCol>
                          <MDBCol
                            md="2"
                            className="text-center d-flex justify-content-center align-items-center"
                          >
                            <p className="text-muted mb-0">Giặt theo bộ</p>
                          </MDBCol>
                          <MDBCol
                            md="2"
                            className="text-center d-flex justify-content-center align-items-center"
                          >
                            <p className="text-muted mb-0 small">Mã Đơn Hàng: #12241</p>
                          </MDBCol>
                          <MDBCol
                            md="2"
                            className="text-center d-flex justify-content-center align-items-center"
                          >
                            <p className="text-muted mb-0 small">
                              Liên Hệ Store
                            </p>
                          </MDBCol>
                          <MDBCol
                            md="2"
                            className="text-center d-flex justify-content-center align-items-center"
                          >
                            <p className="text-muted mb-0 small">Số Lượng: 3</p>
                          </MDBCol>
                          <MDBCol
                            md="2"
                            className="text-center d-flex justify-content-center align-items-center"
                          >
                            <p className="text-muted mb-0 small">137000vnd</p>
                          </MDBCol>
                        </MDBRow>
                        <hr
                          className="mb-4"
                          style={{ backgroundColor: "#e0e0e0", opacity: 1 }}
                        />
                        <MDBRow className="align-items-center">
                          <MDBCol md="2">
                            <p className="text-muted mb-0 small">Đặt Hàng</p>
                          </MDBCol>
                          <MDBCol md="10">
                            <MDBProgress
                              style={{ height: "6px", borderRadius: "16px" }}
                            >
                              <MDBProgressBar
                                style={{
                                  borderRadius: "16px",
                                  backgroundColor: "#1d3964",
                                }}
                                width={65}
                                valuemin={0}
                                valuemax={100}
                              />
                            </MDBProgress>
                            <div className="d-flex justify-content-around mb-1">
                              <p className="text-muted mt-1 mb-0 small ms-xl-5">
                              Đang Vận Chuyển 

                              </p>
                              <p className="text-muted mt-1 mb-0 small ms-xl-5">
                              Đã Giao Hàng
                              </p>
                            </div>
                          </MDBCol>
                        </MDBRow>
                      </MDBCardBody>
                      
                    </MDBCard>
  
                    <MDBCard className="shadow-0 border mb-4">
                      <MDBCardBody>
                        <MDBRow>
                          <MDBCol md="2">
                            <MDBCardImage
                              src="https://png.pngtree.com/png-clipart/20190115/ourlarge/pngtree-washing-clothes-doing-housework-girl-woman-png-image_361987.jpg"
                              fluid
                              alt="Dịch Vụ"
                            />
                          </MDBCol>
                          <MDBCol
                            md="2"
                            className="text-center d-flex justify-content-center align-items-center"
                          >
                            <p className="text-muted mb-0">Giặt Giày</p>
                          </MDBCol>
                          <MDBCol
                            md="2"
                            className="text-center d-flex justify-content-center align-items-center"
                          >
                            <p className="text-muted mb-0 small">Mã Đơn Hàng: #23123</p>
                          </MDBCol>
                          <MDBCol
                            md="2"
                            className="text-center d-flex justify-content-center align-items-center"
                          >
                            <p className="text-muted mb-0 small">
                            Liên Hệ Store
                            </p>
                          </MDBCol>
                          <MDBCol
                            md="2"
                            className="text-center d-flex justify-content-center align-items-center"
                          >
                            <p className="text-muted mb-0 small">Số Lượng: 3</p>
                          </MDBCol>
                          <MDBCol
                            md="2"
                            className="text-center d-flex justify-content-center align-items-center"
                          >
                            <p className="text-muted mb-0 small">100000vnd</p>
                          </MDBCol>
                        </MDBRow>
                        <hr
                          className="mb-4"
                          style={{ backgroundColor: "#e0e0e0", opacity: 1 }}
                        />
                        <MDBRow className="align-items-center">
                          <MDBCol md="2">
                            <p className="text-muted mb-0 small">Đặt Hàng</p>
                          </MDBCol>
                          <MDBCol md="10">
                            <MDBProgress
                              style={{ height: "6px", borderRadius: "16px" }}
                            >
                              <MDBProgressBar
                                style={{
                                  borderRadius: "16px",
                                  backgroundColor: "#1d3964",
                                }}
                                width={20}
                                valuemin={0}
                                valuemax={100}
                              />
                            </MDBProgress>
                            <div className="d-flex justify-content-around mb-1">
                              <p className="text-muted mt-1 mb-0 small ms-xl-5">
                                Đang Vận Chuyển 
                              </p>
                              <p className="text-muted mt-1 mb-0 small ms-xl-5">
                                Đã Giao Hàng
                              </p>
                            </div>
                          </MDBCol>
                        </MDBRow>
                      </MDBCardBody>
                      
                    </MDBCard>
  
                    <div className="d-flex justify-content-between pt-2">
                      <p className="fw-bold mb-0">Chi Tiết Đặt Hàng</p>
                      <p className="text-muted mb-0">
                        <span className="fw-bold me-4">Tổng</span> 898.000
                      </p>
                    </div>
  
                    <div className="d-flex justify-content-between pt-2">
                      <p className="text-muted mb-0">Số Hóa Đơn : 788152</p>
                      <p className="text-muted mb-0">
                        <span className="fw-bold me-4">Giảm Giá</span> $19.00
                      </p>
                    </div>
  
                    <div className="d-flex justify-content-between">
                      <p className="text-muted mb-0">
                        Ngày Lập Hóa Đơn : 22 Dec,2019
                      </p>
                      {/* <p className="text-muted mb-0">
                        <span className="fw-bold me-4">GST 18%</span> 123
                      </p> */}
                    </div>
  
                    <div className="d-flex justify-content-between mb-5">
                      <p className="text-muted mb-0">
                        
                      </p>
                      <p className="text-muted mb-0">
                        <span className="fw-bold me-4">Phí Vận Chuyển</span>{" "}
                        Free
                      </p>
                    </div>
                  </MDBCardBody>



                  {/* <MDBCardBody className="p-4">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <p
                        className="lead fw-normal mb-0"
                        style={{ color: "#1d3964" }}
                      >
                        Chinh's Store
                      </p>
                      <p className="small text-muted mb-0">
                        Mã Biên Lai : 1KAU9-84UIL
                      </p>
                    </div> */}
  
                    {/* <MDBCard className="shadow-0 border mb-4">
                      <MDBCardBody>
                        <MDBRow>
                          <MDBCol md="2">
                            <MDBCardImage
                              src="https://png.pngtree.com/png-clipart/20190115/ourlarge/pngtree-washing-clothes-doing-housework-girl-woman-png-image_361987.jpg"
                              fluid
                              alt="Dịch Vụ"
                            />
                          </MDBCol>
                          <MDBCol
                            md="2"
                            className="text-center d-flex justify-content-center align-items-center"
                          >
                            <p className="text-muted mb-0">Giặt theo bộ</p>
                          </MDBCol>
                          <MDBCol
                            md="2"
                            className="text-center d-flex justify-content-center align-items-center"
                          >
                            <p className="text-muted mb-0 small">Mã Đơn Hàng: #12241</p>
                          </MDBCol>
                          <MDBCol
                            md="2"
                            className="text-center d-flex justify-content-center align-items-center"
                          >
                            <p className="text-muted mb-0 small">
                              Liên Hệ Store
                            </p>
                          </MDBCol>
                          <MDBCol
                            md="2"
                            className="text-center d-flex justify-content-center align-items-center"
                          >
                            <p className="text-muted mb-0 small">Số Lượng: 3</p>
                          </MDBCol>
                          <MDBCol
                            md="2"
                            className="text-center d-flex justify-content-center align-items-center"
                          >
                            <p className="text-muted mb-0 small">137000vnd</p>
                          </MDBCol>
                        </MDBRow>
                        <hr
                          className="mb-4"
                          style={{ backgroundColor: "#e0e0e0", opacity: 1 }}
                        />
                        <MDBRow className="align-items-center">

                          <MDBCol md="2">
                            <p className="text-muted mb-0 small">Xem Thêm</p>
                          </MDBCol>
                          <MDBCol md="10">
                            
                            
                          </MDBCol>
                        </MDBRow>
                      </MDBCardBody> */}
                      
                      
                    {/* </MDBCard> */}
  

                  {/* </MDBCardBody> */}
                  
                  <MDBCardFooter
                    className="border-0 px-4 py-5"
                    style={{
                      backgroundColor: "#1d3964",
                      borderBottomLeftRadius: "10px",
                      borderBottomRightRadius: "10px",
                    }}
                  >
                    <MDBTypography
                      tag="h5"
                      className="d-flex align-items-center justify-content-end text-white text-uppercase mb-0"
                    >
                      Đã Thanh Toán: <span className="h2 mb-0 ms-2">1.040.000</span>
                    </MDBTypography>
                  </MDBCardFooter>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
      </>
    );
  }