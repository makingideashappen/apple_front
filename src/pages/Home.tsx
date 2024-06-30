// Page.tsx
import * as React from "react";

import Layout from "../components/Layout";

import Hero from "../components/Hero";
import BanerSquare from "../components/BanerSquare";
import Slider from "../components/Slider";
import Trending from "../components/Trending";
import Animation from "../components/Animation";

interface Props {
  title: string;
  description: string;
}

const Page: React.FC<Props> = () => {
  //TO DO: ADD SEO COMPONENT
  return (
    <Layout>
      <Animation />
      <section>
        <Hero
          title="IPhone"
          description="Our most powerful cameras yet.&#10; Ultrafast chips. And USB-C."
          buttonText="Learn more"
          buttonLink="/"
          button="blue"
          buttonText2="Shop IPhone"
          buttonLink2="/"
          button2="blue-outline"
          textBottom={false}
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
          button="blue"
          buttonText2="Buy"
          buttonLink2="/"
          button2="blue-outline"
          textBottom={false}
          imageLg="[www.apple.com][50]promo_ipadpro_announce__e2d52l1z7f2a_large.jpg"
          imageMd="[www.apple.com][2]hero_ipadpro__bpt7a9d8sh42_medium.jpg"
          imageSm="[www.apple.com][214]hero_ipadpro_announce__gi60pcfhpeie_small.jpg"
        />
      </section>
      <section>
        <Hero
          buttonText="Learn more"
          buttonLink="/"
          button="blue-outline"
          textBottom={true}
          imageLg="a3008X692.jpg"
          imageMd="a1262X580.jpg"
          imageSm="a_small.jpg"
        />
      </section>
      <section>
        <BanerSquare
          baners={[
            {
              title: "Ipad",
              description: "Unbelievably thin. Incredibly powerful.",
              buttonText: "Learn more",
              buttonLink: "/",
              button: "blue",
              buttonText2: "Buy",
              buttonLink2: "/",
              button2: "blue-outline",
              isTextLight: true,
              textBottom: true,
              imageMd:
                "[www.apple.com][258]promo_macbook_air_m3__e43jegok3wuq_medium_2x.jpg",
              imageSm:
                "[www.apple.com][302]hero_macbook_air_m3_announce__fk6hkws5232i_small.jpg",
            },
            {
              title: "Ipad2",
              description: "The era of spatial computing is here.",
              buttonText: "Learn more",
              buttonLink: "/",
              button: "blue",
              buttonText2: "Buy",
              buttonLink2: "/",
              button2: "blue-outline",
              isTextLight: false,
              textBottom: true,
              imageMd:
                "[www.apple.com][42]promo_apple_vision_pro__f4v4zp0sum2y_large_2x.jpg",
              imageSm:
                "[www.apple.com][47]hero_apple_vision_pro__e8407ehady6i_small_2x.jpg",
            },
            {
              title: "Ipad3",
              description: "Smareter. Brighter. Mightier.",
              buttonText: "Learn more",
              buttonLink: "/",
              button: "blue",
              buttonText2: "Buy",
              buttonLink2: "/",
              button2: "blue-outline",
              isTextLight: true,
              textBottom: true,
              imageMd:
                "[www.apple.com][258]promo_macbook_air_m3__e43jegok3wuq_medium_2x.jpg",
              imageSm:
                "[www.apple.com][302]hero_macbook_air_m3_announce__fk6hkws5232i_small.jpg",
            },
            {
              title: "Ipad4",
              description: "Sqiad up and play now in Squad Busters.",
              buttonText: "Learn more",
              buttonLink: "/",
              button: "blue",
              buttonText2: "Buy",
              buttonLink2: "/",
              button2: "blue-outline",
              isTextLight: false,
              textBottom: false,
              imageMd:
                "[www.apple.com][42]promo_apple_vision_pro__f4v4zp0sum2y_large_2x.jpg",
              imageSm:
                "[www.apple.com][47]hero_apple_vision_pro__e8407ehady6i_small_2x.jpg",
            },
          ]}
        />
      </section>
      <section>
        <Slider
          slides={[
            {
              id: 0,
              imageMd: "[www.apple.com][792]1250x703.jpg",
              imageSm: "m1.jpg",
              buttonText: "Stream now",
              buttonLink: "/",
              slideLink: "/",
              category: "Crime",
              slogan: "Presude nothing",
            },
            {
              id: 1,
              imageMd: "[www.apple.com][763]1250x703.jpg",
              imageSm: "l1.jpg",
              buttonText: "See the schedule",
              buttonLink: "/",
              slideLink: "/",
              category: "",
              slogan: "Live MLB games, every Friday",
            },
            {
              id: 2,
              imageMd: "[www.apple.com][154]1250x703.jpg",
              imageSm: "c1.jpg",
              buttonText: "Stream now",
              buttonLink: "/",
              slideLink: "/",
              category: "Comedy",
              slogan: "New season",
            },
            {
              id: 3,
              imageMd: "[www.apple.com][792]1250x703.jpg",
              imageSm: "m1.jpg",
              buttonText: "Stream now",
              buttonLink: "/",
              slideLink: "/",
              category: "Crime",
              slogan: "Presude nothing",
            },
          ]}
        />
      </section>
      <section style={{ width: "auto" }}>
        <Trending
          slides={[
            {
              id: 0,
              imageMd: "[www.apple.com][571]417x236.jpg",
              imageSm: "[www.apple.com][306]238x134.jpg",
              buttonText: "Stream now",
              buttonLink: "/",
              slogan: "Happiness is the grat outdoors",
            },
            {
              id: 1,
              imageMd: "[www.apple.com][528]417x236.jpg",
              imageSm: "[www.apple.com][364]238x134.jpg",
              buttonText: "Stream now",
              buttonLink: "/",
              slogan: "Happiness is the grat outdoors",
            },
            {
              id: 2,
              imageMd: "[www.apple.com][32]417x236.jpg",
              imageSm: "[www.apple.com][306]238x134.jpg",
              buttonText: "Stream now",
              buttonLink: "/",
              slogan: "Happiness is the grat outdoors",
            },
            {
              id: 3,
              imageMd: "[www.apple.com][528]417x236.jpg",
              imageSm: "[www.apple.com][364]238x134.jpg",
              buttonText: "Stream now",
              buttonLink: "/",
              slogan: "Happiness is the grat outdoors",
            },
            {
              id: 4,
              imageMd: "[www.apple.com][528]417x236.jpg",
              imageSm: "[www.apple.com][306]238x134.jpg",
              buttonText: "Stream now",
              buttonLink: "/",
              slogan: "Happiness is the grat outdoors",
            },
            {
              id: 5,
              imageMd: "[www.apple.com][297]417x236.jpg",
              imageSm: "[www.apple.com][364]238x134.jpg",
              buttonText: "Stream now",
              buttonLink: "/",
              slogan: "Happiness is the grat outdoors",
            },
            {
              id: 6,
              imageMd: "[www.apple.com][32]417x236.jpg",
              imageSm: "[www.apple.com][306]238x134.jpg",
              buttonText: "Stream now",
              buttonLink: "/",
              slogan: "Happiness is the grat outdoors",
            },
            {
              id: 7,
              imageMd: "[www.apple.com][32]417x236.jpg",
              imageSm: "[www.apple.com][364]238x134.jpg",
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
