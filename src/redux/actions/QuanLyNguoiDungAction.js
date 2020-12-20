import Axios from "axios";
import { ACCESS_TOKEN, DOMAIN, USER_LOGIN } from "../../util/setting";

// nguoiDung = {taiKhoan:'',matKhau:''}
export const dangNhapAction = (nguoiDung) => {
  return async (dispatch) => {
    try {
      const result = await Axios({
        url: `${DOMAIN}/api/quanlynguoidung/dangnhap`,
        method: "POST",
        data: nguoiDung,
      });
      console.log("NguoiDung", result.data);
      //   lấy token lưu vào localstorage
      localStorage.setItem(ACCESS_TOKEN, result.data.accessToken);
      localStorage.setItem(USER_LOGIN, JSON.stringify(result.data));
    } catch (error) {
      console.log(error.response?.data);
    }
  };
};
