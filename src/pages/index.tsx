import DefaultLayout from "@/layouts/default";
import AccordionSlider from "@/shared/AccordionSlider";
import AccordionMobile from "@/shared/AccordionMobile";
import { useServices } from "@/hooks/useServices";
import { Spinner } from "@heroui/Spinner";

export default function IndexPage() {
  const { data, isLoading, isError } = useServices();

  return (
    <DefaultLayout>
      <section>
        {isLoading ?
          <div className="flex justify-center items-center min-h-screen">
            <Spinner />
          </div>
          : isError ? <div className="flex justify-center items-center min-h-screen">
            <p className="text-red-500">حدث خطأ في تحميل البيانات</p>
          </div> :
          <>
            <div className="lg:hidden">
              <AccordionMobile services={data?.data?.services || []} />
            </div>
            <div className="hidden lg:block">
              <AccordionSlider services={data?.data?.services || []} />
            </div>
          </>
        }
      </section>
    </DefaultLayout>
  );
}
