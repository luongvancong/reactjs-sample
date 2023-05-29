import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons"
import logo from "@resource/image/logo.png"
import { Layout, Menu, theme } from "antd"
import React, { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import lodash from "lodash"
import { useCurrentRoute } from "@hook/useCurrentRoute.hook"
import { menuItems } from "@config/sidebar"

const { Header, Sider, Content } = Layout

export const DefaultLayout = (props: any) => {
  const [collapsed, setCollapsed] = useState(false)
  const [openKeys] = useState<any>(undefined)
  const [selectedKeys, setSelectedKeys] = useState<any>(undefined)
  const location = useLocation()
  const currentRoute = useCurrentRoute(location)

  const {
    token: { colorBgContainer },
  } = theme.useToken()


  useEffect(() => {
    const currentRouteName = lodash.get(currentRoute, "name", "")

    menuItems.forEach((x) => {
      if (lodash.indexOf(x.activeByRouteNames, currentRouteName) >= 0) {
        setSelectedKeys([x.key])
      }
    })
  }, [location, currentRoute])

  return (
    <Layout className="min-h-screen">
      <Sider
        trigger={null}
        collapsible
        className={"bg-white-important"}
        collapsed={collapsed}>
        <div className="text-center pt-4">
          <img
            className="logo w-[80px] object-scale-down"
            src={logo}
          />
        </div>
        <Menu
          mode="inline"
          className={"bg-white-important pt-4"}
          openKeys={!openKeys ? undefined : openKeys}
          selectedKeys={selectedKeys ? selectedKeys : undefined}
          items={menuItems
            .filter((x) => x.show)
            .map((x) => ({
              key: x.key,
              icon: x.icon,
              label: <Link to={x.url}>{x.title}</Link>,
              children: x.children?.map((xc) => ({
                key: xc.key,
                icon: xc.icon,
                label: <Link to={xc.url}>{xc.title}</Link>,
              })),
            }))}
        />
      </Sider>
      <Layout className="site-layout">
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <div className="flex justify-between">
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: "trigger ml-4 text-xl !text-primary",
              onClick: () => setCollapsed(!collapsed),
            })}
            <div className={"pr-4 cursor-pointer"}>
              <b>Hellow Admin</b>
            </div>
          </div>
        </Header>
        <Content
          className={"content-container"}
          style={{
            margin: "24px 16px",
            minHeight: 280,
          }}>
          {props.children}
        </Content>
      </Layout>
    </Layout>
  )
}
