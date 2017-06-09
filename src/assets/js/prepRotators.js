// prep content for Rotators using Orbit
//automate insertion of Close Buttons and active item highlighting
function orbBulletMarkup(container, slClass){
  var orbBullets = '';
  container.find('.'+slClass).each(function(i){    
    orbBullets += '<button data-slide="' + i + '"><span class="show-for-sr">slide '+ (i+1) + '</span></button>';  
  }); 
  return orbBullets;
}
// my attempt to duplicate the height logic and reset it as needed
function recalcOrbit() {
  $('.orbit').each(function(x) {
    var max = 0, temp, counter = 0, 
    orb = $(this),    
    slideClass = orb.attr('data-slide-class') || "orbit-slide",
    orbContainerClass = orb.attr('data-container-class') || "orbit-container",
    $wrapper = orb.find('.'+orbContainerClass),
    $slides = orb.find('.'+slideClass);
    $wrapper.css({'height': 'auto'}); 
    $slides.each(function() {
      temp = this.getBoundingClientRect().height;
      $(this).attr('data-slide', counter);
      if ($slides.filter('.is-active')[0] !== $slides.eq(counter)[0]) {
        $(this).css({'position': 'relative', 'display': 'none'});
      }
      max = temp > max ? temp : max;
      counter++;
    });
    if (counter === $slides.length) {
      $wrapper.css({'height': max}); 
    }
  })  
}

function preOrbit() {  
  $('.orbit').each(function(x) {
    var orb = $(this), 
    useBullets = orb.attr('data-bullets') || "true",
    useButtons = orb.attr('data-nav-buttons') || "true", 
    buttonParentClass = orb.attr('data-nav-parent-class') || 'orbit';
    bulletBox = orb.attr('data-box-of-bullets') || "orbit-bullets",
    slideClass = orb.attr('data-slide-class') || "orbit-slide",
    orbContainerClass = orb.attr('data-container-class') || "orbit-container",
    nextBtnClass = orb.attr('data-next-class') || "orbit-next",
    prevBtnClass = orb.attr('data-prev-class') || "orbit-previous",
    orbContainer = orb.children('.'+orbContainerClass+':first'),
    orbSlides = orbContainer.children('.'+slideClass),
    useOverlay = orb.hasClass('bullets-overlay'),
    activeSlide = 0,
    automateNav = orb.attr('data-automate-nav') || "true",
    btnPrev = $("<button />",{
      "class": prevBtnClass,
      "html": '<span class="show-for-sr">previous slide</span><svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" viewBox="14 14 22 22"><path d="M27.3 34.7L17.6 25l9.7-9.7 1.4 1.4-8.3 8.3 8.3 8.3z"/></svg>'
    }),
    btnNext = $("<button />",{
      "class": nextBtnClass,
      "html": '<span class="show-for-sr">next slide</span><svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" viewBox="14 14 22 22"><path d="M22.7 34.7l-1.4-1.4 8.3-8.3-8.3-8.3 1.4-1.4 9.7 9.7z"/></svg>'
    }),
    orbControls = $("<div />", { "class": "orbit-controls" }),    
    orbBulletContainer = $("<nav />", {
      "class": bulletBox,
      "html" : orbBulletMarkup(orbContainer, slideClass)
    });
    if (orbSlides.length<1){ 
      return;
    }
    if (automateNav=="true"){      
      if (useOverlay || useButtons=="true"){
        if(buttonParentClass=='orbit'){
          orb.append(orbControls);
        }
        else if(orb.find('.'+buttonParentClass).length>0){
          orb.find('.'+buttonParentClass+':first').append(orbControls);
        }
      }
      if (useBullets=="true") {   
        if(useOverlay) {orb.find('.orbit-controls').eq(0).append(orbBulletContainer);}
        else {orb.append(orbBulletContainer);}
      }
      if(useButtons=="true") { 
        orb.find('.orbit-controls').eq(0).prepend(btnPrev).append(btnNext);      
      }
    }
    if (orbSlides.filter('.is-active').length<1){ 
        orbSlides.eq(0).addClass('is-active');
    }
    activeSlide = orbSlides.filter('.is-active').index();
    orb.find('.'+bulletBox).children('button').eq(activeSlide).addClass('is-active');
  });
}

if($(".orbit").length){ 
  preOrbit();
  var orbitTimer=0;
  $(window).on('resize', function() {   
    clearTimeout(orbitTimer);
    orbitTimer = setTimeout(recalcOrbit, 300);  
  });  
}
