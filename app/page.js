import "./page.css";

import Banner from "../components/home/banner";
import ClientSection from "../components/home/clientsection";
import SystemSection from "../components/home/systemsection";
import UnlockSection from "../components/home/unlocksection";
import AchievementSection from "../components/home/achievementsection";
import CustomersSection from "../components/home/customerssection";
import CommunitySection from "../components/home/communitysection";
import CaringSection from "../components/home/caringsection";

export default function Home() {
  return (
    <>
      <main>
        <Banner />
        <ClientSection />
        <SystemSection />
        <UnlockSection />
        <AchievementSection />
        <CustomersSection />
        <CommunitySection />
        <CaringSection />
      </main>
    </>
  );
}
