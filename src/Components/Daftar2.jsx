import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const SignupStep2 = () => {
    return (
        <main>
            <div className="section section-lg bg-primary text-dark pb-0">
                <div className="container">
                    {/* Title */}
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
                                    <div className="progress-bar bg-dark btn-ungu" role="progressbar" aria-valuenow="100" aria-valuemin="50" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End of Title */}
                    <div className="col-lg-12 justify-content-center align-items-center d-flex">
                        {/* Form */}
                        <div className="col-lg-8 col-sm-8">
                            <div className="form-group">
                                <label htmlFor="exampleInputIcon3">Username</label>
                                <div className="input-group mb-4">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><span className="fas fa-user"></span></span>
                                    </div>
                                    <input className="form-control" id="exampleInputIcon3" placeholder="Username" type="text" required />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword6">Password</label>
                                <div className="input-group mb-4">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><span className="fas fa-unlock-alt"></span></span>
                                    </div>
                                    <input className="form-control" id="exampleInputPassword6" placeholder="Password" type="password" aria-label="Password" required />
                                </div>
                            </div>
                            <div className="d-block d-sm-flex justify-content-between align-items-center mb-4">
                                <a href="login.html" className="btn btn-primary animate-down-2" type="button">
                                    Log In
                                </a>
                                <a href="daftar.html" className="btn btn-primary animate-down-2" type="button">
                                    Daftar
                                </a>
                            </div>
                            {/* End of Form */}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default SignupStep2;
