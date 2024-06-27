import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #f8f8f8;
  padding: 20px 0;
  color: #6e6e73;
  font-size: 14px;
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 20px 0;
`;

const FooterColumn = styled.div`
  flex: 1;
  min-width: 200px;
  margin: 10px 0;

  h3 {
    color: #1d1d1f;
    font-size: 16px;
    margin-bottom: 10px;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      margin: 5px 0;

      a {
        color: #6e6e73;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

const FooterBottom = styled.div`
  text-align: center;
  padding: 20px 0;
  border-top: 1px solid #e0e0e0;

  p {
    margin: 5px 0;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinks>
        <FooterColumn>
          <h3>Shop and Learn</h3>
          <ul>
            <li>
              <a href="#">Mac</a>
            </li>
            <li>
              <a href="#">iPad</a>
            </li>
            <li>
              <a href="#">iPhone</a>
            </li>
            <li>
              <a href="#">Watch</a>
            </li>
            <li>
              <a href="#">TV</a>
            </li>
            <li>
              <a href="#">Music</a>
            </li>
            <li>
              <a href="#">Accessories</a>
            </li>
            <li>
              <a href="#">Gift Cards</a>
            </li>
          </ul>
        </FooterColumn>
        <FooterColumn>
          <h3>Services</h3>
          <ul>
            <li>
              <a href="#">Apple Music</a>
            </li>
            <li>
              <a href="#">Apple TV+</a>
            </li>
            <li>
              <a href="#">Apple Fitness+</a>
            </li>
            <li>
              <a href="#">Apple News+</a>
            </li>
            <li>
              <a href="#">Apple Arcade</a>
            </li>
            <li>
              <a href="#">iCloud</a>
            </li>
            <li>
              <a href="#">Apple One</a>
            </li>
            <li>
              <a href="#">Apple Card</a>
            </li>
          </ul>
        </FooterColumn>
        <FooterColumn>
          <h3>Apple Store</h3>
          <ul>
            <li>
              <a href="#">Find a Store</a>
            </li>
            <li>
              <a href="#">Genius Bar</a>
            </li>
            <li>
              <a href="#">Today at Apple</a>
            </li>
            <li>
              <a href="#">Apple Camp</a>
            </li>
            <li>
              <a href="#">Apple Store App</a>
            </li>
            <li>
              <a href="#">Refurbished and Clearance</a>
            </li>
            <li>
              <a href="#">Financing</a>
            </li>
            <li>
              <a href="#">Order Status</a>
            </li>
          </ul>
        </FooterColumn>
        <FooterColumn>
          <h3>For Business</h3>
          <ul>
            <li>
              <a href="#">Apple and Business</a>
            </li>
            <li>
              <a href="#">Shop for Business</a>
            </li>
          </ul>
        </FooterColumn>
        <FooterColumn>
          <h3>For Education</h3>
          <ul>
            <li>
              <a href="#">Apple and Education</a>
            </li>
            <li>
              <a href="#">Shop for Education</a>
            </li>
            <li>
              <a href="#">College Students</a>
            </li>
          </ul>
        </FooterColumn>
        <FooterColumn>
          <h3>For Healthcare</h3>
          <ul>
            <li>
              <a href="#">Apple in Healthcare</a>
            </li>
            <li>
              <a href="#">Health on Apple Watch</a>
            </li>
            <li>
              <a href="#">Health Records on iPhone</a>
            </li>
          </ul>
        </FooterColumn>
      </FooterLinks>
      <FooterBottom>
        <p>© 2024 Apple Inc. All rights reserved.</p>
        <p>
          Privacy Policy | Terms of Use | Sales and Refunds | Legal | Site Map
        </p>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
