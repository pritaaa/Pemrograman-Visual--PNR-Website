import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Signup = () => {
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
                                    <div className="progress-bar bg-dark btn-ungu" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End of Title */}
                    <div className="col-lg-12 justify-content-center align-items-center d-flex">
                        {/* Form */}
                        <div className="col-lg-8 col-sm-8">
                            <div className="form-group">
                                <label className="h6" htmlFor="namaAccount">Nama</label>
                                <input type="text" id="namaAccount" className="form-control" placeholder="Budi" />
                            </div>
                            <div className="form-group">
                                <label className="h6" htmlFor="noHp">Nomor Handphone</label>
                                <input type="number" id="noHp" className="form-control" placeholder="081234567890" />
                            </div>
                            <div className="form-group">
                                <label className="h6" htmlFor="alamat">Alamat</label>
                                <textarea id="alamat" className="form-control" placeholder="Jl in aja dulu"></textarea>
                            </div>
                            <div className="text-right">
                            
                                <Link to="/daftar2" className="btn btn-icon-only btn-pill btn-primary text-right animate-down-2">
                                    <span className="fa fa-arrow-right"></span>
                                </Link>
                            </div>
                            {/* End of Form */}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Signup;
