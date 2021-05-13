import React from "react";
import {
  CarouselItem,
  CarouselCaption,
} from "reactstrap";

export const CarouselImagesItems = (props) => {
  const { item } = props;
  return (
    <div>
      <CarouselItem
        onExiting={() => this.setAnimating(true)}
        onExited={() => this.setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    </div>
  )
};
