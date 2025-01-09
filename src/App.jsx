import { useState } from 'react';
import Nav from './components/NavBar/Nav/Nav';
import Li from './components/NavBar/Li/Li';
import NavLinks from './components/NavBar/NavLinks/NavLinks';
import MenuPlegable from './components/NavBar/MenuPlegable/MenuPlegable';
import Header from './components/NavBar/Header/Header';
import HeaderTitle from './components/NavBar/HeaderTitle/HeaderTitle';
import SocialIcons from './components/NavBar/SocialIcons/SocialIcons';
import Greatings from './components/Greatings/Greatings';
import './App.css';
import ItemListContainer from './components/ItemList/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom';
function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <>
      <BrowserRouter>
        <Header>
          <HeaderTitle />

          <Nav>
            <NavLinks>
              <Li texto="Inicio" to="#"></Li>
              <Li LiClass="colecciones">
                <NavLink to="/colecciones" ClassName="colecciones-link">
                  Colecciones
                </NavLink>
                <MenuPlegable>
                  <Li texto="Praia" to="/colecciones/praia" />
                  <Li texto="Éclat Céleste" to="/colecciones/eclat-celeste" />
                  <Li
                    texto="Resplandor del desierto"
                    to="/colecciones/resplandor-del-desierto"
                  />
                  <Li texto="SastrO" to="/colecciones/sastro" />
                  <Li texto="Retrofutura" to="/colecciones/retrofutura" />
                  <Li texto="Ver Todo" to="/colecciones" />
                </MenuPlegable>
              </Li>
              <Li texto="Joyería" to="/joyeria"/>
              <Li texto="Vestidos" to="/vestidos"/>
            </NavLinks>
          </Nav>
          <SocialIcons />
        </Header>
        <Routes>
          <Route
            path="/"
            element={
              <ItemListContainer
                greeting="Productos de Diseñadora Profesional:"
                setSelectedProduct={setSelectedProduct}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
