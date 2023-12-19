import React, { useState } from 'react';

const Upload = () => {
  const [suratLamaran, setSuratLamaran] = useState(null);
  const [cv, setCv] = useState(null);
  const [ijasah, setIjasah] = useState(null);
  const [berkasTambahan, setBerkasTambahan] = useState(null);

  const handleFileChange = (event, setFile) => {
    const file = event.target.files[0];
    setFile(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Lakukan logika upload berkas di sini
    console.log('Surat Lamaran:', suratLamaran);
    console.log('CV:', cv);
    console.log('Ijasah:', ijasah);
    console.log('Berkas Tambahan:', berkasTambahan);

    // Reset formulir setelah pengiriman
    setSuratLamaran(null);
    setCv(null);
    setIjasah(null);
    setBerkasTambahan(null);

    // Menampilkan konfirmasi bahwa berkas sudah terupload
    const isConfirmed = window.confirm('Upload berkas berhasil! Klik "Ok" untuk melanjutkan.');

    // Jika pengguna mengklik "Mengerti", arahkan ke halaman /detail
    if (isConfirmed) {
      window.location.href = '/upload';
    }
  };

  return (
    <div className="card p-3 mx-auto mt-5" style={{ maxWidth: '500px' }}>
      <h2 className="text-center mb-4">Form Upload Berkas</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Surat Lamaran Kerja:</label>
          <input type="file" className="form-control" onChange={(e) => handleFileChange(e, setSuratLamaran)} />
        </div>
        <div className="mb-3">
          <label className="form-label">CV:</label>
          <input type="file" className="form-control" onChange={(e) => handleFileChange(e, setCv)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Ijasah:</label>
          <input type="file" className="form-control" onChange={(e) => handleFileChange(e, setIjasah)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Berkas Tambahan:</label>
          <input type="file" className="form-control" onChange={(e) => handleFileChange(e, setBerkasTambahan)} />
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary">
            Upload Berkas
          </button>
        </div>
      </form>
    </div>
  );
};

export default Upload;
