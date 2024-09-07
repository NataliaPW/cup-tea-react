import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export const gsapSection = () => {
   console.log('1=',1);
   const tl = gsap.timeline();
tl.fromTo('.gsap-section-2', {x: '-100%', y: '+100%'}, {y: 0})
tl.fromTo('.gsap-section-3', {x: '-100%'}, {x: '-200%'})
tl.fromTo('.gsap-section-4', {x: '-400%'}, {x: '-300%'})

const main = document.querySelector('.main');
ScrollTrigger.create({
	animation: tl,
	trigger: '.gsap-container',
	start: 'top top',
	end: () => main.offsetWidth / 2,
	scrub: true,
	pin: true
});
};