import React, { useState } from "react";
import { Button } from "@heroui/button";
import { LabelIcon } from "@/components/icons";
import panels from "@/data/panel.json";


const AccordionMobile: React.FC = () => {
    const [active, setActive] = useState(0);

    return (
        <div className="w-full flex flex-col items-center gap-2 overflow-x-auto  h-screen justify-center" style={{ minHeight: 339 }}>
            {panels.map((panel, idx) => {
                const distance = Math.abs(idx - active);
                let width = 220;
                if (distance === 0) width = 350;
                else if (distance === 1) width = 310;
                else if (distance === 2) width = 280;
                else if (distance === 3) width = 250;
                return (
                    <div
                        key={panel.label}
                        className={`transition-all duration-500 flex flex-col items-center justify-center rounded-[24px] shadow-md cursor-pointer overflow-hidden`}
                        style={{
                            background: panel.color,
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
                                        <LabelIcon />
                                        {panel.label}
                                    </div>
                                    <h2 className="text-[24px] font-bold mb-4 leading-[1.4] text-[#212C66]">
                                        {panel.title}
                                    </h2>
                                    <p className="text-sm font-regular leading-[1.6] text-[#212C66] mb-4">
                                        {panel.description}
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
                                {panel.label}
                            </span>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default AccordionMobile; 