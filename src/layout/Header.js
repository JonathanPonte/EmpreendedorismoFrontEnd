import React from "react";
import { UlHeaderInside, UlHeaderOut } from "../components/Ul";

export default function Header() {
  const loc = window.location.pathname;
  

  if (loc !== "/" && loc !== "/about" && loc !== "/signUp") {
    return (
    <UlHeaderInside>
      <li>
        <a href="/scales_listing">
          Escalas
        </a>
      </li>
      <li>
        <a href="/exercises">
          Administradores
        </a>
      </li>
    </UlHeaderInside>
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
