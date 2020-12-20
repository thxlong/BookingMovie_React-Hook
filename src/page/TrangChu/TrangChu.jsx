import Axios from "axios";
import React, { useEffect } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { getDataFilmAction } from "../../redux/actions/QuanLyPhimAction";
import { DOMAIN } from "../../util/setting";

export default function TrangChu(props) {
  // userSelector là hook reactderux cung cấp dùng để lấy state từ store về
  const mangPhim = useSelector((state) => state.QuanLyPhimReducer.mangPhim);
  //useDispatch là hook thay thế cho props.dispatch khi dùng redux connect

  const dispatch = useDispatch();

  console.log("mangPhim", mangPhim);
  //   console.log("props", props.mangPhim);
  const loadDataPhim = async () => {
    dispatch(getDataFilmAction());
  };

  useEffect(() => {
    dispatch(getDataFilmAction());
  }, []);

  const renderFilm = () => {
    return mangPhim.map((phim, index) => {
      return (
        <div className="col-4" key={index}>
          <div className="card text-left">
            <img
              className="card-img-top"
              src={phim.hinhAnh}
              alt={phim.hinhAnh}
            />
            <div className="card-body">
              <h4 className="card-title">{phim.tenPhim}</h4>
              <p className="card-text">{phim.moTa}</p>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="container">
      Trang chủ
      <div className="row">{renderFilm()}</div>
    </div>
  );
}

// Kết nối reducer lấy dữ liệu mảng phim về => props.mangPhim

// const mangStateToProps = (state) => {
//   return {
//     mangPhim: state.QuanLyPhimReducer.mangPhim,
//   };
// };

// export default connect(mangStateToProps)(TrangChu);
