import styled, { css } from 'styled-components/macro'

import { media } from 'styles/utils'

export const Wrapper = styled.aside`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding: 3.2rem;
    background-color: ${theme.colors.black};
    transition: transform 275ms ease-out;

    ${media.lessThan('md')} {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transform: translate3d(-100%, 0, 0);

      &.sidebar--opened {
        transform: translate3d(0, 0, 0);
      }
    }

    ${media.greaterThanOrEqual('md')} {
      min-width: 33.2rem;
      max-width: 33.2rem;
    }
  `}
`

export const CloseButton = styled.button`
  ${({ theme }) => css`
    ${media.lessThan('md')} {
      position: absolute;
      right: 3.2rem;
      top: 3.2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 4rem;
      height: 4rem;
      margin: 0;
      padding: 0;
      border: none;
      opacity: 0.7;
      border-radius: 50%;
      background-color: ${theme.colors.primary};
      transition: all 225ms ease-out;
      transform: scale(0.9);

      &::before {
        content: 'x';
        font-size: 2rem;
        font-weight: 900;
        color: ${theme.colors.black};
      }

      &:hover {
        cursor: pointer;
      }

      &:hover,
      &:active {
        opacity: 1;
      }

      &:active {
        transform: scale(1);
      }
    }

    ${media.greaterThanOrEqual('md')} {
      display: none;
    }
  `}
`

export const Header = styled.header`
  margin-top: 1.6rem;
  margin-bottom: 6.4rem;
  user-select: none;
`

export const Logo = styled.img`
  display: block;
  max-width: 16rem;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  pointer-events: none;
`

export const Divider = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    margin-bottom: 2.4rem;
    user-select: none;

    & strong {
      padding: 0 1.6rem;
      font-weight: 600;
      color: ${theme.colors.white};
    }

    &::before,
    &::after {
      content: '';
      height: 0.25rem;
      background-color: ${theme.colors.primary};
      border-radius: 99em;
    }

    &::before {
      width: 3.2rem;
    }

    &::after {
      flex-grow: 1;
    }
  `}
`

export const AddFileButton = styled.button`
  ${({ theme }) => css`
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 1;
    width: 100%;
    height: 3.4rem;
    margin-bottom: 3.2rem;
    border: none;
    border-radius: 0.5rem;
    font-size: 1.4rem;
    color: ${theme.colors.lightBlack};
    background-image: linear-gradient(
      90deg,
      ${theme.colors.primary} 10%,
      ${theme.colors.secondary}
    );
    transition: all 225ms ease-out;
    user-select: none;
    overflow: hidden;

    & span:not(:last-child) {
      margin-right: 1rem;
      font-size: 1.6rem;
    }

    &:hover {
      cursor: pointer;
    }

    &:active {
      transform: scale(1.025);
    }

    &::before {
      content: '';
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      background-image: linear-gradient(
        90deg,
        ${theme.colors.primary} 60%,
        ${theme.colors.secondary}
      );
      transition: opacity 325ms linear;
    }

    &:hover::before {
      opacity: 1;
    }
  `}
`

export const List = styled.ul`
  ${({ theme }) => css`
    flex-grow: 1;
    width: 100%;
    margin: 0;
    padding: 0;
    list-style-type: none;
    user-select: none;
    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 1.6rem;
      background-color: transparent;
    }

    &::-webkit-scrollbar-thumb {
      height: 5.6rem;
      border-radius: 0.8rem;
      border: 0.4rem solid transparent;
      background-clip: content-box;
      background-color: ${theme.colors.primary};
      background-image: linear-gradient(
        180deg,
        ${theme.colors.primary} 30%,
        ${theme.colors.secondary}
      );
    }
  `}
`

export const ListItem = styled.li`
  ${({ theme }) => css`
    padding: 1.4rem 1.6rem;
    color: #FFF;
    font-size: 1.6rem;
    border-radius: 0.8rem;
    transition: all 225ms ease-out;
    opacity: 0.65;

    &:hover,
    &:focus {
      opacity: 1;
      background-color: rgba(255, 255, 255, 0.05);
    }

    &:focus {
      outline-style: solid;
      outline-width: 0.25rem;
      outline-offset: -0.25rem;
      outline-color: ${theme.colors.primary};
    }

    &:hover {
      cursor: pointer;
    }

    & :not(:last-child) {
      margin-right: 1.2rem;
    }
  `}
`
