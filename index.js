$(function () {
  $(window).scroll(function () {
    let scTop = $(window).scrollTop();

    $(".sc").scrollTop(scTop / 10);
  });
  //section1
  gsap.registerPlugin(ScrollTrigger);
  const tl = gsap.timeline();
  tl.from(".section1 .home__first-project-wrapper", { xPercent: 0, yPercent: 0 }).to(".section1", { xPercent: -20, yPercent: -40, opacity: 0, scale: 0.4, duration: 7 });
  ScrollTrigger.create({
    animation: tl,
    trigger: ".section1",
    start: "top top",
    end: "bottom -30%",
    pin: true,
    scrub: true,
    anticipatePin: 0,
    markers: true, // 디버깅용 마커 표시
  });

  //section2
  const tl2 = gsap.timeline();
  tl2.from(".section2 .home__first-project-wrapper", { xPercent: 100, yPercent: -100, opacity : 0 })
    .to(".section2 .home__first-project-wrapper", { xPercent: 0, yPercent: 0, opacity: 1 })
    .to(".section2 .home__first-project-wrapper", { xPercent: -100, yPercent: 100, opacity :0 })
  ScrollTrigger.create({
    animation: tl2,
    trigger: ".section2",
    start: "top top",
    end: "bottom -30%",
    pin: true,
    scrub: true,
    anticipatePin: 0,
    markers: true, // 디버깅용 마커 표시
  })
});
