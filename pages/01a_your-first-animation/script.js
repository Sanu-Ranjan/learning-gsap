import gsap from "gsap";

gsap.to(".card", {
  duration: 3,
  opacity: 1,
  scale: 1,
  onComplete: () => {
    gsap.to(".card", {
      y: -20,
      duration: 1,
      repeat: -1,
      yoyo: true,
    });
    gsap.to(".card", {
      boxShadow: "0 0 80px rgba(29, 209, 161, 0.6)",
      repeat: -1,
      yoyo: true,
      duration: 1,
    });
  },
});
