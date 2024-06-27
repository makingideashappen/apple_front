// Page.tsx
import * as React from "react";

import Layout from "../components/Layout";

import Hero from "../components/Hero";
import BanerSquare from "../components/BanerSquare";
import Slider from "../components/Slider";
import Trend from "../components/Trend";

import LegalNotice from "../components/LegalNotice";

interface Props {
  title: string;
  description: string;
}

const Page: React.FC<Props> = ({ title, description }) => {
  //TO DO: ADD SEO COMPONENT
  console.log(title, description);
  return (
    <Layout>
      <section>
        <Hero
          title="IPhone"
          description="Our most powerful cameras yet.&#10; Ultrafast chips. And USB-C."
          buttonText="Learn more"
          buttonLink="/"
          buttonColorScheme="blue"
          buttonText2="Shop IPhone"
          buttonLink2="/"
          buttonColorScheme2="blue-outline"
          imageLg="[www.apple.com][38]hero_iphone_family_a__c7v3mvx3jv42_largetall.jpg"
          imageMd="[www.apple.com][124]hero_iphone_family_b__fq54ide73seq_mediumtall_2x.jpg"
          imageSm="[www.apple.com][323]hero_iphone_family_b__fq54ide73seq_small.jpg"
        />
      </section>
      <section>
        <Hero
          title="Ipad"
          description="Unbelievably thin. Incredibly powerful."
          buttonText="Learn more"
          buttonLink="/"
          buttonColorScheme="blue"
          buttonText2="Buy"
          buttonLink2="/"
          buttonColorScheme2="blue-outline"
          imageLg="[www.apple.com][50]promo_ipadpro_announce__e2d52l1z7f2a_large.jpg"
          imageMd="[www.apple.com][2]hero_ipadpro__bpt7a9d8sh42_medium.jpg"
          imageSm="[www.apple.com][214]hero_ipadpro_announce__gi60pcfhpeie_small.jpg"
        />
      </section>
      <section>
        <Hero
          buttonText="Learn more"
          buttonLink="/"
          buttonColorScheme="blue-outline"
          isTextBottom
          imageLg="custom_largre.jpg"
          imageMd="lcustom_largre.jpg"
          imageSm="custom_small.jpg"
        />
      </section>
      <section>
        <BanerSquare
          title="Ipad"
          description="Unbelievably thin. Incredibly powerful."
          buttonText="Learn more"
          buttonLink="/"
          buttonColorScheme="blue"
          buttonText2="Buy"
          buttonLink2="/"
          buttonColorScheme2="blue-outline"
          imageMd="[www.apple.com][258]promo_macbook_air_m3__e43jegok3wuq_medium_2x.jpg"
          imageSm="[www.apple.com][302]hero_macbook_air_m3_announce__fk6hkws5232i_small.jpg"
        />
        <BanerSquare
          title="Ipad"
          description="The era of spatial computing is here."
          buttonText="Learn more"
          buttonLink="/"
          buttonColorScheme="blue"
          buttonText2="Buy"
          buttonLink2="/"
          buttonColorScheme2="blue-outline"
          isTextBottom
          imageMd="[www.apple.com][42]promo_apple_vision_pro__f4v4zp0sum2y_large_2x.jpg"
          imageSm="[www.apple.com][47]hero_apple_vision_pro__e8407ehady6i_small_2x.jpg"
        />
      </section>
      <section>
        <BanerSquare
          title="Ipad"
          description="Smareter. Brighter. Mightier."
          buttonText="Learn more"
          buttonLink="/"
          buttonColorScheme="blue"
          buttonText2="Buy"
          buttonLink2="/"
          buttonColorScheme2="blue-outline"
          isTextLight
          imageMd="[www.apple.com][258]promo_macbook_air_m3__e43jegok3wuq_medium_2x.jpg"
          imageSm="[www.apple.com][302]hero_macbook_air_m3_announce__fk6hkws5232i_small.jpg"
        />
        <BanerSquare
          title="Ipad"
          description="Sqiad up and play now in Squad Busters."
          buttonText="Learn more"
          buttonLink="/"
          buttonColorScheme="blue"
          buttonText2="Buy"
          buttonLink2="/"
          buttonColorScheme2="blue-outline"
          isTextLight
          imageMd="[www.apple.com][42]promo_apple_vision_pro__f4v4zp0sum2y_large_2x.jpg"
          imageSm="[www.apple.com][47]hero_apple_vision_pro__e8407ehady6i_small_2x.jpg"
        />
      </section>
      <section>
        <BanerSquare
          title="Ipad"
          description="Unbelievably thin. Incredibly powerful."
          buttonText="Learn more"
          buttonLink="/"
          buttonColorScheme="blue"
          buttonText2="Buy"
          buttonLink2="/"
          buttonColorScheme2="blue-outline"
          imageMd="[www.apple.com][258]promo_macbook_air_m3__e43jegok3wuq_medium_2x.jpg"
          imageSm="[www.apple.com][302]hero_macbook_air_m3_announce__fk6hkws5232i_small.jpg"
        />
        <BanerSquare
          title="Ipad"
          description="Unbelievably thin. Incredibly powerful."
          buttonText="Learn more"
          buttonLink="/"
          buttonColorScheme="blue"
          buttonText2="Buy"
          buttonLink2="/"
          buttonColorScheme2="blue-outline"
          imageMd="[www.apple.com][42]promo_apple_vision_pro__f4v4zp0sum2y_large_2x.jpg"
          imageSm="[www.apple.com][47]hero_apple_vision_pro__e8407ehady6i_small_2x.jpg"
        />
      </section>
      <section>
        <BanerSquare
          title="Ipad"
          description="Smareter. Brighter. Mightier."
          buttonText="Learn more"
          buttonLink="/"
          buttonColorScheme="blue"
          buttonText2="Buy"
          buttonLink2="/"
          buttonColorScheme2="blue-outline"
          isTextLight
          imageMd="[www.apple.com][258]promo_macbook_air_m3__e43jegok3wuq_medium_2x.jpg"
          imageSm="[www.apple.com][302]hero_macbook_air_m3_announce__fk6hkws5232i_small.jpg"
        />
        <BanerSquare
          title="Ipad"
          description="Sqiad up and play now in Squad Busters."
          buttonText="Learn more"
          buttonLink="/"
          buttonColorScheme="blue"
          buttonText2="Buy"
          buttonLink2="/"
          buttonColorScheme2="blue-outline"
          isTextLight
          imageMd="[www.apple.com][42]promo_apple_vision_pro__f4v4zp0sum2y_large_2x.jpg"
          imageSm="[www.apple.com][47]hero_apple_vision_pro__e8407ehady6i_small_2x.jpg"
        />
      </section>

      <section>
        <Slider
          slides={[
            {
              id: 0,
              image: "[www.apple.com][606]1250x703.jpg",
              buttonText: "Stream now",
              buttonLink: "/",
              slideLink: "/",
              category: "Animation",
              slogan: "Happiness is the grat outdoors",
            },
            {
              id: 1,
              image: "[www.apple.com][591]1250x703.jpg",
              buttonText: "Stream now",
              buttonLink: "/",
              slideLink: "/",
              category: "Animation",
              slogan: "Happiness is the grat outdoors",
            },
            {
              id: 2,
              image: "[www.apple.com][792]1250x703.jpg",
              buttonText: "Stream now",
              buttonLink: "/",
              slideLink: "/",
              category: "Animation",
              slogan: "Happiness is the grat outdoors",
            },
            {
              id: 3,
              image: "[www.apple.com][946]1250x703.jpg",
              buttonText: "Stream now",
              buttonLink: "/",
              slideLink: "/",
              category: "Animation",
              slogan: "Happiness is the grat outdoors",
            },
            {
              id: 4,
              image: "[www.apple.com][32]417x236.jpg",
              buttonText: "Stream now",
              buttonLink: "/",
              slideLink: "/",
              category: "Animation",
              slogan: "Happiness is the grat outdoors",
            },
          ]}
        />
      </section>
      <section>
        <Trend />
      </section>
      <LegalNotice
        notices={[
          ` * Available for Qualified Purchasers only. Qualified Purchasers receive an Apple Gift Card when they purchase an Eligible Product at a Qualifying Location through September 30, 2024. Gift card values may vary by Eligible Product. Only one Apple Gift Card per Eligible Product per Qualified Purchaser. Offer subject to availability. While supplies last. Qualified Purchasers shall receive a discount equal to the value of the Apple Gift Card off the price of the Eligible Product, but will be charged for all items in their cart, including the Apple Gift Card. Important notice regarding the checkout receipt and monthly statement for Apple Card Monthly Installments (ACMI) purchases with this promotion: Qualified Purchasers selecting ACMI (a 0% APR payment option available only in the U.S.) as payment type at checkout shall receive a discount equal to the value of the Apple Gift Card off the price of the Eligible Product. This will result in one ACMI installment plan over 12 months for the Eligible Product discounted by the instant credit, and a second ACMI installment plan over 12 months for the full price of the Apple Gift Card. The total combined amount charged over the two separate ACMI installment plans will reflect the original full retail price of the Eligible Product. Separately, Qualified Purchasers will receive and be charged for the Apple Gift Card in the amount of the applicable discount off the Eligible Product. Apple Card Monthly Installments (ACMI) is a 0% APR payment option that is only available if you select it at checkout in the U.S. for eligible products purchased at Apple Store locations, apple.com, the Apple Store app, or by calling 1-800-MY-APPLE, and is subject to credit approval and credit limit. See support.apple.com/kb/HT211204 for more information about eligible products. APR ranges may vary based on when you accepted an Apple Card. Cardholders who accept an Apple Card on and or after February 1, 2024: Variable APRs for Apple Card, other than ACMI, range from 19.24% to 29.49% based on creditworthiness. Rates as of February 1, 2024. Existing cardholders: See your Customer Agreement for applicable rates and fee. If you buy an ACMI-eligible product by choosing to pay in full with Apple Card (instead of using ACMI), that purchase is subject to the Apple Card variable APR, not 0% APR. Taxes and shipping on ACMI purchases are subject to the variable APR, not 0% APR. When you buy an iPhone with ACMI, you’ll need to select AT&T, T-Mobile, or Verizon as your carrier when you check out. An iPhone purchased with ACMI is always unlocked, so you can switch carriers at any time. ACMI is not available for purchases made online at the following special stores: Apple Employee Purchase Plan; participating corporate Employee Purchase Programs; Apple at Work for small businesses; Government and Veterans and Military Purchase Programs; or on refurbished devices. The last month’s payment for each product will be the product’s purchase price, less all other payments at the monthly payment amount. ACMI financing is subject to change at any time for any reason, including but not limited to installment term lengths and eligible products. See support.apple.com/kb/HT211204 for information about upcoming changes to ACMI financing. See the Apple Card Customer Agreement for more information about ACMI financing. Apple Card is issued by Goldman Sachs Bank USA, Salt Lake City Branch. Available for qualifying applicants in the United States. If you reside in the U.S. territories, please call Goldman Sachs at 877-255-5923 with questions about accessing this offer or applying for Apple Card. This offer cannot be combined with the Apple Employee Purchase Plan or business loyalty pricing. Additional restrictions apply. View full terms and conditions of offer here.
1. Trade-in values will vary based on the condition, year, and configuration of your eligible trade-in device. Not all devices are eligible for credit. You must be at least 18 years old to be eligible to trade in for credit or for an Apple Gift Card. Trade-in value may be applied toward qualifying new device purchase, or added to an Apple Gift Card. Actual value awarded is based on receipt of a qualifying device matching the description provided when estimate was made. Sales tax may be assessed on full value of a new device purchase. In-store trade-in requires presentation of a valid photo ID (local law may require saving this information). Offer may not be available in all stores, and may vary between in-store and online trade-in. Some stores may have additional requirements. Apple or its trade-in partners reserve the right to refuse or limit quantity of any trade-in transaction for any reason. More details are available from Apple’s trade-in partner for trade-in and recycling of eligible devices. Restrictions and limitations may apply.
To access and use all Apple Card features and products available only to Apple Card users, you must add Apple Card to Wallet on an iPhone or iPad that supports and has the latest version of iOS or iPadOS. Apple Card is subject to credit approval, available only for qualifying applicants in the United States, and issued by Goldman Sachs Bank USA, Salt Lake City Branch.
If you reside in the U.S. territories, please call Goldman Sachs at 877-255-5923 with questions about Apple Card.
Learn more about how Apple Card applications are evaluated at support.apple.com/kb/HT209218.
A subscription is required for Apple TV+.
A subscription is required for Apple Arcade, Apple Fitness+, and Apple Music.`,
        ]}
      />
    </Layout>
  );
};

export default Page;
