import "./App.css";
import { BrowserRouter, Route, Switch, Router } from "react-router-dom";
import TrangChu from "./page/TrangChu/TrangChu";
import DangNhap from "./page/DangNhap/DangNhap";
import ChiTietPhim from "./page/ChiTietPhim/ChiTietPhim";
import { HomeTemplate } from "./templates/HomeTempate";
import { LoginTemplate } from "./templates/LoginTemplate";
import DatVe from "./page/DatVe/DatVe";
import { createBrowserHistory } from "history";
import { BookingTemplate } from "./templates/BookingTemplate";
import { AdminTemplate } from "./templates/AdminTemplate";
import { QuanLyPhim } from "./QuanLyPhim/QuanLyPhim";
import { QuanLyNguoDung } from "./QuanLyNguoiDung/QuanLyNguoiDung";

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplate path="/trangchu" Component={TrangChu} />
        <HomeTemplate path="/chitietphim/:maPhim" Component={ChiTietPhim} />
        <LoginTemplate path="/dangnhap" Component={DangNhap} />

        <AdminTemplate
          path="/admin/quanlynguoidung"
          Component={QuanLyNguoDung}
        />

        <AdminTemplate path="/admin/quanlyphim" Component={QuanLyPhim} />

        <BookingTemplate path="/datve/:maLichChieu" Component={DatVe} />
        <HomeTemplate path="" Component={TrangChu} />
      </Switch>
    </Router>
  );
}

export default App;
