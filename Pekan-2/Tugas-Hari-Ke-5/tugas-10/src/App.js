import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="card">
      <h1>Form Pembelian Buah</h1>
      <table className="table">
        
        <tbody>
          <tr>
            <td scope="row"></td>
            <td>Nama Pelanggan</td>
            <td> <input></input></td>
          </tr>
          <tr>
            <td scope="row"></td>
            <td className="title">Daftar Item</td>
            <td>
              <input type="checkbox" value="jeruk"/>
              <label>Semangka</label> <br></br>
              <input type="checkbox" value="jeruk"/>
              <label>Jeruk</label> <br></br>
              <input type="checkbox" value="jeruk"/>
              <label>Nanas</label> <br></br>
              <input type="checkbox" value="jeruk"/>
              <label>Salak</label> <br></br>
              <input type="checkbox" value="jeruk"/>
              <label>Anggur</label> <br></br>
            </td>
          </tr>
        </tbody>
      </table>
      <a className="btn" href="">Kirim</a>
      </div>
    </div>
  );
}

export default App;
