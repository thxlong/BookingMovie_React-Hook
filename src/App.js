import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import TrangChu from "./page/TrangChu/TrangChu";
import DangKy from "./page/DangKy/DangKy";
import DangNhap from "./page/DangNhap/DangNhap";
import ChiTietPhim from "./page/ChiTietPhim/ChiTietPhim";
import Header from "./components/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route path="/trangchu" component={TrangChu} />
      <Route path="/dangky" component={DangKy} />
      <Route path="/dangnhap" component={DangNhap} />
      <Route path="/chitietphim" component={ChiTietPhim} />
    </BrowserRouter>
  );
}

export default App;
