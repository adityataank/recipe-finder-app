import React, { useRef } from "react";
import styled from "styled-components";

import {
  COLORS,
  DEVICE,
  OVERLAY_Z_INDEX,
  TRANSITIONS,
} from "../../../utils/constants";

interface ModalProps {
  open: boolean;
  handleClose: () => void;
  position?: "fixed" | "absolute";
  styles?: {
    width?: string;
    height?: string;
    placement?: {
      top?: string;
      right?: string;
      bottom?: string;
      left?: string;
    };
  };
  children: React.ReactElement;
}

const Modal = ({
  open = false,
  handleClose = () => {},
  position = "fixed",
  styles = {},
  children,
}: ModalProps) => {
  const { width, height, placement } = styles;

  const backdropRef = useRef(null);

  const handleBackdropClick = () => {
    // const { current } = backdropRef;
    // if (current && e.target !== current) {
    //   return;
    // }
    handleClose();
  };

  return (
    <>
      <Overlay open={open} onClick={handleBackdropClick} ref={backdropRef} />
      <Wrapper
        position={position}
        placement={placement}
        width={width}
        height={height}
        open={open}
        id="modal-wrapper"
      >
        {children}
      </Wrapper>
    </>
  );
};

const Overlay = styled.section<{ open: boolean }>`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100dvh;
  top: 0;
  z-index: ${OVERLAY_Z_INDEX};
  background: ${COLORS["primary-black"]};
  visibility: hidden;
  opacity: 0.5;
  ${(props) => props.open && "visibility: visible;"}
`;

const Wrapper = styled.div<{
  position: string;
  placement?: { [key: string]: string };
  width?: string;
  height?: string;
  open: boolean;
}>`
  position: ${(props) => props.position};
  border-radius: 0.8rem;
  z-index: ${OVERLAY_Z_INDEX};
  transform: translateX(150%);
  width: 0;
  transition: transform 0.6s ${TRANSITIONS["in-out-back"]}, width 0s linear;
  ${(props) => props.open && `transform: translateX(0); width: ${props.width};`}
  ${(props) =>
    props.position === "fixed"
      ? `top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);width: auto;
  height: auto;`
      : `
        top: ${props?.placement?.top};
        right: ${props?.placement?.right};
        bottom: ${props?.placement?.bottom};
        left: ${props?.placement?.left};
        height: ${props.height};
      `}

  @media ${DEVICE.mobile} {
    transform: translateX(0);
  }
`;

export default Modal;
