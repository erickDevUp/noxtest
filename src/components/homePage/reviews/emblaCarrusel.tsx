"use client"
import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import { DotButton, useDotButton } from './emblaCarouselDotButton'
import {
    PrevButton,
    NextButton,
    usePrevNextButtons
} from './emblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'
import { Stack, Text } from '@chakra-ui/react'
import Autoplay from 'embla-carousel-autoplay'
import { Review } from '@/interfaces/home'

type PropType = {
    slides: Review[]
    options?: EmblaOptionsType
}

export default function EmblaCarousel(props: PropType) {
    const { slides, options } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [
        Autoplay({ playOnInit: true, delay: 5000 })
      ])
    const { selectedIndex, scrollSnaps, onDotButtonClick } =
        useDotButton(emblaApi)

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)

    return (
        <Stack direction={"row"} w={"100%"} align={"center"} justifyContent={"space-between"} px={8}>

            <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
            <section className="embla">
                <div className="embla__viewport" ref={emblaRef}>
                    <div className="embla__container">
                        {slides.map((review,index) => (
                            <div className="embla__slide" key={index}>
                                <div className="embla__slide__number">
                                <Text fontSize={["lg","2xl"]} textAlign={"center"} fontWeight={"medium"} color={"nox.text"} >
                                    {review.text}</Text>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


                <div className="embla__controls">
                    <div className="embla__dots">
                        {scrollSnaps.map((_, index) => (
                            <DotButton
                                key={index}
                                onClick={() => onDotButtonClick(index)}
                                className={'embla__dot'.concat(
                                    index === selectedIndex ? ' embla__dot--selected' : ''
                                )}
                            />
                        ))}
                    </div>
                </div>
            </section>
            <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </Stack>
    )
}

/*  <div className="embla__buttons">
         
       
        </div>
        */