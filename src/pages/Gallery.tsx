import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import { Thumbnails } from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/styles.css";
import GalleryItem from "../components/UI/GalleryItem/GalleryItem";
import { galleryData } from "../utils/galleryData";

const Gallery: React.FC = () => {
  const [openLightbox, setOpenLightbox] = useState<number | null>(null);

  return (
    <div className="container mx-auto px-4 py-8 pt-24">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {galleryData.map((item, index) => (
          <GalleryItem
            key={item.id}
            item={item}
            onClick={() => setOpenLightbox(index)}
          />
        ))}
      </div>
      {openLightbox !== null && (
        <Lightbox
          open={true}
          close={() => setOpenLightbox(null)}
          slides={galleryData[openLightbox].slides}
          plugins={[Thumbnails]}
        />
      )}
    </div>
  );
};

export default Gallery;
