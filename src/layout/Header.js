import React from "react";
import { UlHeaderInside, UlHeaderOut } from "../components/Ul";
import { ButtonHeaderInside } from "../components/Button";
import { CaretDownOutlined } from "@ant-design/icons";
import { Dropdown, Menu } from "antd";
import { useSelector } from "react-redux";
import { isAuthenticatedPeople, isAuthenticatedAdm, logout } from "../service/Auth";
import Logo from "../assets/images/logo512.png";

const logoStyle = {
  height: "35px",
};

const arrowStyle = {
  marginLeft: 10,
};

export default function Header() {
  const loc = window.location.pathname;

  const userRedux = useSelector(state => state.user);

  let admName = false;
  let peopleName = false;

  if (userRedux.session.adm !== undefined) {
    admName = userRedux.session.adm.name;
  }

  if (userRedux.session.people !== undefined) {
    peopleName = userRedux.session.people.name;
  }

  const menu = (
    <Menu>
      <Menu.Item key="0">
        <a href="/about">Sobre o sistema</a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="2"><a href="/change_password">Mudar senha</a></Menu.Item>
      <Menu.Item key="1" onClick={() => logout()}>Sair</Menu.Item>
    </Menu>
  );


  return (
    <React.Fragment>
      <a href="/">
        <img style={logoStyle} src={Logo} alt="Logo branco" />
      </a>

      { isAuthenticatedAdm() && isAuthenticatedPeople() === false ?
        <React.Fragment>

          <UlHeaderInside>
            <li>
              <a href="/">
                Escalas
              </a>
            </li>
            <li>
              <a href="/adm">
                Administradores
              </a>
            </li>
          </UlHeaderInside>

        </React.Fragment>
        : isAuthenticatedAdm() === false && isAuthenticatedPeople() ?
          <React.Fragment>

            <UlHeaderInside>
              <li>
                
              </li>
              <li>
                
              </li>
            </UlHeaderInside>

          </React.Fragment>

          : <React.Fragment>
            <UlHeaderOut className="f-right">
              <li>
                <a href="/">
                  Início
                </a>
              </li>
              <li>
                <a href="/signUp">
                  Cadastre-se
                </a>
              </li>
              <li>
                <a href="/about">
                  Sobre o sistema
                </a>
              </li>
            </UlHeaderOut>
          </React.Fragment>
      }


      { isAuthenticatedPeople() || isAuthenticatedAdm() ?
        (
          <Dropdown overlay={menu} trigger={["click"]}>
            <ButtonHeaderInside
              onClick={(e) => e.preventDefault()}
            >
              <React.Fragment>
                {admName ? <React.Fragment> {admName} </React.Fragment>
                  : peopleName ? <React.Fragment> {peopleName} </React.Fragment>
                    : "user"}
              </React.Fragment>
            </ButtonHeaderInside>
          </Dropdown>
        )
        : ""}



    </React.Fragment>


  );

}
