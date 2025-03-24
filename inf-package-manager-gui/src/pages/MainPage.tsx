// import React, { useState } from "react";
// import { invoke } from "@tauri-apps/api/core";
import "./MainPage.css";
import { useTranslation } from "react-i18next";

function MainPage() {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t("application.pages.home.title")}</h1>
      <p>{t("application.pages.home.descriptions.first")}</p>
      <p>{t("application.pages.home.descriptions.second")}</p>
    </div>
  );
}

export default MainPage;
