import { CONFIG } from "site.config"
import Image from "next/image"
import React from "react"
import styled from "@emotion/styled"

type Props = {
  className?: string
}

const MobileProfileCard: React.FC<Props> = () => {
  return (
    <StyledWrapper>
      <div className="top">💻 صاحب المدونة</div>
      <div className="mid">
        <div className="wrapper">
          <Image
            src={CONFIG.profile.image}
            width={90}
            height={90}
            css={{ position: "relative" }}
            alt="profile_image"
          />
          <div className="wrapper">
            <div className="top">{CONFIG.profile.name}</div>
            <div className="mid">{CONFIG.profile.role}</div>
            <div className="btm">{CONFIG.profile.bio}</div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  )
}

export default MobileProfileCard

const StyledWrapper = styled.div`
  direction: rtl;
  display: block;

  @media (min-width: 1024px) {
    display: none;
    direction: rtl;
  }

  > .top {
    padding: 0.25rem;
    margin-bottom: 0.75rem;
    direction: rtl;
  }
  > .mid {
    direction: rtl;
    padding: 0.5rem;
    margin-bottom: 1rem;
    border-radius: 1rem;
    background-color: ${({ theme }) =>
      theme.scheme === "light" ? "white" : theme.colors.gray4};
    > .wrapper {
      direction: rtl;
      display: flex;
      gap: 0.5rem;
      align-items: center;
      > .wrapper {
        direction: rtl;
        height: fit-content;
        > .top {
          direction: rtl;
          font-size: 1.25rem;
          line-height: 1.75rem;
          font-style: italic;
          font-weight: 700;
        }
        > .mid {
          direction: rtl;
          margin-bottom: 0.5rem;
          font-size: 0.875rem;
          line-height: 1.25rem;
          color: ${({ theme }) => theme.colors.gray11};
        }
        > .btm {
          direction: rtl;
          font-size: 0.875rem;
          line-height: 1.25rem;
        }
      }
    }
  }
`
