import DefaultLayout from "@/layouts/default";
import AccordionSlider from "@/shared/AccordionSlider";
import AccordionMobile from "@/shared/AccordionMobile";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section>
        <div className="lg:hidden">
          <AccordionMobile />
        </div>
        <div className="hidden lg:block">
          <AccordionSlider />
        </div>
      </section>
    </DefaultLayout>
  );
}
