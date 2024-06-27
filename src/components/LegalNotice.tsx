import React from "react";
import styled from "styled-components";

interface LegalNoticeProps {
  notices: string[];
}

const LegalNoticeContainer = styled.div`
  font-size: 12px;
  color: #666;
  border-top: 1px solid #ddd;
  max-width: 1024px;
  margin: auto;
`;

const Notice = styled.p`
  margin-bottom: 10px;
`;

const Asterisk = styled.span`
  font-size: 12px;
  color: #666;
  margin-right: 5px;
  vertical-align: super;
`;

const LegalNotice: React.FC<LegalNoticeProps> = ({ notices }) => {
  return (
    <LegalNoticeContainer>
      {notices.map((notice, index) => (
        <Notice key={index}>
          <Asterisk>*</Asterisk>
          {notice}
        </Notice>
      ))}
    </LegalNoticeContainer>
  );
};

export default LegalNotice;
