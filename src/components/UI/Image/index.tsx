import styled from "styled-components";

import { DEVICE } from "../../../utils/constants";

interface ImageProps {
  src: string;
  width: number;
  height: number;
  alt: string;
  mobile_width: number;
  mobile_height: number;
}

function Image(props: ImageProps) {
  const { src, width, height, alt, mobile_width, mobile_height } = props;
  return (
    <Wrapper
      width={width}
      height={height}
      mobileWidth={mobile_width}
      mobileHeight={mobile_height}
      alt={alt}
      src={src}
      loading="lazy"
    />
  );
}

const Wrapper = styled.img<{
  width: number;
  height: number;
  mobileWidth: number;
  mobileHeight: number;
}>`
  width: ${(props) => props.width}rem;
  height: ${(props) => props.height}rem;

  @media ${DEVICE.mobile} {
    width: ${(props) => props.mobileWidth}rem;
    height: ${(props) => props.mobileHeight}rem;
  }
`;

export default Image;
