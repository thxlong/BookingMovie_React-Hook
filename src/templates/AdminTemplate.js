import { NavLink, Redirect, Route } from "react-router-dom";
import React, { PureCompomnent } from "react";

//Copy phầm importt từ thư viện Ant Design
import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";

import "../../node_modules/antd/dist/antd.min.css";
import { useState } from "react";
import { Components } from "antd/lib/date-picker/generatePicker";
import { USER_LOGIN } from "../util/setting";

const { Header, Sider, Content } = Layout;

export const AdminTemplate = (props) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  if (localStorage.getItem(USER_LOGIN)) {
    //Phải là quản trị mới được vào

    let userLogin = JSON.parse(localStorage.getItem(USER_LOGIN));
    if (userLogin.maLoaiNguoiDung === "QuanTri") {
      return (
        <Route
          path={props.path}
          exact
          render={(propsRoute) => {
            //Nội dung render khi người dùng gõ đúng route admin

            return (
              <Layout>
                <Sider trigger={null} collapsible collapsed={collapsed}>
                  <div className="logo" />
                  <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
                    <Menu.Item key="1" icon={<UserOutlined />}>
                      <NavLink to="/admin/quanlyphim">Quản lý phim</NavLink>
                    </Menu.Item>
                    <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                      <NavLink to="/admin/quanlynguoidung">
                        Quản lý người dùng
                      </NavLink>
                    </Menu.Item>
                  </Menu>
                </Sider>
                <Layout className="site-layout">
                  <Header
                    className="site-layout-background"
                    style={{ padding: 0 }}
                  >
                    {React.createElement(
                      collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                      {
                        className: "trigger",
                        onClick: toggle,
                      }
                    )}
                  </Header>
                  <Content
                    className="site-layout-background"
                    style={{
                      margin: "24px 16px",
                      padding: 24,
                      minHeight: 280,
                    }}
                  >
                    <props.Component {...Components} />
                  </Content>
                </Layout>
              </Layout>
            );
          }}
        />
      );
    }
    return <Redirect to="/dangnhap" />;
  }
  alert("Bạn không phải là admin");
  return <Redirect to="/dangnhap" />;
};
