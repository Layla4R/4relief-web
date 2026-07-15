import HeroSlider from "../../components/sections/HeroSlider";
import Stats from "../../components/sections/Stats";
import FeaturedPrograms from "../../components/sections/FeaturedPrograms";
import CallToAction from "../../components/sections/CallToAction";
import { getMessages } from "../../i18n/request";
import { isSupported } from "../../i18n/routing";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  const locale = isSupported(localeParam) ? localeParam : "en";
  const messages = await getMessages(locale);

  return (
    <div className="flex flex-col">
      <HeroSlider
        title={messages.home.title}
        lead={messages.home.lead}
        primaryLabel={messages.cta.donate}
        secondaryLabel={messages.cta.volunteer}
        locale={locale}
      />
      <Stats />
      <FeaturedPrograms
        heading={messages.featured.heading}
        cardMessages={messages.card}
        programMessages={messages.featured.programs}
      />
      <CallToAction
        heading={messages.cta.heading}
        text={messages.cta.text}
        donateFormMessages={messages.cta.donateForm}
      />
    </div>
  );
}
