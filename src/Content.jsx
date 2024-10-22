import { useState } from "react";

// Import direct des images
import image1 from "./assets/images/image-product-1.jpg";
import image2 from "./assets/images/image-product-2.jpg";
import image3 from "./assets/images/image-product-3.jpg";
import image4 from "./assets/images/image-product-4.jpg";

export default function Content() {
  const images = [
    { id: 1, image: image1 },
    { id: 2, image: image2 },
    { id: 3, image: image3 },
    { id: 4, image: image4 },
  ];

  // État pour l'image sélectionnée
  const [selectedImage, setSelectedImage] = useState(images[0].image);

  // Fonction pour changer l'image affichée
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <>
      <div className="flex flex-col  gap-5 justify-start items-start mt-20 ml-52">
        {/* Div principale pour afficher l'image sélectionnée */}
        <div className="rounded-xl shadow-lg flex items-center ">
          <img
            src={selectedImage}
            className="rounded-lg max-w-[380px]  w-[380px] h-[350px]  object-cover"
            alt="Image sélectionnée"
          />
        </div>

        {/* Liste des images cliquables en bas */}
        <div className="flex gap-5">
          {images.map((item) => (
            <div key={item.id}>
              <img
                src={item.image}
                className="rounded-xl h-20 w-20 border shadow-md hover:border-orange-400 hover:border-3 cursor-pointer"
                alt={`Image ${item.id}`}
                onClick={() => handleImageClick(item.image)} // Quand on clique, on change l'image principale
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
