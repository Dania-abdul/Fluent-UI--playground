import React from 'react';
import './App.css';

import { Image, IImageProps, ImageFit } from 'office-ui-fabric-react/lib/Image';
import { Icon } from '@fluentui/react/lib/Icon';



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
  </body>
</div>
