// TimelineBlock.tsx
import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import gsap from 'gsap';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './TimelineBlock.css';

import { TimeSlice } from './types';

type TimelineBlockProps = {
    slices: TimeSlice[];
};

const TimelineBlock: React.FC<TimelineBlockProps> = ({ slices }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [rotationAngle, setRotationAngle] = useState(0);
    const previousIndex = useRef(0);

    const digitRefs = useRef<(HTMLDivElement | null)[][]>([]); // массив массивов для нескольких чисел
    const [parsedParts, setParsedParts] = useState<(string | number[])[]>([]);

    const count = slices.length;
    const angleStep = 360 / count;

    // Вращение круга
    useEffect(() => {
        const total = slices.length;
        const step = 360 / total;

        const prev = previousIndex.current;
        const current = activeIndex;
        const delta = ((current - prev + total) % total) * step;
        const targetRotation = rotationAngle - delta;

        gsap.to({ angle: rotationAngle }, {
            angle: targetRotation,
            duration: 0.6,
            ease: 'power2.out',
            onUpdate: function () {
                setRotationAngle(this.targets()[0].angle);
            },
        });

        previousIndex.current = current;
    }, [activeIndex]);

    // Обработка stats на числа и текст
    useEffect(() => {
        const raw = slices[activeIndex].stats;
        const parts = raw.split(/(\d+)/).filter(p => p !== '').map(part => {
            if (/^\d+$/.test(part)) {
                return part.split('').map(Number); // число как массив цифр
            }
            return part; // текст
        });
        setParsedParts(parts);

        // подготавливаем ссылки для анимации
        digitRefs.current = [];
        parts.forEach((part, groupIdx) => {
            if (Array.isArray(part)) {
                digitRefs.current[groupIdx] = [];
                part.forEach((digit, digitIdx) => {
                    digitRefs.current[groupIdx][digitIdx] = null;
                });
            }
        });
    }, [activeIndex]);

    // Анимация цифр
    useEffect(() => {
        parsedParts.forEach((part, groupIdx) => {
            if (Array.isArray(part)) {
                part.forEach((digit, digitIdx) => {
                    const el = digitRefs.current[groupIdx]?.[digitIdx];
                    if (el) {
                        const strip = el.querySelector('.digit-strip');
                        if (strip) {
                            gsap.to(strip, {
                                y: -digit * 2 + 'em',
                                duration: 0.5,
                                ease: 'power2.out',
                            });
                        }
                    }
                });
            }
        });
    }, [parsedParts]);

    return (
        <div className="timeline-container">
            <div className="timeline-center">
                <div className="timeline-stats">
                    {parsedParts.map((part, groupIdx) => {
                        if (Array.isArray(part)) {
                            return (
                                <div className="digit-group" key={groupIdx}>
                                    {part.map((digit, digitIdx) => (
                                        <div
                                            key={digitIdx}
                                            className="digit-wrapper"
                                            ref={el => {
                                                if (!digitRefs.current[groupIdx]) digitRefs.current[groupIdx] = [];
                                                digitRefs.current[groupIdx][digitIdx] = el;
                                            }}
                                        >
                                            <div className="digit-strip">
                                                {Array.from({ length: 10 }, (_, i) => (
                                                    <div key={i} className="digit">{i}</div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            );
                        }
                        return <span className="stats-label" key={groupIdx}>{part}</span>;
                    })}
                </div>
            </div>

            <div
                className="timeline-circle"
                style={{ transform: `rotate(${rotationAngle}deg)` }}
            >
                {slices.map((slice, index) => {
                    const angle = angleStep * index;
                    const style = {
                        transform: `rotate(${angle}deg) translateY(-12rem) rotate(-${angle + rotationAngle}deg)`
                    };
                    return (
                        <div
                            key={slice.id}
                            className={`timeline-slice ${activeIndex === index ? 'active' : ''}`}
                            style={style}
                            onClick={() => setActiveIndex(index)}
                        >
                            {slice.label}
                        </div>
                    );
                })}
            </div>

            <div className="timeline-nav-buttons">
                <button onClick={() => setActiveIndex((prev) => (prev - 1 + slices.length) % slices.length)}>
                    ◀
                </button>
                <button onClick={() => setActiveIndex((prev) => (prev + 1) % slices.length)}>
                    ▶
                </button>
            </div>

            <div className="timeline-slider-wrapper">
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={20}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                >
                    {slices[activeIndex].events.map((event: any) => (
                        <SwiperSlide key={event.id}>
                            <div className="timeline-slide">
                                <h3>{event.title}</h3>
                                <p>{event.description}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default TimelineBlock;