import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-sm navbar-dark"
        style={{ backgroundColor: "#343a3f" }}
      >
        <a className="navbar-brand" href="/">
          Movie
        </a>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        />
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              {/* Dùng thẻ navlink để thay thế thẻ <a> để không bị reload lại tất cả trang */}
              <NavLink
                activeClassName="bg-white text-dark"
                activeStyle={{ fontWeight: "bold" }}
                className="nav-link"
                to="/trangchu"
              >
                Trang chủ
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="bg-white text-dark"
                activeStyle={{ fontWeight: "bold" }}
                className="nav-link"
                to="/dangky"
              >
                Đăng ký
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                activeClassName="bg-white text-dark"
                activeStyle={{ fontWeight: "bold" }}
                className="nav-link"
                to="/dangnhap"
              >
                Đăng nhập
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="dropdownId"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdownId">
                <a className="dropdown-item" href="#">
                  Action 1
                </a>
                <a className="dropdown-item" href="#">
                  Action 2
                </a>
              </div>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="text"
              placeholder="Search"
            />
            <button className="btn btn-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}
