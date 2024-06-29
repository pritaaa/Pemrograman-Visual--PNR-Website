// src/components/LayananDokter.js
import React, { useState } from 'react';

function LayananDokter() {
    const [poli, setPoli] = useState('');
    const [jadwal, setJadwal] = useState('');
    const [dokter, setDokter] = useState('');
    const [namaPasien, setNamaPasien] = useState('');
    const [jalur, setJalur] = useState('');
    const [tanggalPeriksa, setTanggalPeriksa] = useState('');

    const handleSubmit = () => {
        // Logic for handling form submission
        console.log({ poli, jadwal, dokter, namaPasien, jalur, tanggalPeriksa });
    };

    return (
        <main>
            <div className="section section-lg bg-primary text-dark pb-0">
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col text-center">
                            <div className="header">
                                <span className="fa fa-heartbeat fa-3x"></span>
                                <h1 className="display-3 mb-4">Layanan Dokter</h1>
                                <br />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 justify-content-center align-items-center d-flex">
                        <div className="col-lg-8 col-sm-8">
                            <div className="form-row">
                                <div className="col-lg-6 col-sm-6">
                                    <div className="form-group mb-4">
                                        <label className="h6" htmlFor="poli">Poli</label>
                                        <select id="poli" className="form-control" value={poli} onChange={(e) => setPoli(e.target.value)}>
                                            <option value="" disabled selected>Pilih Poli</option>
                                            <option value="Poli Mata">Poli Mata</option>
                                            <option value="Poli Penyakit Dalam">Poli Penyakit Dalam</option>
                                            <option value="Poli Anak">Poli Anak</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group col-lg-6 col-sm-6">
                                    <label className="h6" htmlFor="jadwal">Jadwal</label>
                                    <select id="jadwal" className="form-control" value={jadwal} onChange={(e) => setJadwal(e.target.value)}>
                                        <option value="" disabled selected>Pilih Jadwal</option>
                                        <option value="08.00-11.00">08.00-11.00</option>
                                        <option value="14.00-16.00">14.00-16.00</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="h6" htmlFor="dokter">Dokter</label>
                                <select id="dokter" className="form-control" value={dokter} onChange={(e) => setDokter(e.target.value)}>
                                    <option value="" disabled selected>Pilih Dokter</option>
                                    <option value="Rafi Achmad,dr.,Sp.PD">Rafi Achmad,dr.,Sp.PD</option>
                                    <option value="Prita Ayu,Sp.A.,Dr.">Prita Ayu,Sp.A.,Dr.</option>
                                    <option value="Novia Amanda,Sp.M.,Dr">Novia Amanda,Sp.M.,Dr</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label className="h6" htmlFor="namaPasien">Nama Pasien</label>
                                <input type="text" id="namaPasien" className="form-control" placeholder="Nama Pasien" value={namaPasien} onChange={(e) => setNamaPasien(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label className="h6" htmlFor="jalur">Jalur</label>
                                <select id="jalur" className="form-control" value={jalur} onChange={(e) => setJalur(e.target.value)}>
                                    <option value="" disabled selected>Pilih Jalur</option>
                                    <option value="BPJS">BPJS</option>
                                    <option value="Mandiri">Mandiri</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label className="h6" htmlFor="exampleInputDate1">Tanggal Periksa</label>
                                <div className="input-group mb-4">
                                    <div className="input-group-prepend">
                                       <span className="input-group-text"><span className="far fa-calendar-alt"></span></span>
                                    </div>
                                    <input className="form-control datepicker" id="exampleInputDate1" placeholder="Pilih Tanggal" type="text" aria-label="Date with icon left" value={tanggalPeriksa} onChange={(e) => setTanggalPeriksa(e.target.value)} />
                                </div>
                            </div>
                            <div className="text-right">
                                <button className="btn btn-primary animate-down-2 btn-pink" type="button" onClick={handleSubmit}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default LayananDokter;
