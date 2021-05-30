import { Layout } from "components";

import {
  Gallery,
  HeroVideo,
  LatestNews,
  RecentDJ,
  Reservation,
  Services,
  UpcomingEvents,
} from "sections";

const index = () => {
  return (
    <Layout>
      <HeroVideo />
      <UpcomingEvents />
      <Services />
      <RecentDJ />
      <LatestNews />
      <Gallery />
      <Reservation />
    </Layout>
  );
};

export default index;
