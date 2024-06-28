// Page.tsx
import * as React from "react";

import Layout from "../components/Layout";

import Hero from "../components/Hero";
import BanerSquare from "../components/BanerSquare";
import Slider from "../components/Slider";
import Trending from "../components/Trending";

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
              slogan: "Happiness is the gerat outdoors",
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
            {
              id: 5,
              image: "[www.apple.com][792]1250x703.jpg",
              buttonText: "Stream now",
              buttonLink: "/",
              slideLink: "/",
              category: "Animation",
              slogan: "Happiness is the grat outdoors",
            },
            {
              id: 6,
              image: "[www.apple.com][946]1250x703.jpg",
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
        <Trending
          slides={[
            {
              id: 0,
              image: "[www.apple.com][571]417x236.jpg",
              buttonText: "Stream now",
              buttonLink: "/",
              slogan: "Happiness is the grat outdoors",
            },
            {
              id: 1,
              image: "[www.apple.com][528]417x236.jpg",
              buttonText: "Stream now",
              buttonLink: "/",
              slogan: "Happiness is the grat outdoors",
            },
            {
              id: 2,
              image: "[www.apple.com][32]417x236.jpg",
              buttonText: "Stream now",
              buttonLink: "/",
              slogan: "Happiness is the grat outdoors",
            },
            {
              id: 3,
              image: "[www.apple.com][528]417x236.jpg",
              buttonText: "Stream now",
              buttonLink: "/",
              slogan: "Happiness is the grat outdoors",
            },
            {
              id: 4,
              image: "[www.apple.com][528]417x236.jpg",
              buttonText: "Stream now",
              buttonLink: "/",
              slogan: "Happiness is the grat outdoors",
            },
            {
              id: 5,
              image: "[www.apple.com][297]417x236.jpg",
              buttonText: "Stream now",
              buttonLink: "/",
              slogan: "Happiness is the grat outdoors",
            },
            {
              id: 6,
              image: "[www.apple.com][32]417x236.jpg",
              buttonText: "Stream now",
              buttonLink: "/",
              slogan: "Happiness is the grat outdoors",
            },
            {
              id: 7,
              image: "[www.apple.com][32]417x236.jpg",
              buttonText: "Stream now",
              buttonLink: "/",
              slogan: "Happiness is the grat outdoors",
            },
          ]}
        />
      </section>
    </Layout>
  );
};

export default Page;
