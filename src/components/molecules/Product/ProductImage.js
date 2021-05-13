import React, { useState, useEffect, Component } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";
import "./custom.css";
import { CarouselImagesItems } from "./CarouselImagesItems"

class ProductImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      animating: true,
      items: this.props.m,
      kuch: [
        {
          "src": "https://miro.medium.com/max/1400/1*bFIR37BFmQcxyPd7UPs6xg.png",
          "altText": "ptani",
          "caption": "hattbe"
        },
        {
          "src": "https://miro.medium.com/max/1400/1*bFIR37BFmQcxyPd7UPs6xg.png",
          "altText": "ptani",
          "caption": "hattbe"
        },
        {
          "src": "https://miro.medium.com/max/1400/1*bFIR37BFmQcxyPd7UPs6xg.png",
          "altText": "ptani",
          "caption": "hattbe"
        },

      ]
    };
    this.setAnimating = this.setAnimating.bind(this);
    this.setActiveIndex = this.setActiveIndex.bind(this);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
  }

  setAnimating(boolValue) {
    this.setState({
      animating: boolValue,
    });
  }

  setActiveIndex(i) {
    this.setState({
      activeIndex: i,
    });
  }

  next() {
    if (this.state.animating) return;
    const nextIndex =
      this.state.activeIndex === this.state.items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setActiveIndex(nextIndex);
  }

  previous() {
    if (this.state.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? this.state.items.length - 1
        : this.state.activeIndex - 1;
    this.setActiveIndex(nextIndex);
  }

  goToIndex(newIndex) {
    if (this.state.animating) return;
    this.setActiveIndex(newIndex);
  }


  render() {

    return (
      <div>
        <Carousel
          activeIndex={this.state.activeIndex}
          next={this.next}
          previous={this.previous}
        >
          <CarouselIndicators
            items={this.state.items}
            activeIndex={this.state.activeIndex}
            onClickHandler={this.goToIndex}
          />
          {this.state.kuch.map(i => <CarouselImagesItems item={i} />)}
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={this.previous}
          />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={this.next}
          />
        </Carousel>
      </div>
    );
  }
}

export default ProductImage;
