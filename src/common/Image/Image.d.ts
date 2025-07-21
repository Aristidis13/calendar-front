type TImage = {
    img: string;
};
/**
 * A Component that accepts an image url and fetches the image.
 * @param {string} img - The image url.
 * @returns - The rendered Component
 */
declare const Image: ({ img }: TImage) => import("react/jsx-runtime").JSX.Element | null;
export default Image;
