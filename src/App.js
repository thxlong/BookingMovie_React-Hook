import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import TrangChu from "./page/TrangChu/TrangChu";
import DangKy from "./page/DangKy/DangKy";
import DangNhap from "./page/DangNhap/DangNhap";
import ChiTietPhim from "./page/ChiTietPhim/ChiTietPhim";
import Header from "./components/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/trangchu" component={TrangChu} />
        <Route exact path="/dangky" component={DangKy} />
        <Route exact path="/dangnhap" component={DangNhap} />
        <Route exact path="/chitietphim/:maPhim" component={ChiTietPhim} />
        <Route exact path="/" component={TrangChu} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
