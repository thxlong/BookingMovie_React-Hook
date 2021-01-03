// Đây là file chứa các hàm action

import Axios from "axios";
import { DOMAIN } from "../../util/setting";
import { GET_DATA_FILM } from "../const/QuanLyPhimConst";

export const getDataFilmAction = () => {
  // gọi ajax lấy data từ API về
  return async (dispatch) => {
    const result = await Axios({
      url: `${DOMAIN}/api/quanlyphim/laydanhsachphim?manhom=GP01`,
      method: "GET",
    });

    //    sau khi có data => dùng hàm middleware reduxthunk (dispatch) để đưa dữ liệu lên reducer
    dispatch({
      type: "GET_DATA_FILM",
      dataFilm: result.data,
    });
  };
};

export const layThongTinPhongVeApiAction = (maLichChieu) => {
  return async (dispatch) => {
    try {
      const result = await Axios({
        url: `${DOMAIN}/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`,
        method: "GET",
      });

      dispatch({
        type: "LAY_THONG_TIN_PHONG_VE",
        thongTinPhongVe: result.data,
      });
    } catch (error) {
      console.log(error.response?.data);

      console.log(error);
    }
  };
};
