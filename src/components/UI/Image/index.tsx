import styled from "styled-components";

interface ImageProps {
  src: string;
  width: string;
  height: string;
  alt: string;
}

function Image(props: ImageProps) {
  const { src, width, height, alt } = props;
  return (
    <Wrapper width={width} height={height} alt={alt} src={src} loading="lazy" />
  );
}

const Wrapper = styled.img<{
  width: string;
  height: string;
}>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

export default Image;
