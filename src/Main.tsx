import React from 'react';
import './App.css';
// import {ActionButton, IButtonStyles, Icon, IIconStyles, Image, Persona, Stack, IStackTokens} from 'office-ui-fabric-react';
import { Text, ITextStyles } from 'office-ui-fabric-react';
import { Image, IImageProps, ImageFit } from 'office-ui-fabric-react/lib/Image';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
import { Icon } from '@fluentui/react/lib/Icon';
import { Pivot, PivotItem, PivotLinkFormat } from 'office-ui-fabric-react/lib/Pivot';
import { Label } from 'office-ui-fabric-react/lib/Label';
import { Nav, INavLink, INavStyles, INavLinkGroup } from 'office-ui-fabric-react/lib/Nav';
import { SearchBox, ISearchBoxStyles } from 'office-ui-fabric-react/lib/SearchBox';
import { IIconProps } from 'office-ui-fabric-react/lib/Icon';
import { Card, ICardTokens, ICardSectionStyles, ICardSectionTokens } from '@uifabric/react-cards';



const navStyles: Partial<INavStyles> = {
  root: {

    background: 'white',
    height: '100%',
    boxSizing: 'border-box',
    border: '1px solid #eee',
    borderBottom: 'none',
    overflowY: 'auto',
  },
};

const searchStyles: Partial<ISearchBoxStyles> = {
  root: {
    borderBottom:'none',
    boxSizing: 'border-box',
    overflowY: 'auto',
  },
};

const navLinkGroups: INavLinkGroup[] = [
  {
    links: [
      {
        name: 'Home',
        url: 'http://example.com',
        expandAriaLabel: 'Expand menu section',
        collapseAriaLabel: 'Collapse menu section',
        links: [
          {
            name: 'About',
            url: 'http://msn.com',
            key: 'key1',
            target: '_blank',
          },
          {
            name: 'Contacts',
            url: 'http://msn.com',
            disabled: false,
            key: 'key2',
            target: '_blank',
          },
        ],
        isExpanded: true,
      },
      {
        name: 'Components',
        url: 'http://example.com',
        expandAriaLabel: 'Expand menu section',
        collapseAriaLabel: 'Collapse menu section',
        links: [
          {
            name: 'Object 1',
            url: 'http://msn.com',
            key: 'key1',
            target: '_blank',
          },
          {
            name: 'Object 2',
            url: 'http://msn.com',
            disabled: false,
            key: 'key2',
            target: '_blank',
          },
        ],
        isExpanded: true,
      },
      {
        name: 'News',
        url: 'http://cnn.com',
        icon: 'News',
        key: 'key7',
        target: '_blank',
      },
    ],
  },
];

function _onLinkClick(ev?: React.MouseEvent<HTMLElement>, item?: INavLink) {
  if (item && item.name === 'News') {
    alert('News link clicked');
  }
}


const imageProps: IImageProps = {
  src: 'http://placehold.it/800x300',
  imageFit: ImageFit.cover,
  width: 350,
  height: 150,
  onLoad: ev => console.log('image loaded', ev),
};



export let main = <div className="main">
  <header className="main__header" dir="ltr">
    <div className="ms-Grid-row nav-bar">
      <div className="ms-Grid-col ms-sm8  nav-bar__item">
        <a href="" className="nav-bar__logo">
          <Icon iconName="WebAppBuilderFragment" className="ms-IconExample" />
        </a>
      </div>
      <div className="ms-Grid-col ms-sm4 nav-bar__item--nav">
        <a href="" className="nav-bar-link">its a link</a>
      </div>
    </div>
  </header>
  <body className="main__body">
  <div className="wrap--main " dir="ltr">
    <div className="main-menu "> 
      <SearchBox placeholder="Search" underlined={true} styles={searchStyles}/>
      <Nav
        onLinkClick={_onLinkClick}
        selectedKey="key3"
        ariaLabel="Nav "
        styles={navStyles}
        groups={navLinkGroups}/>
    </div>

    <div className="main-content" >
      <div className="content-header">
        <h2 className="ms-fontSize-32	">hello world</h2>
      </div>
      <div className="content-body">
        <h3 className="ms-fontSize-20	gutter--m-bottom">Call to Action</h3>
          <div className="">
            <Card aria-label="Basic vertical card">
              <Card.Item>
              <Text className="ms-fontSize-18">Basic vertical card</Text>
              </Card.Item>
            </Card>
          </div>

      </div>
    </div>
  </div>
  </body>
</div>
