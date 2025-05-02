import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function HomeSection() {
    const heroRef = useRef(null);
    const textRef = useRef(null);
    const buttonsRef = useRef([]);
    const particlesRef = useRef([]);
    const [isMobile, setIsMobile] = useState(false);

    const colors = ['#FFFFFF', '#D1D5DB', '#FFFACD', '#C8FACC'];// customize your palette

    const particles = Array(100).fill().map((_, i) => {
        const particleRef = useRef(null);
        particlesRef.current[i] = particleRef;
        return (
            <div
                key={i}
                ref={particleRef}
                className="absolute rounded-full pointer-events-none  "
                style={{
                    width: `${Math.random() * 6 + 2}px`,
                    height: `${Math.random() * 6 + 2}px`,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    backgroundColor: colors[Math.floor(Math.random() * colors.length)],
                    opacity: Math.random() * 0.3 + 0.1,
                }}
            />
        );
    });

    useEffect(() => {
        const chars = textRef.current?.querySelectorAll('span.char');
        if (chars) {
            gsap.fromTo(
                chars,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: 'back.out(1.7)',
                    stagger: 0.03,
                    scrollTrigger: {
                        trigger: heroRef.current,
                        start: 'top center',
                    },
                }
            );
        }

        particlesRef.current.forEach((particle) => {
            if (particle?.current) {
                const animate = () => {
                    gsap.to(particle.current, {
                        x: () => `${(Math.random() - 0.5) * 300}px`,
                        y: () => `${(Math.random() - 0.5) * 300}px`,
                        scale: () => Math.random() * 1.5 + 0.5,
                        rotation: () => Math.random() * 360,
                        opacity: () => Math.random() * 0.4 + 0.2,
                        backgroundColor: colors[Math.floor(Math.random() * colors.length)],
                        duration: Math.random() * 6 + 4,
                        ease: 'sine.inOut',
                        onComplete: animate,
                    });
                };
                animate();
            }
        });
    }, []);

    // Check screen size on mount
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1268);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const splitText = (text) => {
        return text.split('').map((char, i) => (
            <span key={i} className="char inline-block">
                {char === ' ' ? '\u00A0' : char}
            </span>
        ));
    };
    return (
        <div className="relative h-screen overflow-hidden" ref={heroRef}>
            {/* Background Gradient Layer */}
            {/* <div className="absolute inset-0 bg-gradient-to-br from-[#002e1c] via-[#038a56] to-[#04e68f] opacity-20" /> */}

            {/* Particles */}
            <div className="absolute inset-0 z-10 mt-10 ">{particles}</div>

            {/* Hero Content */}
            <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
                <div className="space-y-8 max-w-6xl">
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight " ref={textRef}>
                        {isMobile
                            ? "We Build Websites That Move "
                            : splitText("We Build Websites That Move ")}
                        <span className="text-[#03A791]">
                            {isMobile ? "Literally." : splitText("Literally.")}
                        </span>                        </h1>
                    <p className="max-w-2xl mx-auto text-xl md:text-2xl text-gray-300">
                        We design animated, high-impact sites that turn visitors into believers and brands into movements.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12"  >
                        <button
                            ref={el => buttonsRef.current[0] = el}
                            className="px-8 py-4 bg-[#03A791] text-white font-bold rounded-full hover:bg-[#1f3629] transition-all duration-300 transform hover:scale-105 text-lg"
                        >
                            See Our Work
                        </button>
                        <button
                            ref={el => buttonsRef.current[1] = el}
                            className="px-8 py-4 border-2 border-[#03A791] text-white font-bold rounded-full hover:bg-[#1f3629] transition-all duration-300 transform hover:scale-105 text-lg"
                        >
                            Start Project
                        </button>
                    </div>
                    <div className="flex items-center justify-center mt-10 gap-3 text-white">

                        {/* Avatars */}
                        <div className="flex -space-x-4">
                            <img className="w-10 h-10 rounded-full border-2 border-black" src="https://randomuser.me/api/portraits/men/1.jpg" alt="User1" />
                            <img className="w-10 h-10 rounded-full border-2 border-black" src="https://randomuser.me/api/portraits/women/2.jpg" alt="User2" />
                            <img className="w-10 h-10 rounded-full border-2 border-black" src="https://randomuser.me/api/portraits/men/3.jpg" alt="User3" />
                            <img className="w-10 h-10 rounded-full border-2 border-black" src="https://randomuser.me/api/portraits/women/4.jpg" alt="User4" />
                            <img className="w-10 h-10 rounded-full border-2 border-black" src="https://randomuser.me/api/portraits/men/5.jpg" alt="User5" />
                        </div>

                        {/* Star rating and caption */}
                        <div className="ml-4">
                            <div className="flex items-center">
                                <span className="text-yellow-400 text-lg">★★★★★</span>
                            </div>
                            <p className="text-sm text-gray-300">Loved by Clients</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}
