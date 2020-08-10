import React from "react";
import { UlHeaderInside, UlHeaderOut } from "../components/Ul";
import { ButtonHeaderInside } from "../components/Button";
import { Dropdown, Menu } from "antd";

export default function Header() {
  const loc = window.location.pathname;

  const menuAdm = (
    <Menu>
      <Menu.Item key="0">
        <a href="/about">Sobre o sistema</a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="1">Sair</Menu.Item>
      <Menu.Item key="2">Trocar Senha</Menu.Item>
    </Menu>
  );

  if (loc !== "/" && loc !== "/about" && loc !== "/signUp") {
    return (
      <React.Fragment>
        <UlHeaderInside>
          <li>
            <a href="/scales_listing">
              Escalas
        </a>
          </li>
          <li>
            <a href="/adm">
              Administradores
        </a>
          </li>
        </UlHeaderInside>
        <Dropdown overlay={menuAdm}>
          <ButtonHeaderInside>
            Nome pessoa
          </ButtonHeaderInside>
        </Dropdown>
      </React.Fragment>
    );
  } else {
    return (
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
    );
  }
}
