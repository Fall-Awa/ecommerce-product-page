import { useState } from "react";

// Import direct des images
import { ChevronLeft, ChevronRight } from "lucide-react";
import image1 from "./assets/images/image-product-1.jpg";
import image2 from "./assets/images/image-product-2.jpg";
import image3 from "./assets/images/image-product-3.jpg";
import image4 from "./assets/images/image-product-4.jpg";

// Importer les icônes Chevron

export default function Content() {
  const images = [
    { id: 1, image: image1 },
    { id: 2, image: image2 },
    { id: 3, image: image3 },
    { id: 4, image: image4 },
  ];

  // État pour l'image sélectionnée
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Fonction pour changer l'image affichée
  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  // Fonctions pour la navigation avec les flèches
  const handleNextImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    setSelectedImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="flex flex-col gap-5 lg:justify-start lg:items-start lg:mt-20 lg:ml-52 sm:justify-center sm:items-center">
      {/* Div principale pour afficher l'image sélectionnée */}
      <div className="lg:rounded-xl  sm:rounded-none lg:shadow-lg sm:shadow-none flex items-center justify-center relative overflow-hidden">
        <img
          src={images[selectedImageIndex].image}
          className="lg:rounded-lg  lg:w-[380px] lg:h-[350px] sm:w-64 sm:h-[150px] "
          alt="Image sélectionnée"
        />
        {/* Flèche gauche */}
        <button
          onClick={handlePrevImage}
          className="absolute left-0 p-2  bg-white rounded-full shadow-lg hover:bg-gray-200 lg:hidden"
        >
          <ChevronLeft />
        </button>
        {/* Flèche droite */}
        <button
          onClick={handleNextImage}
          className="absolute right-0 p-2 bg-white rounded-full shadow-lg hover:bg-gray-200  lg:hidden"
        >
          <ChevronRight />
        </button>
      </div>

      {/* Liste des images cliquables (visible uniquement sur les écrans plus grands) */}
      <div className="lg:flex gap-5 hidden sm:block">
        {images.map((item, index) => (
          <div key={item.id}>
            <img
              src={item.image}
              className="rounded-xl h-20 w-20 border shadow-md hover:border-orange-400 hover:border-3 cursor-pointer"
              alt={`Image ${item.id}`}
              onClick={() => handleImageClick(index)} // Quand on clique, on change l'image principale
            />
          </div>
        ))}
      </div>
    </div>
  );
}
