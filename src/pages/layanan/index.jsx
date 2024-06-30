const LayananUmum = () => {
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
                    <label className="h6" for="poli">
                      Poli
                    </label>
                    <select id="poli" className="form-control">
                      <option selected>Pilih Poli</option>
                      <option value="1">Poli Mata</option>
                      <option value="2">Poli Penyakit Dalam</option>
                      <option value="3">Poli Anak</option>
                    </select>
                  </div>
                </div>
                <div className="form-group col-lg-6 col-sm-6">
                  <label className="h6" for="jadwal">
                    Jadwal
                  </label>
                  <select id="jadwal" className="form-control">
                    <option selected>Pilih Jadwal</option>
                    <option value="1">08.00-11.00</option>
                    <option value="2">14.00-16.00</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label className="h6" for="dokter">
                  Dokter
                </label>
                <select id="dokter" className="form-control">
                  <option selected>Pilih Dokter</option>
                  <option selected>Rafi Achmad,dr.,Sp.PD</option>
                  <option selected>Prita Ayu,Sp.A.,Dr.</option>
                  <option selected>Novia Amanda,Sp.M .Dr</option>
                </select>
              </div>
              <div className="form-group">
                <label className="h6" for="namaPasien">
                  Nama Pasien
                </label>
                <input
                  type="text"
                  id="namaPasien"
                  className="form-control"
                  placeholder="Nama Pasien"
                />
              </div>
              <div className="form-group">
                <label className="h6" for="jalur">
                  Jalur
                </label>
                <select id="jalur" className="form-control">
                  <option selected>Pilih Jalur</option>
                  <option selected>BPJS</option>
                  <option selected>Mandiri</option>
                </select>
              </div>
              <div className="form-group">
                <label className="h6" for="exampleInputDate1">
                  Tanggal Periksa
                </label>
                <div className="input-group mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <span className="far fa-calendar-alt"></span>
                    </span>
                  </div>
                  <input
                    className="form-control datepicker"
                    id="exampleInputDate1"
                    placeholder="Pilih Tanggal"
                    type="text"
                    aria-label="Date with icon left"
                  />
                </div>
              </div>
              <div className="text-right">
                <button
                  className="btn btn-primary animate-down-2 btn-pink"
                  type="button"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LayananUmum;
