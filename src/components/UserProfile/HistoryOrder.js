import React from 'react';
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

export default function HistoryOrder() {
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

        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src="https://bazaarvietnam.vn/wp-content/uploads/2021/04/BZ_05_21_LeeminHo_louisvuitton_ChannelK-e1618290969549.jpg"
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '150px' }}
                  fluid />
                <p className="text-muted mb-1">Chinhuusy</p>
                <p className="text-muted mb-4">FPT University, 17</p>
                <div className="d-flex justify-content-center mb-2">
                  <MDBBtn>Đang Theo Dõi</MDBBtn>
                  <MDBBtn outline className="ms-1">Nhắn Tin</MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>

            <MDBCard className="mb-4 mb-lg-0">
              <MDBCardBody className="p-0">

                <MDBListGroup flush className="rounded-3 nav flex-column dashboard-list" role="tablist">

                  <MDBListGroupItem href="#dashboard" data-toggle="tab" className="d-flex justify-content-between align-items-center p-3 nav-link active">
                
                  <MDBIcon far icon="list-alt fa-lg" />
                    <MDBCardText>Lịch sử đơn hàng</MDBCardText>
                  </MDBListGroupItem>

                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3 nav-link">
                  <MDBIcon fas icon="user-alt fa-lg" />
                    <MDBCardText>Sửa Hồ Sơ Và Bảo Mật</MDBCardText>
                  </MDBListGroupItem>

                  

                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3 nav-link">
                  <MDBIcon fas icon="share-square fa-lg" />
                    <MDBCardText>Mạng Xã Hội</MDBCardText>
                  </MDBListGroupItem>

                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                  <MDBIcon fas icon="globe fa-lg" />
                    <MDBCardText>Ngôn Ngữ</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                  <MDBIcon fas icon="sign-out-alt fa-lg" />
                    <MDBCardText>Đăng Xuất</MDBCardText>
                  </MDBListGroupItem>
                </MDBListGroup>
              </MDBCardBody>
            </MDBCard>

          </MDBCol>
          <MDBCol lg="8">
            <MDBCard className="tab-content dashboard_content">
              <MDBCardBody className="mb-4 tab-pane fade show active " id="orders">
              <h3>Orders</h3>
                                                    <div className="coron_table table-responsive">
                                                        <table className="table">
                                                            <thead>
                                                                <tr>
                                                                    <th>Order</th>
                                                                    <th>Date</th>
                                                                    <th>Status</th>
                                                                    <th>Total</th>
                                                                    <th>Actions</th>	 	 	 	
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>1</td>
                                                                    <td>May 10, 2018</td>
                                                                    <td><span class="success">Completed</span></td>
                                                                    <td>$25.00 for 1 item </td>
                                                                    <td><a href="cart.html" class="view">view</a></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>2</td>
                                                                    <td>May 10, 2018</td>
                                                                    <td>Processing</td>
                                                                    <td>$17.00 for 1 item </td>
                                                                    <td><a href="cart.html" class="view">view</a></td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                </MDBCardBody>
                <MDBCardBody className="tab-pane fade" id="dashboard">
                <h3>Dashboard </h3>
                <p>From your account dashboard. you can easily check &amp; view your <a href="#">recent orders</a>, manage your <a href="#">shipping and billing addresses</a> and <a href="#">Edit your password and account details.</a></p>
                </MDBCardBody>
                </MDBCard>
                </MDBCol>
          {/* <MDBCol lg="8">
            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Tên</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">Đỗ Minh Chính</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">chinhdmse172667@fpt.edu.vn</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Điện Thoại</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">0949905590</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Giới Tính</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">Nam</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Địa Chỉ</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">FPT University, 17</MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>

            <MDBRow>
              
              <MDBCol md="12">
                <MDBCard className="mb-4 mb-md-0">
                                     
                  <MDBCardBody>
                  <MDBCardText className="mb-4"><h3 className="text-primary font-italic me-1">Trung Tâm Trợ Giúp</h3></MDBCardText> <br/>
                  

                <MDBRow>                 
                  <MDBCol sm="12">
                    <MDBCardText className="text-muted">[Câu Hỏi] Đỗ Minh Chính Có Đẹp Trai Không?</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>                 
                  <MDBCol sm="12">
                    <MDBCardText className="text-muted">[Thông Tin Vận Chuyển] Làm sao để liên hệ đơn vị vận chuyển?</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>                 
                  <MDBCol sm="12">
                    <MDBCardText className="text-muted">[Tài Khoản] Cách thêm/thay đổi email?</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>                 
                  <MDBCol sm="12">
                    <MDBCardText className="text-muted">[Chat] Hướng dẫn Chat/Nhắn tin trên The Laundry?</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                
              </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBCol> */}



        </MDBRow>
        
      </MDBContainer>
    </section>
  );
}