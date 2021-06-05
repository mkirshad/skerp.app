import React, { useState } from 'react';
import Aside from './Aside';
import Main from './Main';
import Main2 from './Main2';
import {Route, HashRouter } from 'react-router-dom';
import Header from './Layout/Header';

function Layout({ setLocale }) {

  function whatCollapse(x) {
    if (x.matches) { // If media query matches
      return true;
    } else {
      return false
      // document.body.style.backgroundColor = "pink";
    }
  }

  const mql = window.matchMedia("(max-width: 767.98px)")
  mql.addEventListener("change", () => {
    if (mql.matches) { // If media query matches
      setCollapsed(true)
    } else {
      setCollapsed(false)
      // document.body.style.backgroundColor = "pink";
    }
  });


  const [rtl, setRtl] = useState(false);
  const [collapsed, setCollapsed] = useState(whatCollapse(mql));
  const [image, setImage] = useState(false);
  const [toggled, setToggled] = useState(false);
  const [currentPath, setCurrentPath] = useState('');

  const handleCollapsedChange = (checked) => {
    setCollapsed(checked);
  };

  const handleRtlChange = (checked) => {
    setRtl(checked);
    setLocale(checked ? 'ar' : 'en');
  };
  const handleImageChange = (checked) => {
    setImage(checked);
  };

  const handleToggleSidebar = (value) => {
    setToggled(value);
  };
  
  const toggleCollapsed = () =>{
    if(collapsed){
      setCollapsed(false);
    }else{
      setCollapsed(true);
    }
    console.log('collapsed!');
  }

  return (
    <div>
      <Header
        toggleCollapsed={toggleCollapsed} />


    <div className={`app ${rtl ? 'rtl' : ''} ${toggled ? 'toggled' : ''}`}>
      <Aside
        image={image}
        collapsed={collapsed}
        rtl={rtl}
        toggled={toggled}
        handleToggleSidebar={handleToggleSidebar}
        currentPath={currentPath}
      />
      
      <HashRouter>
      <Route exact path="/" 
      render={() => (
          <Main image={image} toggled={toggled} collapsed={collapsed} rtl={rtl}
          handleToggleSidebar={handleToggleSidebar} handleCollapsedChange={handleCollapsedChange}
          handleRtlChange={handleRtlChange} handleImageChange={handleImageChange} 
          handleCurrentPath={setCurrentPath} />
            )}
      />
      <Route exact path="/components/"
      render={() => (
        <Main2 image={image} toggled={toggled} collapsed={collapsed} rtl={rtl}
        handleToggleSidebar={handleToggleSidebar} handleCollapsedChange={handleCollapsedChange}
        handleRtlChange={handleRtlChange} handleImageChange={handleImageChange} 
        handleCurrentPath={setCurrentPath} />
          )}
      />
      <Route exact path="/withsuffix/submenu1/"
      render={() => (
        <Main2 image={image} toggled={toggled} collapsed={collapsed} rtl={rtl}
        handleToggleSidebar={handleToggleSidebar} handleCollapsedChange={handleCollapsedChange}
        handleRtlChange={handleRtlChange} handleImageChange={handleImageChange} 
        handleCurrentPath={setCurrentPath} />
          )}
      />
      <Route exact path="/withsuffix/submenu2/"
      render={() => (
        <Main2 image={image} toggled={toggled} collapsed={collapsed} rtl={rtl}
        handleToggleSidebar={handleToggleSidebar} handleCollapsedChange={handleCollapsedChange}
        handleRtlChange={handleRtlChange} handleImageChange={handleImageChange} 
        handleCurrentPath={setCurrentPath} />
          )}
      />
      <Route exact path="/withsuffix/submenu3/"
      render={() => (
        <Main2 image={image} toggled={toggled} collapsed={collapsed} rtl={rtl}
        handleToggleSidebar={handleToggleSidebar} handleCollapsedChange={handleCollapsedChange}
        handleRtlChange={handleRtlChange} handleImageChange={handleImageChange} 
        handleCurrentPath={setCurrentPath} />
          )}
      />
      </HashRouter>
    </div>
    </div>
  );
}

export default Layout;
