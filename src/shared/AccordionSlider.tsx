import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@heroui/button";
import { LabelIcon, LeftArrowIcon, RightArrowIcon } from "@/components/icons";
import panels from "@/data/panel.json";


export const AccordionSlider: React.FC = () => {
    const [active, setActive] = useState(0);
    const panelCount = panels.length;

    const handleLeft = () => {
        if (active > 0) setActive(active - 1);
    };
    const handleRight = () => {
        if (active < panelCount - 1) setActive(active + 1);
    };

    return (
        <>
            <div className="w-full  flex flex-row items-center justify-center gap-2  select-none">
                {/* Panels */}
                <div className="flex flex-row h-[80vh]  w-full items-center gap-2">
                    {panels.map((panel, idx) => {
                        const distance = Math.abs(idx - active);
                        let height = 320;
                        if (distance === 0) height = 565;
                        else if (distance === 1) height = 530;
                        else if (distance === 2) height = 450;
                        else if (distance === 3) height = 370;
                        // else height = 140;
                        return (
                            <motion.div
                                key={panel.label}
                                layout
                                transition={{ type: "spring", stiffness: 400, damping: 40 }}
                                className={`transition-all duration-500 flex flex-col items-center justify-center rounded-[64px]  shadow-md cursor-pointer overflow-hidden`}
                                style={{
                                    background: panel.color,
                                    width: idx === active ? "100%" : "100%",
                                    minWidth: idx === active ? 320 : 64,
                                    maxWidth: idx === active ? 893 : 64,
                                    zIndex: idx === active ? 10 : 1,
                                    padding: idx === active ? 56 : 0,
                                    height: height,
                                }}
                                onClick={() => setActive(idx)}
                            >
                                <AnimatePresence mode="wait">
                                    {idx === active ? (
                                        <motion.div
                                            key={panel.label + "-content"}
                                            initial={{ opacity: 0, y: 30 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -30 }}
                                            transition={{ duration: 0.35 }}
                                            className="flex flex-col justify-between h-full w-full "
                                        >
                                            <div>
                                                <div className="text-[18px] text-[#212C66] font-regular mb-10 flex items-center gap-2 ">
                                                    <LabelIcon/>
                                                    {panel.label}
                                                </div>
                                                <h2 className="text-[40px] font-bold mb-10 max-w-[529px] leading-[1.5] text-[#212C66]">
                                                    {panel.title}
                                                </h2>
                                                <p className="text-base  font-regular max-w-[464px] leading-[1.6] text-[#212C66] ">
                                                    {panel.description}
                                                </p>
                                            </div>
                                            <Button className="bg-blue-900 text-white text-[18px] rounded-full px-[24px] py-[11px] font-semibold w-fit">
                                                Learn More
                                            </Button>
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key={panel.label + "-label"}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.8 }}
                                            transition={{ duration: 0.25 }}
                                            className="flex items-center justify-center h-full w-full"
                                        >
                                            <span
                                                className="text-[#1F2B47] font-bold text-[20px]"
                                                style={{
                                                    writingMode: "vertical-rl",
                                                    transform: "rotate(180deg)",
                                                }}
                                            >
                                                {panel.label}
                                            </span>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
            {/* Centered Arrows */}
            <div className=" pt-5 justify-end flex flex-row items-center gap-3 z-20">
                <Button
                    onPress={handleLeft}
                    className="bg-white p-0  border-1 border-[#67dbff] rounded-full min-w-10 w-10 h-10 flex items-center justify-center shadow  disabled:opacity-30"
                    disabled={active === 0}
                    aria-label="Previous"
                >
                    <LeftArrowIcon color="#67dbff" />
                </Button>
                <Button
                    onPress={handleRight}
                    className="bg-white border-1 p-0 border-[#67dbff] rounded-full min-w-10 w-10 h-10 flex items-center justify-center shadow  disabled:opacity-30"
                    disabled={active === panelCount - 1}
                    aria-label="Next"
                >
                    <RightArrowIcon color="#67dbff" />

                    
                </Button>
            </div>
        </>
    );
};

export default AccordionSlider;
