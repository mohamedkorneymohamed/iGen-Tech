import { useState } from "react";
import { Button } from "@heroui/button";
import { LabelIcon } from "@/components/icons";
import { Service } from "@/types";

const AccordionMobile = ({ services }: { services: Service[] }) => {
    const [active, setActive] = useState(0);
    
    return (
        <div className="w-full flex flex-col items-center gap-2 overflow-x-auto  h-screen justify-center" style={{ minHeight: 339 }}>
            {services?.map((service, idx) => {
                const distance = Math.abs(idx - active);
                let width = 220;
                if (distance === 0) width = 350;
                else if (distance === 1) width = 310;
                else if (distance === 2) width = 280;
                else if (distance === 3) width = 250;
                return (
                    <div
                        key={service.service_title}
                        className={`transition-all duration-500 flex flex-col items-center justify-center rounded-[24px] shadow-md cursor-pointer overflow-hidden`}
                        style={{
                            background: service.service_color,
                            minWidth: width,
                            maxWidth: width,
                            zIndex: idx === active ? 10 : 1,
                            padding: idx === active ? 24 : 0,
                            height: active === idx ? 339 : 56,
                        }}
                        onClick={() => setActive(idx)}
                    >
                        {idx === active ? (
                            <div className="flex flex-col justify-between h-full w-full">
                                <div>
                                    <div className="text-[16px] text-[#212C66] font-regular mb-4 flex items-center gap-2 ">
                                        <LabelIcon/>
                                        {service.service_title}
                                    </div>
                                    <h2 className="text-[24px] font-bold mb-4 leading-[1.4] text-[#212C66]">
                                        {service.service_title}
                                    </h2>
                                    <p dangerouslySetInnerHTML={{ __html: service.service_description }} className="text-sm font-regular leading-[1.6] text-[#212C66] mb-4">
                                    </p>
                                </div>
                                <Button className="bg-[#212C66] text-white rounded-full px-[24px] py-[11px] font-semibold w-full">
                                            Learn More
                                </Button>
                            </div>
                        ) : (
                            <span
                                className="text-[#1F2B47] font-bold text-[14px]"
                                style={{
                                    textAlign: 'center',
                                    width: '100%',
                                }}
                            >
                                    {service.service_title}
                            </span>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default AccordionMobile; 