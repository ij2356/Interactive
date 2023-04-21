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
    end: "bottom -50%",
    pin: true,
    scrub: true,
    anticipatePin: 0,
    markers: true, // 디버깅용 마커 표시
  });

  //section2
  const tl2 = gsap.timeline();
  tl2
    .from(".section2 .home__project-media", { xPercent: 20, yPercent: -20, opacity: 0, duration: 4, filter: "blur(12px)" })
    .to(".section2 .home__project-media", { xPercent: 0, yPercent: 0, opacity: 1, filter: "blur(0px)", duration: 9 })
    .to(".section2 .home__project-media", { xPercent: -20, yPercent: 20, filter: "blur(12px)", opacity: 0, duration: 4 });
  ScrollTrigger.create({
    animation: tl2,
    trigger: ".section2",
    start: "top 80",
    end: "bottom 30%",
    pin: true,
    pinSpacing: "margin",
    scrub: true,
    anticipatePin: 1,
    markers: true, // 디버깅용 마커 표시
  });

  //section2
  // const tl6 = gsap.timeline();
  // tl6.fromTo(".section6 .background li:nth-child(1)", { xPercent: "-100%" }, { xPercent: "0%" }); // in from left
  // tl6.fromTo(".section6 .background li:nth-child(2)", { xPercent: "-100%" }, { xPercent: "0%" }); // in from left
  // tl6.fromTo(".section6 .background li:nth-child(3)", { xPercent: "-100%" }, { xPercent: "0%" }); // in from left
  // tl6.fromTo(".section6 .background li:nth-child(4)", { xPercent: "-100%" }, { xPercent: "0%" }); // in from left
    
    
  // ScrollTrigger.create({
  //   animation: tl6,
  //   trigger: ".section6",
  //   start: "top top",
  //   end: "bottom 30%",
  //   pin: true,
  //   pinSpacing: "margin",
  //   scrub: true,
  //   anticipatePin: 0,
  //   markers: true, // 디버깅용 마커 표시
  // });
});
