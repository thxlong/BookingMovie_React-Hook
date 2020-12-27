import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { dangNhapAction } from "../../redux/actions/QuanLyNguoiDungAction";

export default function DangNhap(props) {
  // useState là thư viện thay thế this.state trong RE class component
  const [state, setState] = useState({
    taiKhoan: "",
    matKhau: "",
  }); // userState nhận giá trị đầu vào la stateDefault
  //ứng với classComponent state = {taiKhoan:'',matKhau:''}

  //   userDispatch là thư viện do hook do react redux cung cấp tương tự pros.dispatch khi sử dụng connect
  const dispatch = useDispatch();

  console.log("state", state);
  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    console.log(name, value);

    // const newState = { ...state, [name]: value };
    // setState({
    //   [name]: value,
    // });
    // setState(newState);

    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //cần sự kiện submit của browser (reload page)
    // gọi API để xác thực đăng nhập
    dispatch(dangNhapAction(state));

    // push: chuyển huống trang co thể backpage lại được
    // props.history.push("trangchu");

    // replace: Thay thế trang hiện tại bằng trang khác
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <h3>Đăng nhập</h3>
      <div className="form-group">
        <p>Tài khoản</p>
        <input
          className="form-control"
          name="taiKhoan"
          onChange={handleChangeInput}
        />
      </div>

      <div className="form-group">
        <p>Mật khẩu</p>
        <input
          type="password"
          className="form-control"
          name="matKhau"
          onChange={handleChangeInput}
        />
      </div>

      <div className="form-group">
        <button type="submit" className="btn btn-success">
          Đăng nhập
        </button>
      </div>
    </form>
  );
}
