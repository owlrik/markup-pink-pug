(function() {
  'use strict';

  const UtilityCheck = function() {
  };

  UtilityCheck.prototype.isMobile = function(maxWidth) {
    return window.matchMedia("(max-width: " + maxWidth + "px )").matches;
  };

  UtilityCheck.prototype.isTouchDevice = function() {
    return "ontouchstart" in window || "DocumentTouch" in window && document instanceof DocumentTouch;
  };

  let envCheck = new UtilityCheck();

  const Carousel = function(slider) {
    let self = this;

    this.slider = slider;
    this.innerContainer = slider.querySelector('.slider__inner');
    this.slides = slider.querySelectorAll('.slider__item');
    this.togglerPrev = slider.querySelector('.slider__toggler--prev');
    this.togglerNext = slider.querySelector('.slider__toggler--next');
    this.controls = slider.querySelectorAll('.slider__control');
    this.offset = 0;

    this.hasTogglers = this.togglerPrev && this.togglerNext;

    if (this.hasTogglers) {
      this.togglerPrev.addEventListener('click', function () {
        self.toggle(false);
      });

      this.togglerNext.addEventListener('click', function () {
        self.toggle(true);
      });
    }

    if (envCheck.isTouchDevice()) {
      this.slider.addEventListener('touchstart', function (evt) {
        self.onTouchStart(evt);
      });

      this.slider.addEventListener('touchmove', function (evt) {
        self.onTouchMove(evt);
      });

      this.slider.addEventListener('touchend', function (evt) {
        self.onTouchEnd(evt);
      });
    }

    this.initControls(this.controls);
  };

  Carousel.prototype.initControls = function(controls) {
    let self = this;

    if (controls.length > 0) {
      controls.forEach(function (control) {
        control.addEventListener('click', function (evt) {
          self.controlOnClick(evt.currentTarget);
        });
      });
    }
  };

  Carousel.prototype.controlOnClick = function(control) {
    let newSlideIndex = [].indexOf.call(this.controls, control);
    this.toggleTo(newSlideIndex);
  };

  Carousel.prototype.getActiveIndex = function() {
    return parseInt(this.slider.dataset.frameindex, 10) || 0;
  };

  Carousel.prototype.setActiveIndex = function(index) {
    this.slider.dataset.frameindex = index;
  };

  Carousel.prototype.toggle = function(isForward) {
    let currentSlideIndex = this.getActiveIndex();

    let newSlideIndex = (isForward) ? ++currentSlideIndex : --currentSlideIndex;

    if (newSlideIndex >= 0 && newSlideIndex < this.slides.length) {
      this.toggleTo(newSlideIndex);
    }
  };

  Carousel.prototype.toggleTo = function(index) {
    this.setActiveControls(index);
    this.setActiveIndex(index);
    this.configureTogglers(index);
    this.moveTo(index);
  };

  Carousel.prototype.setActiveControls = function(index) {
    this.configureControls(this.controls, 'slider__control--active', index);
  };

  Carousel.prototype.configureControls = function(controls, activeClassName, index) {
    controls.forEach(function (control) {
      control.classList.remove(activeClassName);
    });

    let activeControl = controls[index];
    activeControl.classList.add(activeClassName);
  };

  Carousel.prototype.configureTogglers = function(index) {
      let maxSlideIndex = this.slides.length - 1;

      if (this.hasTogglers) {
        this.togglerPrev.disabled = false;
        this.togglerNext.disabled = false;

        if (index === 0) {
          this.togglerPrev.disabled = true;
        }
        else if (index === maxSlideIndex) {
          this.togglerNext.disabled = true;
        }
      }
  };

  Carousel.prototype.moveTo = function(index) {
      let nextSlide = this.slides[index];
      let slideOffset = this.getItemOffset(nextSlide);
      this.move(slideOffset);
  };

  Carousel.prototype.getItemOffset = function(slideItem) {
    return -slideItem.offsetLeft;
  };

  Carousel.prototype.getOffsetBounds = function() {
    return [this.getItemOffset(this.slides[this.slides.length - 1]), this.getItemOffset(this.slides[0])];
  };

  Carousel.prototype.move = function(itemOffset) {
      let bounds = this.getOffsetBounds();
      let rightBound = bounds[0];
      let leftBound = bounds[1];

      let realItemOffset = (itemOffset < rightBound) ? rightBound : itemOffset;
      realItemOffset = (realItemOffset > leftBound) ? leftBound : realItemOffset;

      this.offset = realItemOffset;

      let offsetPercent = 100 * realItemOffset / this.innerContainer.offsetWidth * 10 / 10;
      this.innerContainer.style.transform = 'translateX(' + offsetPercent + '%)';
  };

  Carousel.prototype.onTouchStart = function(evt) {
    if (evt.touches.length === 1) {
      let sliderTouch = evt.touches[0];
      this.slider.classList.add('slider--touching');
      this.initialOffset = this.offset;
      this.initialX = sliderTouch.screenX;
      this.initialY = sliderTouch.screenY;
    } else {
      this.slider.classList.remove('slider--touching');
    }
  };

  Carousel.prototype.onTouchMove = function(evt) {
    if (this.isTouching()) {
      let sliderTouch = evt.touches[0];
      let touchOffsetX = sliderTouch.screenX - this.initialX;
      let touchOffsetY = sliderTouch.screenY - this.initialY;

      if (Math.abs(touchOffsetX) > Math.abs(touchOffsetY)) {
        evt.preventDefault();
        evt.stopPropagation();
        this.move(this.initialOffset + touchOffsetX);
      } else {
        this.slider.classList.remove('slider--touching');
      }
    }
  };

  Carousel.prototype.onTouchEnd = function(evt) {
    if (this.isTouching()) {
      this.slider.classList.remove('slider--touching');
      let offset = this.offset - this.initialOffset;
      const SWIPE_THRESHOLD = 100;

      if (Math.abs(offset) < SWIPE_THRESHOLD) {
        this.toggleTo(this.getActiveIndex());
      } else {
        offset < 0 ? this.toggle(true) : this.toggle(false);
      }
    }
  };

  Carousel.prototype.isTouching = function() {
    return this.slider.classList.contains('slider--touching');
  };

  let sliderReviews = document.querySelector('.reviews__slider');
  if (sliderReviews) {
    let carouselReviews = new Carousel(sliderReviews);
  }

  const MonoSlider = function(slider) {
    let self = this;

    this.slider = slider;
    this.innerContainer = slider.querySelector('.prices-table');
    this.slides = this.getPseudoSlides();
    this.togglerPrev = slider.querySelector('.slider__toggler--prev');
    this.togglerNext = slider.querySelector('.slider__toggler--next');
    this.controls = slider.querySelectorAll('.slider__control');
    this.offset = 0;

    this.hasTogglers = this.togglerPrev && this.togglerNext;

    if (envCheck.isTouchDevice() && envCheck.isMobile(659)) {
      this.slider.addEventListener('touchstart', function (evt) {
        self.onTouchStart(evt);
      });

      this.slider.addEventListener('touchmove', function (evt) {
        self.onTouchMove(evt);
      });

      this.slider.addEventListener('touchend', function (evt) {
        self.onTouchEnd(evt);
      });
    }

    this.initControls(this.controls);
  };

  MonoSlider.prototype = Object.create(Carousel.prototype);

  MonoSlider.prototype.getSlideWidth = function() {
    let sliderFrame = this.slider.querySelector('.slider__overflow-wrap');
    let sliderFrameStyles = window.getComputedStyle(sliderFrame);
    let sliderFramePadding = parseFloat(sliderFrameStyles.paddingRight) + parseFloat(sliderFrameStyles.paddingLeft);

    return sliderFrame.clientWidth - sliderFramePadding;
  };

  MonoSlider.prototype.getSlidesCount = function() {
    return this.innerContainer.clientWidth / this.getSlideWidth();
  };

  MonoSlider.prototype.getPseudoSlides = function() {
    let slidesCount = this.getSlidesCount();
    let slideWidth = this.getSlideWidth();

    let pseudoSlides = [];
    for (let i = 0; i < slidesCount; i++) {
      pseudoSlides.push({
        offsetLeft: slideWidth * i
      });
    }

    return pseudoSlides;
  };

  MonoSlider.prototype.initControls = function(controls) {
    let self = this;

    if (envCheck.isMobile(659) && controls.length > 0) {
      controls.forEach(function (control) {
        control.addEventListener('click', function (evt) {
          self.controlOnClick(evt.currentTarget);
        });
      });
    }
  };

  let sliderPrices = document.querySelector('.prices__slider');
  if (sliderPrices) {
    let pricesSlider = new MonoSlider(sliderPrices);
    if (envCheck.isMobile(659)) {
      pricesSlider.toggleTo(1);
    }
  }
})();
