const InfoKamar = () => {
  return (
    <main>
      <div className="section-header pb-6 bg-primary overflow-hidden text-center border-bottom border-light">
        <div className="container z-2">
          <div className="row mb-2 justify-content-center">
            <div className="col-12 col-md-8 col-lg-7">
              <span className="fa fa-bed fa-3x"></span>
              <h1 className="display-3 mb-4">Informasi Kamar</h1>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="mb-2">
                <div className="table-responsive-sm shadow-soft rounded">
                  <table className="table table-striped">
                    <tr>
                      <th className="border-0" scope="col" id="className2">
                        No
                      </th>
                      <th className="border-0" scope="col" id="teacher2">
                        Nama Kamar
                      </th>
                      <th className="border-0" scope="col" id="males2">
                        Jumlah Terpakai
                      </th>
                      <th className="border-0" scope="col" id="females2">
                        Sisa
                      </th>
                    </tr>
                    <tr>
                      <th scope="row" id="firstyear2" rowspan="1">
                        1
                      </th>
                      <th
                        scope="row"
                        id="Bolter2"
                        headers="firstyear2 teacher2"
                      >
                        Mawar
                      </th>
                      <td headers="firstyear2 Bolter2 males2">5</td>
                      <td headers="firstyear2 Bolter2 females2">4</td>
                    </tr>
                    <tr>
                      <th scope="row" id="firstyear2" rowspan="1">
                        2
                      </th>
                      <th
                        scope="row"
                        id="Cheetham2"
                        headers="firstyear2 teacher2"
                      >
                        Melati
                      </th>
                      <td headers="firstyear2 Cheetham2 males2">7</td>
                      <td headers="firstyear2 Cheetham2 females2">9</td>
                    </tr>
                    <tr>
                      <th scope="row" id="secondyear2" rowspan="1">
                        3
                      </th>
                      <th scope="row" id="Lam2" headers="secondyear2 teacher2">
                        Teratai
                      </th>
                      <td headers="secondyear2 Lam2 males2">3</td>
                      <td headers="secondyear2 Lam2 females2">9</td>
                    </tr>
                    <tr>
                      <th scope="row" id="secondyear2" rowspan="1">
                        4
                      </th>
                      <th
                        scope="row"
                        id="Crossy2"
                        headers="secondyear2 teacher2"
                      >
                        Tulip
                      </th>
                      <td headers="secondyear2 Crossy2 males2">4</td>
                      <td headers="secondyear2 Crossy2 females2">3</td>
                    </tr>
                    <tr>
                      <th scope="row" id="secondyear2" rowspan="1">
                        5
                      </th>
                      <th
                        scope="row"
                        id="Forsyth2"
                        headers="secondyear2 teacher2"
                      >
                        Eceng Gondok
                      </th>
                      <td headers="secondyear2 Forsyth2 males2">6</td>
                      <td headers="secondyear2 Forsyth2 females2">9</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default InfoKamar;
