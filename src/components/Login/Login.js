import React from "react";
import { useFormik } from "formik";
import "./Login.css";
import { Button } from "react-bootstrap";
import { loginSchema } from "./LoginSchema";

const initialValues = {
  first: "",
  last: "",
  email: "",
  repassword: "",
  password: "",
};

const Login = () => {
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    resetForm,
  } = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: (values, action) => {
      alert(
        "Form is valid now!. You can make a call to API inside onSubmit function"
      );
      action.resetForm();
    },
  });

  return (
    <div>
      <section
        class="p-5 w-100"
        style={{ backgroundColor: "#eee", borderRadius: ".5rem .5rem 0 0" }}
      >
        <div class="row">
          <div class="col-12">
            <div class="card text-black" style={{ borderRadius: "25px" }}>
              <div class="card-body p-md-5">
                <div class="row justify-content-center">
                  <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p class="text-center h1 fw-bold mb-5 mt-4">Login</p>
                    <form onSubmit={handleSubmit}>
                      
                      <div className="row mt-3">
                        <div className="col text-left">
                          <label htmlFor="first" className="form-label">
                            Email
                          </label>
                          <input
                            id="email"
                            name="email"
                            className="form-control"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {errors.email && touched.email ? (
                            <small className="text-danger mt-1">
                              {errors.email}
                            </small>
                          ) : null}
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col text-left">
                          <label htmlFor="first" className="form-label">
                            Password
                          </label>
                          <input
                            id="password"
                            name="password"
                            className="form-control"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type="password"
                          />
                          {errors.password && touched.password ? (
                            <small className="text-danger mt-1">
                              {errors.password}
                            </small>
                          ) : null}
                        </div>
                      </div>
                    
                      <div className="row mt-3">
                        <div className="col text-right actionButtons">
                          <Button
                            variant="secondary"
                            size="sm"
                            onClick={resetForm}
                          >
                            Clear
                          </Button>

                          <Button
                            variant="primary"
                            size="sm"
                            onClick={handleSubmit}
                          >
                            Login
                          </Button>
                        </div>
                      </div>
                      <div className="row mt-3">
                        <br />
                        <div className="col text-right">
                          Dont't have an account? <a href="/">Register</a>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      // src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      src="https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/i2z9dctgddu57ydqloam/Tri%E1%BB%83n%20l%C3%A3m%20%C4%91%E1%BA%B7c%20bi%E1%BB%87t%20k%E1%BB%B7%20ni%E1%BB%87m%2030%20n%C4%83m%20Crayon%20Shin-chan%20%E2%80%9CShingeki!%20Ass%20Only%20Wonderland%20Adventure%E2%80%9D%20%C4%90%E1%BB%8Ba%20%C4%91i%E1%BB%83m%20Osaka.jpg"
                      class="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
