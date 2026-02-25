import {useCarousel} from "@/app/hooks/useCarousel";
import useIntersection from "@/app/hooks/useIntersectionHide";
import Image from "next/image";

const Carousel = ({ slides, interval = 5000, isActive: isActiveProp }) => {
    const [carouselRef, isHidden] = useIntersection();
    const isActive = typeof isActiveProp === 'boolean' ? isActiveProp : !isHidden;
    const { currentIndex, next, prev } = useCarousel(slides.length, interval, isActive);

    const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
    const nextIndex = (currentIndex + 1) % slides.length;

    return (
        <div ref={carouselRef} className="carousel">
            <div className="carousel-inner">
                {slides.map((slide, idx) => {
                    const isCurrent = idx === currentIndex;
                    const isNear = idx === prevIndex || idx === nextIndex;
                    const shouldEagerLoad = isCurrent || isNear;

                    return (

                        <div
                            key={idx}
                            className={`slide ${isCurrent ? "active" : ""}`}
                        >
                            {/* IMAGE */}
                            {(!slide.type || slide.type === "image") && (
                                <Image
                                    src={slide.src.src}
                                    alt=''
                                    className="slide-image"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 80vw"
                                    priority={isCurrent}
                                    loading={shouldEagerLoad ? "eager" : "lazy"}
                                />
                            )}

                            {/* VIDEO (jak zechcesz włączyć) */}
                            {slide.type === "video" && (
                                <video
                                    className="slide-image"
                                    autoPlay={isCurrent && isActive} // ✅ tylko aktywny
                                    muted
                                    loop
                                    playsInline
                                    preload="none"                   // ✅ nie zasysaj filmów z karuzeli
                                    poster={slide.poster || undefined}
                                >
                                    <source src={slide.src.src} type="video/mp4"/>
                                </video>
                            )}

                            {/* Overlay opcjonalnie */}
                            {slide.overlay && (
                                <div className="overlay">
                                    <div className="text-box">
                                        <div className="opening_text">{slide.overlay}</div>
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

            <button className="prev-button" onClick={prev} aria-label="Previous slide">
                ‹
            </button>
            <button className="next-button" onClick={next} aria-label="Next slide">
                ›
            </button>
        </div>
    );
};

export default Carousel;