import { styled } from "styled-components";

import IcNftMoreArrow from "@/assets/icons/Landing/ic_nftMore_arrow.svg";
import IcNftMoreArrowDisabled from "@/assets/icons/Landing/ic_nftMore_arrow_disabled.svg";
import IcMenuTwitter from "@/assets/icons/Menu/ic_menu_twitter.svg";
import IcMenuTelegram from "@/assets/icons/Menu/telegram.svg";  // Replace Discord with Telegram icon

const JoinCommunity = () => {
  const handleNewTap = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <JoinCommunityWrapper>
      <JoinCommunityTitle>Join our tribe</JoinCommunityTitle>
      <JoinCommunityButtonList>
        <JoinCommunityButton onClick={() => handleNewTap("https://twitter.com/arvrtise")}>
          <div>
            <img src={IcMenuTwitter} alt="twitter" />
            Twitter
          </div>
          <img src={IcNftMoreArrow} alt="moreArrow" width={10} />
        </JoinCommunityButton>
        <JoinCommunityButton onClick={() => handleNewTap("https://discord.gg/GZtDjASyc7")}>  {/* Replace with Telegram link */}
          <div>
            <img src={IcMenuTelegram} alt="discord" />  {/* Replace icon with Telegram */}
            Discord
          </div>
          <img src={IcNftMoreArrow} alt="moreArrow" width={10} />
        </JoinCommunityButton>
      </JoinCommunityButtonList>
    </JoinCommunityWrapper>
  );
};

export default JoinCommunity;

const JoinCommunityWrapper = styled.div`
  width: 100%;
  padding: 0 1.5rem 1.5rem 1.5rem;
`;

const JoinCommunityTitle = styled.div`
  width: 100%;
  padding-left: 1rem;

  color: #2c3542;
  ${({ theme }) => theme.fonts.Nexton_Body_Text_Medium};
  text-align: left;
`;

const JoinCommunityButtonList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;

  width: 100%;
  margin-top: 1rem;
`;

const JoinCommunityButton = styled.button<{ $inactive?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 1.7rem 2rem;

  border: ${({ $inactive }) => ($inactive ? "0.1rem solid #E1E4E6" : "0.1rem solid #d1d1d6")};
  border-radius: 2rem;
  background-color: #f2f2f7;

  cursor: ${({ $inactive }) => ($inactive ? "default" : "pointer")};

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2.2rem;

    color: ${({ $inactive }) => ($inactive ? "#E1E4E6" : "#2f3038")};
    ${({ theme }) => theme.fonts.Nexton_Body_Text_Medium};
  }
`;
