import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { layThongTinPhongVeApiAction } from "../../redux/actions/QuanLyPhimAction";

export default function DatVe(props) {
  const { thongTinPhongVe } = useSelector((state) => state.QuanLyPhimReducer);
  const dispatch = useDispatch();
  console.log("thongTinPhongVe", thongTinPhongVe);

  useEffect(() => {
    // lấy mã lịch chiếu từ api

    let { maLichChieu } = props.match.params;

    dispatch(layThongTinPhongVeApiAction(maLichChieu));
  }, []);

  let { thongTinPhim, danhSachGhe } = thongTinPhongVe;
  return (
    <div className="container fluid">
      <div className="row">
        <div className="col-8"></div>
        <div className="col-4">
          <p className="display-4">{thongTinPhim?.tenPhim}</p>
          <p>
            <span className="font-weight-bold">Cụm rạp</span>
            <span>
              {thongTinPhim?.tenCumRap} - {thongTinPhim?.tenRap}
            </span>
          </p>

          <p>
            <span className="font-weight-bold">Địa chỉ</span>
            <span>{thongTinPhim?.diaChi}</span>
          </p>

          <p>
            <span className="font-weight-bold">Ngày chiếu</span>
            <span>{thongTinPhim?.ngayChieu}</span>
          </p>

          <p>
            <span className="font-weight-bold">Giờ chiếu</span>
            <span>{thongTinPhim?.gioChieu}</span>
          </p>

          
        </div>
      </div>
    </div>
  );
}
