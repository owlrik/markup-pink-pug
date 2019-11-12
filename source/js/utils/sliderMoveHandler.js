(function() {
  'use strict';

  const Carousel = function(slider) {
    let self = this;

    this.slider = slider;
    this.innerContainer = slider.querySelector('.slider__inner');
    this.slides = slider.querySelectorAll('.slider__item');
    this.togglerPrev = slider.querySelector('.slider__toggler--prev');
    this.togglerNext = slider.querySelector('.slider__toggler--next');
    this.controls = slider.querySelectorAll('.slider__control');

    this.hasTogglers = this.togglerPrev && this.togglerNext;

    if (this.hasTogglers) {
      this.togglerPrev.addEventListener('click', function () {
        self.toggle(false);
      });

      this.togglerNext.addEventListener('click', function () {
        self.toggle(true);
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

      let offsetPercent = 100 * realItemOffset / this.innerContainer.offsetWidth * 10 / 10;
      this.innerContainer.style.transform = 'translateX(' + offsetPercent + '%)';
  };

  let sliderReviews = document.querySelector('.reviews__slider');
  if (sliderReviews) {
    let carouselReviews = new Carousel(sliderReviews);
  }

  const MonoSlider = function(slider) {
    this.slider = slider;
    this.innerContainer = slider.querySelector('.prices-table');
    this.controls = slider.querySelectorAll('.slider__control');

    this.initControls(this.controls);
  };

  MonoSlider.prototype.initControls = function(controls) {
    let self = this;

    if (controls.length > 0) {
      controls.forEach(function (control) {
        control.addEventListener('click', function (evt) {
          self.controlOnClick(evt.currentTarget);
        });
      });
    }
  };

  MonoSlider.prototype.controlOnClick = function(control) {
    let newSlideIndex = [].indexOf.call(this.controls, control);
    this.toggleTo(newSlideIndex);
  };

  MonoSlider.prototype.toggleTo = function(index) {
    this.setActiveControls(index);
    this.moveTo(index);
  };

  MonoSlider.prototype.setActiveControls = function(index) {
    this.configureControls(this.controls, 'slider__control--active', index);
  };

  MonoSlider.prototype.configureControls = function(sliderControls, activeClassName, index) {
    for (let i = 0; i < sliderControls.length; i++) {
      let currentControl = sliderControls[i];
      currentControl.classList.remove(activeClassName);
    }

    let activeControl = sliderControls[index];
    activeControl.classList.add(activeClassName);
  };

  MonoSlider.prototype.moveTo = function(index) {
    let slideOffset = this.innerContainer.offsetWidth / this.controls.length * index;
    this.move(-slideOffset);
  };

  MonoSlider.prototype.move = function(itemOffset) {
    let offsetPercent = 100 * itemOffset / this.innerContainer.offsetWidth * 10 / 10;
    this.innerContainer.style.transform = 'translateX(' + offsetPercent + '%)';
  };

  let sliderPrices = document.querySelector('.prices__slider');
  if (sliderPrices) {
    let pricesSlider = new MonoSlider(sliderPrices);
  }
})();
