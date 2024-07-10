import styled from "styled-components";

interface ImageProps {
  src: string;
  width: number;
  height: number;
  alt: string;
}

function Image(props: ImageProps) {
  const { src, width, height, alt } = props;
  return (
    <Wrapper width={width} height={height} alt={alt} src={src} loading="lazy" />
  );
}

const Wrapper = styled.img<{
  width: number;
  height: number;
}>`
  width: ${(props) => props.width}rem;
  height: ${(props) => props.height}rem;
`;

export default Image;
