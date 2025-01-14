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
          <Link to="/">
            <HeaderTitle />
          </Link>
          <Nav>
            <NavLinks>
              <Li texto="Inicio" to="/"></Li>
              <div className="colecciones">
                <NavLink to="/" className="colecciones-link">
                  Colecciones
                </NavLink>
                <MenuPlegable>
                  <Li texto="Praia" to="/coleccion/praia" />
                  <Li texto="Éclat Céleste" to="/coleccion/eclatceleste" />
                  <Li
                    texto="Resplandor del desierto"
                    to="/coleccion/resplandordeldesierto"
                  />
                  <Li texto="SastrO" to="/coleccion/sastro" />
                  <Li texto="Retrofutura" to="/coleccion/retrofutura" />
                  <Li texto="Ver Todo" to="/" />
                </MenuPlegable>
              </div>
              <Li texto="Joyería" to="category/joyeria" />
              <Li texto="Vestidos" to="category/vestidos" />
            </NavLinks>
          </Nav>
          <SocialIcons />
        </Header>
        <Routes>
          <Route
            path="/"
            element={
              <ItemListContainer greeting="Productos de Diseñadora Profesional:" />
            }
          />
          <Route
            path="/category/:catid"
            element={<ItemListContainer greeting="Compras por categoría" />}
          />
          <Route
            path="/coleccion/:colid"
            element={<ItemListContainer greeting="Compras por colección" />}
          />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
