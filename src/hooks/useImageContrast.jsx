import { useEffect, useState } from "react";
import { FastAverageColor } from "fast-average-color";

/**
 * Custom hook to calculate the ideal button color based on the image
 * Returns black (#000000) for light images and white (#FFFFFF) for dark images
 * With threshold adjusted to detect whiteness with more sensitivity
 *
 * @param {string | null | undefined} image - Image URL or base64 string
 * @returns {string} Hex color (#000000 or #FFFFFF)
 */
export function useImageContrast(image) {
  const [buttonColor, setButtonColor] = useState("#FFFFFF");

  useEffect(() => {
    if (!image) {
      setButtonColor("#FFFFFF");
      return;
    }

    const fac = new FastAverageColor();
    let isMounted = true;

    const processImage = async () => {
      try {
        const color = await fac.getColorAsync(image, {
          algorithm: "sqrt",
          mode: "precision",
        });

        if (!isMounted) return;

        // Calculates color luminosity (0-255)
        const [r, g, b] = color.value;
        const luminosity = r * 0.299 + g * 0.587 + b * 0.114;

        // Higher threshold (200) - the image needs to be much lighter to use black
        // Possible values: 0-255 (the higher, the more demanding to consider "white")
        setButtonColor(luminosity > 200 ? "#000000" : "#FFFFFF");
      } catch (err) {
        if (isMounted) {
          setButtonColor("#FFFFFF");
        }
        console.error("Erro ao processar imagem:", err);
      }
    };

    processImage();

    return () => {
      isMounted = false;
      fac.destroy();
    };
  }, [image]);

  return buttonColor;
}

// Totally made with AI
