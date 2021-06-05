import React from 'react';
import { useIntl } from 'react-intl';
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarFooter,
  SidebarContent,
} from 'react-pro-sidebar';
import { FaTachometerAlt, FaGem, FaList, FaGithub, FaRegLaughWink, FaHeart } from 'react-icons/fa';
import sidebarBg from './assets/bg1.jpg';
import {NavLink, HashRouter } from 'react-router-dom';
import DomainRoundedIcon from '@material-ui/icons/DomainRounded';

const Aside = ({ image, collapsed, rtl, toggled, handleToggleSidebar,currentPath }) => {
  const intl = useIntl();
  return (
    <ProSidebar
      image={image ? sidebarBg : false}
      rtl={rtl}
      collapsed={collapsed}
      toggled={toggled}
      // breakPoint="md"
      onToggle={handleToggleSidebar}
    >
      {/* <SidebarHeader>
        <div
          style={{
            padding: '24px',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            fontSize: 14,
            letterSpacing: '1px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {intl.formatMessage({ id: 'sidebarTitle' })}
        </div>
      </SidebarHeader> */}
      <HashRouter>
       
      <SidebarContent>
        <Menu iconShape="circle">
          <MenuItem
            icon={<FaTachometerAlt />}
            suffix={<span className="badge red">{intl.formatMessage({ id: 'new' })}</span>}
            active={'/'===currentPath}
          >
            {intl.formatMessage({ id: 'dashboard' })}
            <NavLink exact to = "/" />
          </MenuItem>
          <MenuItem icon={<FaGem />}
            active={'/components/'===currentPath}
          >
            {intl.formatMessage({ id: 'components' })}
            <NavLink to = "/components/" />
          </MenuItem>
          <SubMenu
            suffix={<span className="badge yellow">3</span>}
            title={intl.formatMessage({ id: 'withSuffix' })}
            icon={<FaRegLaughWink />}
            defaultOpen={true}
          >
            <MenuItem
              active={'/withsuffix/submenu1/'===currentPath}>
                {intl.formatMessage({ id: 'submenu' })} 1
                <NavLink to = "/withsuffix/submenu1/" />
              </MenuItem>
            <MenuItem
              active={'/withsuffix/submenu2/'===currentPath}>
              {intl.formatMessage({ id: 'submenu' })} 2
              <NavLink to = "/withsuffix/submenu2/" />
            </MenuItem>
            <MenuItem
              active={'/withsuffix/submenu3/'===currentPath}>
                {intl.formatMessage({ id: 'submenu' })} 3
                <NavLink to = "/withsuffix/submenu3/" />
            </MenuItem>
          </SubMenu>
        </Menu>
        <Menu iconShape="circle">
          
          <SubMenu
            prefix={<span className="badge gray">3</span>}
            title={intl.formatMessage({ id: 'withPrefix' })}
            icon={<FaHeart />}
            defaultOpen={true}
          >
            <MenuItem>{intl.formatMessage({ id: 'submenu' })} 1</MenuItem>
            <MenuItem>{intl.formatMessage({ id: 'submenu' })} 2</MenuItem>
            <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3</MenuItem>
          </SubMenu>
          <SubMenu title={intl.formatMessage({ id: 'multiLevel' })} icon={<FaList />} defaultOpen={true}>
            <MenuItem>{intl.formatMessage({ id: 'submenu' })} 1 </MenuItem>
            <MenuItem>{intl.formatMessage({ id: 'submenu' })} 2 </MenuItem>
            <SubMenu title={`${intl.formatMessage({ id: 'submenu' })} 3`}>
              <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3.1 </MenuItem>
              <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3.2 </MenuItem>
              <SubMenu title={`${intl.formatMessage({ id: 'submenu' })} 3.3`}>
                <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3.3.1 </MenuItem>
                <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3.3.2 </MenuItem>
                <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3.3.3 </MenuItem>
              </SubMenu>
            </SubMenu>
          </SubMenu>
        </Menu>
      </SidebarContent>
      
      </HashRouter>
      <SidebarFooter style={{ textAlign: 'center' }}>
        <div
          className="sidebar-btn-wrapper"
          style={{
            padding: '20px 24px',
          }}
        >
          <a
            href="http://skstrategicsoft.com"
            target="_blank"
            className="sidebar-btn"
            rel="noopener noreferrer"
          >
            <DomainRoundedIcon />
            <span>SK Strategic Soft</span>
          </a>
        </div>
      </SidebarFooter>
    </ProSidebar>
  );
};

export default Aside;
