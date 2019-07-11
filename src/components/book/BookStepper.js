import React, { useState, Fragment } from 'react';
import { MobileStepper, Button } from '@material-ui/core';
import BookSlideItem from './BookSlideItem';
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";

const tutorialSteps = [
    {
      label: 'San Francisco',
      desc: 'Beatiful San Francisco view ',
      imgPath:
        'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
      label: 'Bird',
      desc: 'Beatiful Bird with hand',
      imgPath:
        'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
      label: 'Bali, Indonesia',
      desc: 'Popular Travel place',
      imgPath:
        'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
    },
    {
      label: 'NeONBRAND Digital Marketing, Las Vegas, United States',
      desc: 'Go this place',
      imgPath:
        'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
      label: 'Goč, Serbia',
      desc: 'Beatiful place',
      imgPath:
        'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
    },
  ];

const BookStepper = () =>{
    const maxSteps = tutorialSteps.length;
    const [activeStep,setActiveStep] = useState(0);
    
    function handleNext(){
        setActiveStep(prevActiveStep=> prevActiveStep+1);
    }

    function handleBack(){
        setActiveStep(prevActiveStep=>prevActiveStep-1);
    }

    return(
        <div style={{width:500}}>
            <BookSlideItem item={tutorialSteps[activeStep]}/>
            <MobileStepper
                steps={maxSteps}
                variant = "dots"
                position = "static"
                activeStep={activeStep}
                nextButton={
                    <Button size="small"
                        onClick={handleNext}
                        disabled={activeStep===maxSteps-1}
                    >
                        Next<KeyboardArrowRight/>
                    </Button>
                }
                backButton={
                    <Button size="small"
                    onClick={handleBack}
                    disabled={activeStep===0}
                >
                    <KeyboardArrowLeft/>Back
                </Button>
                }
            />
        </div>

    );
}

export default BookStepper;