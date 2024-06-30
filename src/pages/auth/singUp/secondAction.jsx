const SecondAction = () => {
  return (
    <div className="section section-lg bg-primary text-dark pb-0">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-auto">
            <div className="col text-center">
              <div className="header">
                <h1 className="display-3 mb-4">Sign Up</h1>
                <br />
              </div>
            </div>
            <div className="progress-wrapper">
              <div className="progress">
                <div
                  className="progress-bar bg-dark btn-ungu"
                  role="progressbar"
                  aria-valuenow="100"
                  aria-valuemin="50"
                  aria-valuemax="100"
                ></div>
              </div>
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
                  className="form-control"
                  id="exampleInputIcon3"
                  placeholder="Username"
                  type="text"
                  required
                />
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
                  className="form-control"
                  id="exampleInputPassword6"
                  placeholder="Password"
                  type="password"
                  aria-label="Password"
                  required
                />
              </div>
            </div>
            <div className="d-block d-sm-flex justify-content-between align-items-center mb-4">
              <a
                href="login.html"
                className="btn btn-primary animate-down-2"
                type="button"
              >
                Log In
              </a>
              <a
                href="daftar.html"
                className="btn btn-primary animate-down-2"
                type="button"
              >
                Daftar
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondAction;
