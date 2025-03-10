'use client'

import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";

const services = [
    {
        num: "01",
        title: "Web Development",
        description: "je maîtrise les technologies modernes telles que HTML, CSS, JavaScript ainsi que des frameworks comme React, Vue.js pour le front-end, et Node.js, PHP ou Django pour le back-end. Mon objectif est de créer des sites et applications web performants, ergonomiques et adaptés aux besoins des utilisateurs. Attentif(ve) aux bonnes pratiques de développement.",
        link: "/services/web-development"
    },
    {
        num: "02",
        title: "Mobile App Development",
        description: "Je possède une solide expertise en [Android/iOS/Flutter/React Native], acquise au cours de mes études et expériences professionnelles. Ma maîtrise de [langages et frameworks utilisés, ex. Swift, Kotlin, Dart, React Native] m’a permis de concevoir des applications performantes, ergonomiques et adaptées aux besoins des utilisateurs.",
        link: "/services/mobile-app-development"
    },
    {
        num: "03",
        title: "UI/UX Design",
        description: "je me spécialise en UI/UX Design afin de créer des expériences numériques intuitives, esthétiques et fonctionnelles. Ma maîtrise des outils tels que Figma, Adobe XD et Sketch, ainsi que ma compréhension des principes de design centré sur l’utilisateur, me permettent de concevoir des interfaces optimisées et engageantes.",
        link: ""
    },
    {
        num: "04",
        title: "Logo Design",
        description: "je me spécialise dans la création de logos uniques et impactants qui reflètent l’essence d’une marque. Grâce à ma maîtrise des outils tels qu’Adobe Illustrator et Photoshop, l’harmonie des formes et des couleurs, ainsi que l’équilibre entre simplicité et originalité. ",
        link: ""
    }
]

const Services = () => {
    return (
        <section className="min-h-[80vh] flex justify-center flex-col py-12 xl:py-0">
            <div className="container mx-auto">
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
                    }}>
                    {
                        services.map((service, index) => (
                            <div key={index} className="flex flex-1 flex-col gap-4 justify-start group">
                                {/* top */}
                                <div className="w-full flex justify-between items-center">
                                    <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                                        {service.num}
                                    </div>
                                    <Link 
                                    href={service.link}
                                    className="w-16 h-16 rounded-full bg-white/5 flex justify-center items-center group-hover:bg-accent transition-all duration-700 group-hover:-rotate-45"
                                    >
                                        <BsArrowDownRight className="text-3xl group-hover:text-slate-800 transition-all duration-500" />
                                    </Link>
                                </div>
                                {/* title */}
                                <h2 className="text-3xl font-bold leading-none group-hover:text-accent transition-all duration-500">
                                    {service.title}
                                </h2>
                                {/* description */}
                                <p>{service.description}</p>
                                {/* border */}
                                <div className="border-b border-white/20 w-full"></div>
                            </div>
                        ))
                    }
                </motion.div>
            </div>
        </section>
    );
}
export default Services;