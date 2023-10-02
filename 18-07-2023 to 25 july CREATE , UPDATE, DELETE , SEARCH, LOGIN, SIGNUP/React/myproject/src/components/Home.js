
import React, { Component } from 'react'
import SimpleImageSlider from "react-simple-image-slider";
export default class Home extends Component {

  render() {
    const images = [
      { url: "image/1.jpg" },
      { url: "image/2.jpg" },
      { url: "image/3.jpg" },
      { url: "image/4.jpg" },
      { url: "image/5.jpg" },
    ];
    return (
      <>
      <SimpleImageSlider
        width="100%"
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
      />
        </>
    )
  }
}
