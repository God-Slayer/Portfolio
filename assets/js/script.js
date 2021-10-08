$(document).ready(function(){
  particlesJS("particles-js",{
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: "#ABD1B8" },
      shape: {
        type: "circle",
        stroke: { width: 0, color: "#000000" },
        polygon: { nb_sides: 5 },
        image: { src: "img/github.svg", width: 100, height: 100 }
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
      },
      size: {
        value: 3,
        random: true,
        anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ABD1B8",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 6,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: { enable: false, rotateX: 600, rotateY: 1200 }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "push" },
        resize: true
      },
      modes: {
        grab: { distance: 400, line_linked: { opacity: 1 } },
        bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 }
      }
    },
    retina_detect: false
  });
  var update;
  update=function (){
    requestAnimationFrame(update);
  };
  requestAnimationFrame(update);

  $(document).on('click','.download_cont i',function(e){
    e.stopPropagation();
    if($(this).hasClass('open')){
      $(this).removeClass('far');
      $(this).addClass('fas');
      $(this).removeClass('open');
      $('.download_cont > span').removeClass('open');
      $('.file_cont').removeClass('open');
    }
    else{
      $(this).removeClass('fas');
      $(this).addClass('far');
      $(this).addClass('open');
      $('.download_cont > span').addClass('open');
      $('.file_cont').addClass('open');
    }
  });

  $(document).on('click','.file_cont li',function(e){
    e.stopPropagation();
    $(this).find('a')[0].click();
  });

  $(document).on('click','body',function(){
    console.log('called');
    $('.download_cont i').removeClass('far');
    $('.download_cont i').addClass('fas');
    $('.download_cont i').removeClass('open');
    $('.download_cont > span').removeClass('open');
    $('.file_cont').removeClass('open');
  });
});
