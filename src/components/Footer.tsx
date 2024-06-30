import React from "react";
import styled from "styled-components";
import { device } from "../utils/const";
import MobileAccordion from "../components/MobileAccordion";

const footerColumns = [
  {
    title: "Shop and Learn",
    links: [
      { text: "Mac", href: "#" },
      { text: "iPad", href: "#" },
      { text: "iPhone", href: "#" },
      { text: "Watch", href: "#" },
      { text: "TV", href: "#" },
      { text: "Music", href: "#" },
      { text: "Accessories", href: "#" },
      { text: "Gift Cards", href: "#" },
    ],
  },
  {
    title: "Apple Wallet",
    links: [
      { text: "Wallet", href: "#" },
      { text: "Apple Card", href: "#" },
      { text: "Apple Pay", href: "#" },
      { text: "Apple Cash", href: "#" },
    ],
  },
  {
    title: "Account",
    links: [
      { text: "Manage Your Apple ID", href: "#" },
      { text: "Apple Store Account", href: "#" },
      { text: "iCloud.com", href: "#" },
    ],
  },
  {
    title: "Entertainment",
    links: [
      { text: "Apple One", href: "#" },
      { text: "Apple TV+", href: "#" },
      { text: "Apple Music", href: "#" },
      { text: "Apple Arcade", href: "#" },
      { text: "Apple Fitness+", href: "#" },
      { text: "Apple News+", href: "#" },
      { text: "Apple Podcasts", href: "#" },
      { text: "Apple Books", href: "#" },
      { text: "App Store", href: "#" },
    ],
  },
  {
    title: "Apple Store",
    links: [
      { text: "Find a Store", href: "#" },
      { text: "Genius Bar", href: "#" },
      { text: "Today at Apple", href: "#" },
      { text: "Apple Camp", href: "#" },
      { text: "Apple Store App", href: "#" },
      { text: "Refurbished and Clearance", href: "#" },
      { text: "Financing", href: "#" },
      { text: "Order Status", href: "#" },
    ],
  },
  {
    title: "For Business",
    links: [
      { text: "Apple and Business", href: "#" },
      { text: "Shop for Business", href: "#" },
    ],
  },
  {
    title: "For Education",
    links: [
      { text: "Apple and Education", href: "#" },
      { text: "Shop for Education", href: "#" },
      { text: "College Students", href: "#" },
    ],
  },
  {
    title: "For Healthcare",
    links: [
      { text: "Apple in Healthcare", href: "#" },
      { text: "Health on Apple Watch", href: "#" },
      { text: "Health Records on iPhone", href: "#" },
    ],
  },
  {
    title: "For Government",
    links: [
      { text: "Shop for Government", href: "#" },
      { text: "Shop for Veterans and Military", href: "#" },
    ],
  },
  {
    title: "Apple Values",
    links: [
      { text: "Accessibility", href: "#" },
      { text: "Education", href: "#" },
      { text: "Environment", href: "#" },
      { text: "Inclusion and Diversity", href: "#" },
      { text: "Privacy", href: "#" },
      { text: "Racial Equity and Justice", href: "#" },
      { text: "Supply Chain", href: "#" },
    ],
  },
  {
    title: "About Apple",
    links: [
      { text: "Newsroom", href: "#" },
      { text: "Apple Leadership", href: "#" },
      { text: "Career Opportunities", href: "#" },
      { text: "Investors", href: "#" },
      { text: "Ethics & Compliance", href: "#" },
      { text: "Events", href: "#" },
      { text: "Contact Apple", href: "#" },
    ],
  },
];
const AccordionContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media ${device.laptop} {
    display: none;
  }
`;

const FooterContainer = styled.footer`
  margin-top: 16px;
  background-color: #f8f8f8;
  color: #6e6e73;
  font-size: 14px;
  background-color: #f5f5f7;
  padding: 0 22px;
  h2 {
    visibility: hidden;
    position: absolute;
    height: 1px;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 20px 0;
  margin: 10px auto;
  display: none;
  max-width: 980px;
  @media ${device.laptop} {
    display: flex;
  }
`;

const FooterColumn = styled.div`
  flex: 1;
  margin: 10px 0;
  max-width: 173px;
  h3 {
    color: #1d1d1f;
    font-size: 16px;
    margin-bottom: 10px;
  }
  ul {
    list-style: none;
    padding: 0;
    li {
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
  text-align: start;
  padding: 20px 0;
  border-top: 1px solid #e0e0e0;
  max-width: 980px;
  margin: 0 auto;
  hr {
    display: none;
    @media ${device.laptop} {
      display: flex;
    }
  }

  p {
    display: block;
    text-align: start;
    font-size: 12px;
    @media ${device.laptop} {
      display: flex;
    }
    margin: 5px 0;
    justify-content: start;
    a {
      color: #0066cc;
    }
    span {
      justify-self: space-around;
      margin-inline-end: 30px;
      margin-top: 5px;
      &:last-of-type {
        margin-left: auto;
        display: none;
        @media ${device.laptop} {
          display: block;
        }
      }
      a {
        color: #666;
        text-decoration: none;
      }
    }
  }
  > span a {
    text-decoration: none;
    color: #6e6e73;
    text-align: start;
    font-size: 12px;
    @media ${device.laptop} {
      display: none;
    }
  }
`;

const LegalNoticeContainer = styled.div`
  max-width: 980px;
  font-size: 12px;
  color: #666;
  margin: auto;
  background: #f5f5f7;
  color: #0000008f;
  padding: 17px 0 11px;
  a {
    text-decoration: underline;
    color: #0066cc;
  }
  p {
    margin: 0;
    padding-bottom: 0.8em;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <h2>Apple Footer</h2>
      <LegalNoticeContainer>
        <p>
          * Available for Qualified Purchasers only. Qualified Purchasers
          receive an Apple Gift Card when they purchase an Eligible Product at a
          Qualifying Location through September 30, 2024. Gift card values may
          vary by Eligible Product. Only one Apple Gift Card per Eligible
          Product per Qualified Purchaser. Offer subject to availability. While
          supplies last. Qualified Purchasers shall receive a discount equal to
          the value of the Apple Gift Card off the price of the Eligible
          Product, but will be charged for all items in their cart, including
          the Apple Gift Card. Important notice regarding the checkout receipt
          and monthly statement for Apple Card Monthly Installments (ACMI)
          purchases with this promotion: Qualified Purchasers selecting ACMI (a
          0% APR payment option available only in the U.S.) as payment type at
          checkout shall receive a discount equal to the value of the Apple Gift
          Card off the price of the Eligible Product. This will result in one
          ACMI installment plan over 12 months for the Eligible Product
          discounted by the instant credit, and a second ACMI installment plan
          over 12 months for the full price of the Apple Gift Card. The total
          combined amount charged over the two separate ACMI installment plans
          will reflect the original full retail price of the Eligible Product.
          Separately, Qualified Purchasers will receive and be charged for the
          Apple Gift Card in the amount of the applicable discount off the
          Eligible Product. Apple Card Monthly Installments (ACMI) is a 0% APR
          payment option that is only available if you select it at checkout in
          the U.S. for eligible products purchased at Apple Store locations,
          <a href="">apple.com</a>, the Apple Store app, or by calling
          1-800-MY-APPLE, and is subject to credit approval and credit limit.
          See <a href="">support.apple.com/kb/HT211204</a> for more information
          about eligible products. APR ranges may vary based on when you
          accepted an Apple Card. Cardholders who accept an Apple Card on and or
          after February 1, 2024: Variable APRs for Apple Card, other than ACMI,
          range from 19.24% to 29.49% based on creditworthiness. Rates as of
          February 1, 2024. Existing cardholders: See your Customer Agreement
          for applicable rates and fee. If you buy an ACMI-eligible product by
          choosing to pay in full with Apple Card (instead of using ACMI), that
          purchase is subject to the Apple Card variable APR, not 0% APR. Taxes
          and shipping on ACMI purchases are subject to the variable APR, not 0%
          APR. When you buy an iPhone with ACMI, you’ll need to select AT&T,
          T-Mobile, or Verizon as your carrier when you check out. An iPhone
          purchased with ACMI is always unlocked, so you can switch carriers at
          any time. ACMI is not available for purchases made online at the
          following special stores: Apple Employee Purchase Plan; participating
          corporate Employee Purchase Programs; Apple at Work for small
          businesses; Government and Veterans and Military Purchase Programs; or
          on refurbished devices. The last month’s payment for each product will
          be the product’s purchase price, less all other payments at the
          monthly payment amount. ACMI financing is subject to change at any
          time for any reason, including but not limited to installment term
          lengths and eligible products. See
          <a href=""> support.apple.com/kb/HT211204</a> for information about
          upcoming changes to ACMI financing. See the
          <a href="">Apple Card Customer Agreement </a>for more information
          about ACMI financing. Apple Card is issued by Goldman Sachs Bank USA,
          Salt Lake City Branch. Available for qualifying applicants in the
          United States. If you reside in the U.S. territories, please call
          Goldman Sachs at 877-255-5923 with questions about accessing this
          offer or applying for Apple Card. This offer cannot be combined with
          the Apple Employee Purchase Plan or business loyalty pricing.
          Additional restrictions apply. View full terms and conditions of offer
          <a href="">here </a>.
        </p>
        <p>
          1. Trade-in values will vary based on the condition, year, and
          configuration of your eligible trade-in device. Not all devices are
          eligible for credit. You must be at least 18 years old to be eligible
          to trade in for credit or for an Apple Gift Card. Trade-in value may
          be applied toward qualifying new device purchase, or added to an Apple
          Gift Card. Actual value awarded is based on receipt of a qualifying
          device matching the description provided when estimate was made. Sales
          tax may be assessed on full value of a new device purchase. In-store
          trade-in requires presentation of a valid photo ID (local law may
          require saving this information). Offer may not be available in all
          stores, and may vary between in-store and online trade-in. Some stores
          may have additional requirements. Apple or its trade-in partners
          reserve the right to refuse or limit quantity of any trade-in
          transaction for any reason. More details are available from Apple’s
          trade-in partner for trade-in and recycling of eligible devices.
          Restrictions and limitations may apply.
        </p>
        <p>
          Available in the U.S. on <a href="">apple.com</a>, in the Apple Store
          app, and at Apple Stores.
        </p>
        <p>
          To access and use all Apple Card features and products available only
          to Apple Card users, you must add Apple Card to Wallet on an iPhone or
          iPad that supports and has the latest version of iOS or iPadOS. Apple
          Card is subject to credit approval, available only for qualifying
          applicants in the United States, and issued by Goldman Sachs Bank USA,
          Salt Lake City Branch.
        </p>
        <p>
          If you reside in the U.S. territories, please call Goldman Sachs at
          877-255-5923 with questions about Apple Card.
        </p>
        <p>
          Learn more about how Apple Card applications are evaluated at
          <a href="">support.apple.com/kb/HT209218.</a>
        </p>
        <p>A subscription is required for Apple TV+.</p>
        <p>
          A subscription is required for Apple Arcade, Apple Fitness+, and Apple
          Music.
        </p>
      </LegalNoticeContainer>
      <AccordionContainer>
        <hr />
        {footerColumns.map((column) => (
          <MobileAccordion data={column} />
        ))}
      </AccordionContainer>
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
          <h3>Apple Wallet</h3>
          <ul>
            <li>
              <a href="#">Wallet</a>
            </li>
            <li>
              <a href="#">Apple Card</a>
            </li>
            <li>
              <a href="#">Apple Pay</a>
            </li>
            <li>
              <a href="#">Apple Cash</a>
            </li>
          </ul>
        </FooterColumn>
        <FooterColumn>
          <h3>Account</h3>
          <ul>
            <li>
              <a href="#">Manage Your Apple ID</a>
            </li>
            <li>
              <a href="#">Apple Store Account</a>
            </li>
            <li>
              <a href="#">iCloud.com</a>
            </li>
          </ul>

          <h3>Entertainment</h3>
          <ul>
            <li>
              <a href="#">Apple One</a>
            </li>
            <li>
              <a href="#">Apple TV+</a>
            </li>
            <li>
              <a href="#">Apple Music</a>
            </li>
            <li>
              <a href="#">Apple Arcade</a>
            </li>
            <li>
              <a href="#">Apple Fitness+</a>
            </li>
            <li>
              <a href="#">Apple News+</a>
            </li>
            <li>
              <a href="#">Apple Podcasts</a>
            </li>
            <li>
              <a href="#">Apple Books</a>
            </li>
            <li>
              <a href="#">App Store</a>
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

          <h3>For Government</h3>
          <ul>
            <li>
              <a href="#">Shop for Government</a>
            </li>
            <li>
              <a href="#">Shop for Veterans and Military</a>
            </li>
          </ul>
        </FooterColumn>
        <FooterColumn>
          <h3>Apple Values</h3>
          <ul>
            <li>
              <a href="#">Accessibility</a>
            </li>
            <li>
              <a href="#">Education</a>
            </li>
            <li>
              <a href="#">Environment</a>
            </li>
            <li>
              <a href="#">Inclusion and Diversity</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
            <li>
              <a href="#">Racial Equity and Justice</a>
            </li>
            <li>
              <a href="#">Supply Chain</a>
            </li>
          </ul>

          <h3>About Apple</h3>
          <ul>
            <li>
              <a href="#">Newsroom</a>
            </li>
            <li>
              <a href="#">Apple Leadership</a>
            </li>
            <li>
              <a href="#">Career Opportunities</a>
            </li>
            <li>
              <a href="#">Investors</a>
            </li>
            <li>
              <a href="#">Ethics & Compliance</a>
            </li>
            <li>
              <a href="#">Events</a>
            </li>
            <li>
              <a href="#">Contact Apple</a>
            </li>
          </ul>
        </FooterColumn>
      </FooterLinks>
      <FooterBottom>
        <p>
          More ways to shop: <a href="#"> Find an Apple Store </a> or
          <a href="#"> other retailer</a> near you. Or call 1-800-MY-APPLE.
        </p>
        <hr />

        <span>
          <a href="#">United States</a>
        </span>

        <p>
          <span>Copyright © 2024 Apple Inc.</span>
          <span>
            All rights reserved. <a href="#">Privacy Policy </a> |
            <a href="#">Terms of Use</a> | <a href="#">Sales and Refunds </a> |
            <a href="#">Legal</a> | <a href="#">Site Map</a>
          </span>
          <span>
            <a href="#">United States</a>
          </span>
        </p>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
