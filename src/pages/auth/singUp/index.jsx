import { useState } from "react";
import SecondAction from "./secondAction";

const SignUp = () => {
  const [isNext, setIsNext] = useState(false);
  return (
    <>
      {!isNext ? (
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
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12 justify-content-center align-items-center d-flex">
              <div className="col-lg-8 col-sm-8">
                <div className="form-group">
                  <label className="h6" for="namaAccount">
                    Nama
                  </label>
                  <input
                    type="text"
                    id="namaAccount"
                    className="form-control"
                    placeholder="Budi"
                  />
                </div>
                <div className="form-group">
                  <label className="h6" for="noHp">
                    Nomor Handphone
                  </label>
                  <input
                    type="number"
                    id="noHp"
                    className="form-control"
                    placeholder="081234567890"
                  />
                </div>
                <div className="form-group">
                  <label className="h6" for="alamat">
                    Alamat
                  </label>
                  <textarea
                    id="alamat"
                    className="form-control"
                    placeholder="Jl in aja dulu"
                  ></textarea>
                </div>
                <div className="text-right">
                  <a
                    onClick={()=>setIsNext(true)}
                    className="btn btn-pill btn-primary animate-down-2"
                    type="button"
                  >
                    Berikutnya
                    <span className="ml-1">
                      <span className="fa fa-arrow-right"></span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <SecondAction />
      )}
    </>
  );
};

export default SignUp;
