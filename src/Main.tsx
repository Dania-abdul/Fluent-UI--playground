import React from 'react';
import './App.css';
// import {ActionButton, IButtonStyles, Image, Persona, Stack} from 'office-ui-fabric-react';
import {  DefaultButton, PrimaryButton, IButtonStyles, Text, ITextStyles, IStackTokens, Persona } from 'office-ui-fabric-react';
import { Image, IImageProps, ImageFit } from 'office-ui-fabric-react/lib/Image';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
import { Icon, IIconProps, IIconStyles } from '@fluentui/react/lib/Icon';
import { Pivot, PivotItem, PivotLinkFormat } from 'office-ui-fabric-react/lib/Pivot';
import { Label } from 'office-ui-fabric-react/lib/Label';
import { Nav, INavLink, INavStyles, INavLinkGroup } from 'office-ui-fabric-react/lib/Nav';
import { SearchBox, ISearchBoxStyles } from 'office-ui-fabric-react/lib/SearchBox';
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


const iconStyles: Partial<IIconStyles> = {
  root: {
    background: 'white',
    height: '100%',
    boxSizing: 'border-box',
    border: '1px solid #eee',
    borderBottom: 'none',
    overflowY: 'auto',
  },
};

const buttonStyle: Partial<IButtonStyles> = {
  root: {
    backgroundColor: 'black',

  },
};

const searchStyles: Partial<ISearchBoxStyles> = {
  root: {
    borderBottom:'none',
    boxSizing: 'border-box',
    overflowY: 'auto',
  },
};



const imageProps: IImageProps = {
  src: 'http://placehold.it/800x300',
  imageFit: ImageFit.cover,
  onLoad: ev => console.log('image loaded', ev),
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


const sectionStackTokens: IStackTokens = { childrenGap: 30 };

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
        <h1 className="title--l">hello world</h1>
      </div>
      <div className="content-body">
          <h2 className="title--m">Call to action</h2>
          <div className="content__data">
            <Card aria-label="Basic  card" className="content__card"  tokens={sectionStackTokens}>
              <Card.Item>
                <Text className="ms-fontSize-18 ms-fontWeight-semibold">Basic vertical card</Text>
              </Card.Item>
              <Card.Item>   
               <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</Text>          
              </Card.Item>
              <Stack horizontal tokens={sectionStackTokens}>
                <DefaultButton text="Standard" />
                <PrimaryButton text="Primary" styles={buttonStyle}/>
              </Stack>
            </Card>
          </div>
          <h2 className="title--m">Image Text</h2>
          <div className="content__data">
            <Card aria-label="Basic horizontal card" className="content__card block-image-text"  tokens={sectionStackTokens}>
              <Card.Item>
                <Image
                  {...imageProps}
                  alt=' image fit value "cover" on an'
                /> 
              </Card.Item>

              <Card.Item>
                <Text>hi</Text>             
              </Card.Item>
            </Card>
          </div>
      </div>
    </div>
  </div>
  </body>
</div>
