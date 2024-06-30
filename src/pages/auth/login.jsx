import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="section section-lg bg-primary text-dark pb-0">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col text-center">
            <div className="header">
              <h1 className="display-3 mb-4">Sign In</h1>
              <br />
            </div>
          </div>
        </div>
        <div className="col-lg-12 justify-content-center align-items-center d-flex">
          <div className="col-lg-8 col-sm-8">
            <div className="form-group">
              <label for="exampleInputIcon3">Username</label>
              <div className="input-group mb-4">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <span className="fas fa-user"></span>
                  </span>
                </div>
                <input
                  className="form-control btn-pink"
                  id="exampleInputIcon3"
                  placeholder="Username"
                  type="text"
                  required
                />
                <div className="valid-feedback">Harap isi bidang ini !</div>
              </div>
            </div>
            <div className="form-group">
              <label for="exampleInputPassword6">Password</label>
              <div className="input-group mb-4">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <span className="fas fa-unlock-alt"></span>
                  </span>
                </div>
                <input
                  className="form-control btn-pink"
                  id="exampleInputPassword6"
                  placeholder="Password"
                  type="password"
                  aria-label="Password"
                  required
                />
              </div>
            </div>
            <div className="d-block d-sm-flex justify-content-between align-items-center mb-4">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="defaultCheck5"
                />
                <label className="form-check-label" for="defaultCheck5">
                  Remember me
                </label>
              </div>
              <div>
                <a href="#" className="small text-right">
                  Lupa password?
                </a>
              </div>
            </div>
            <button type="submit" className="btn btn-block btn-primary">
              Sign in
            </button>
            <br />
            <p>
              Belum punya akun?{" "}
              <Link to={"/sign-up"}>
                <strong>Sign Up</strong>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
