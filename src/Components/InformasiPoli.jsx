import React from 'react';

function InformasiPoli() {
    return (
        <div id="informasi-poli" className="section bg-primary text-dark section-lg">
            <div className="container">
                {/* Title */}
                <div className="row">
                    <div className="col text-center">
                        <div>
                            <span className="h2 text-center">Informasi Poli</span>
                        </div>
                    </div>
                </div> {/* end title */}

                <div className="row mt-6">
                    <PoliModal
                        id="modal-default"
                        title="Informasi Poli Anak"
                        buttonLabel="Poli Anak"
                        doctorName="Prita Ayu,Sp.A.,Dr."
                        schedule="08.00-11.00"
                        days="Senin, Selasa, Kamis"
                    />
                    <PoliModal
                        id="modal-notification"
                        title="Informasi Poli Penyakit Dalam"
                        buttonLabel="Poli Penyakit Dalam"
                        doctorName="Rafi Achmad,dr.,Sp.PD."
                        schedule="14.00-16.00"
                        days="Senin, Rabu, Kamis"
                    />
                    <PoliModal
                        id="modal-form-signup"
                        title="Informasi Poli Umum"
                        buttonLabel="Poli Umum"
                        doctorName="Rafi Achmad,dr.,Sp.PD."
                        schedule="14.00-16.00"
                        days="Senin, Rabu, Kamis"
                    />
                    <PoliModal
                        id="modal-achievement"
                        title="Informasi Poli Mata"
                        buttonLabel="Poli Mata"
                        doctorName="Novia Amanda,Sp.M,Dr."
                        schedule="08.00-11.00"
                        days="Senin, Selasa, Rabu"
                    />
                </div>
            </div>
        </div>
    );
}

function PoliModal({ id, title, buttonLabel, doctorName, schedule, days }) {
    return (
        <div className="col-md-6">
            <button type="button" className="btn btn-block btn-primary mb-4" data-toggle="modal" data-target={`#${id}`}>{buttonLabel}</button>
            <div className="modal fade" id={id} tabIndex="-1" role="dialog" aria-labelledby={id} aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content bg-primary">
                        <div className="modal-header">
                            <p className="modal-title" id="modal-title-notification">{title}</p>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="py-3 text-center">
                                <span className="modal-icon display-1-lg"><span className="fa fa-user-md"></span></span>
                                <h2 className="h4 my-3">{doctorName}</h2>
                                <p>Jadwal Praktek : {schedule}.<br />
                                    <br />Hari : {days}.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InformasiPoli;
