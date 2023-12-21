import PropTypes from 'prop-types';

const Image = ({ src, fallback, type = "image/webp", alt }) => {
  return (
    <picture>
      <source srcSet={src} type={type} />
      <img src={fallback} alt={alt} />
    </picture>
  );
};
Image.propTypes = {
  src: PropTypes.string,
  fallback: PropTypes.string,
  type: PropTypes.string,
  alt: PropTypes.string,
};
export default Image;
