import Axios from "axios";
import React, { useState, useEffect } from "react";

export default function ChiTietPhim(props) {
  // tạo 1 state chứa thông tin chi tiết phim giá trị ban đầu là object rỗng
  const [chiTietPhim, setChiTietPhim] = useState({});

  //   Dùng useEffect để tự động gọi api khi trang chi tiết phim load ra
  useEffect(async () => {
    // props.match.params: :props này là props của thẻ Route truyền cho component
    // B1: lấy mã phim từ url
    const maPhim = props.match.params.maPhim;
    // B2: dựa vào mã gửi lên api backend lấy dữ liệu phim về và gán vào state chiTietphim
    const result = await Axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
      method: "GET",
    });
    console.log("data", result);
    setChiTietPhim(result.data);
    //setTitle
    document.title = result.data.tenPhim;
  }, []); //tham số thứ 2 là 1 mảng rỗng chỉ muốn 1 lần load ra
  // props này là props của thẻ Route truyền cho component
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <img
            style={{ width: "300px", height: "600px" }}
            src={chiTietPhim.hinhAnh}
            alt={chiTietPhim.hinhAnh}
          />
        </div>

        <div className="col-6">
          <table className="table">
            <tbody className="text-white">
              <tr>
                <td>Tên phim</td>
                <td>{chiTietPhim.tenPhim}</td>
              </tr>
              <tr>
                <td>Mô tả</td>
                <td>{chiTietPhim.moTa}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-12 text-white text-center bg-warning">
          <h2>Thông tin lịch chiếu</h2>
        </div>

        <div className="row">
          <div
            className="nav flex-column nav-pills col-4"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            {chiTietPhim.heThongRapChieu?.map((heThongRap, index) => {
              return (
                <a
                  key={index}
                  className="nav-link"
                  href={`#${heThongRap.tenHeThongRap}`}
                  id={`v-pills-${heThongRap.tenHeThongRap}`}
                >
                  {heThongRap.tenHeThongRap}
                </a>
              );
            })}
          </div>

          <div
            className="tab-content col-8 text-warning"
            id="v-pills-tabContent"
          >
            {chiTietPhim.heThongRapChieu?.map((heThongRap, index) => {
              return;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
