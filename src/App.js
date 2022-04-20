import React, { useEffect, useState } from "react";

import mockedData from "../data.json";
import api from "./utils/api.js";

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { List } from "./components/List";
import { PracticeContainer } from "./practice/PracticeContainer";

import "./index.css";
import Logo from "./components/Logo";
import { Search } from "./components/Search";

export const App = () => {
  const [foodList, setFoodList] = useState(mockedData);
  // Создаём стэйт inputValue,в качестве начального значения принимающий пустую строку.
  const [inputValue, setIntputValue] = useState("");
  // Ф-я срабатывающая при заполнении формы
  const handleChange = (event) => {
    //Деструктурируем объект event. Свойство target, сохраняется в переменную с именем value
    const {
      target: { value },
    } = event;
    console.log("-->", value);
    setIntputValue(value);
  };
  const filterFoodlist = (inputValue) => {
    const filteredList = mockedData.filter(({ name }) =>
      name.includes(inputValue)
    );
    setFoodList(filteredList);
  };

  useEffect(() => {}, []);
  //Как понять за каким компонентом следит useEffect
  // Компонент APP?
  useEffect(() => {
    console.log("UPDATE");
    filterFoodlist(inputValue);
  }, [inputValue]);

  return (
    <div className="appContainer">
      {/* Присваиваем компоненту Header пропс с именем changeList. В качестве значения используем ф-ю setFoodList , изменяющую стэйт foodList.    */}
      <Header>
        <Logo></Logo>
        <Search handleChange={handleChange}></Search>
      </Header>
      <div className="content container">
        <div className="content__cards">
          <List list={foodList} />
        </div>
      </div>
      <Footer />
      {/* <PracticeContainer /> */}
    </div>
  );
};
