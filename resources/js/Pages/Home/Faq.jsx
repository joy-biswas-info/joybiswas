import Container from "@/Components/Container";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const Faq = () => {
    const [activeSection, setActiveSection] = useState(null);
    const sections = [
        {
            title: "Section 1",
            content: "This is the content for section 1.",
        },
        {
            title: "Section 2",
            content: "This is the content for section 2.",
        },
        {
            title: "Section 3",
            content: "This is the content for section 3.",
        },
    ];
    const toggleSection = (index) => {
        if (index === activeSection) {
            // Clicking on an open section should close it
            setActiveSection(null);
        } else {
            // Clicking on a closed section should open it
            setActiveSection(index);
        }
    };

    return (
        <Container>
            <div className="wraper md:flex my-24 gap-8">
                <div className="w-1/2">
                    <h3 className="font-bold text-xl text-primary">
                        Working to make difference
                    </h3>
                    <h2 className="font-bold text-4xl">
                        Real Passion to Create Amazing Things
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Hic, ea. Repellendus ullam saepe repellat, quae quos
                        consectetur! Doloribus, deserunt nisi.
                    </p>
                </div>
                <div>
                    <div>
                        <div className="accordion">
                            {sections.map((section, index) => (
                                <div key={index} className="accordion-section first:my-0 my-8">
                                    <div
                                        className={`accordion-header ${
                                            activeSection === index
                                                ? "active"
                                                : ""
                                        } flex items-center gap-2 cursor-pointer`}
                                        onClick={() => toggleSection(index)}
                                    >
                                        <FontAwesomeIcon
                                            icon={
                                                activeSection === index
                                                    ? faMinus
                                                    : faPlus
                                            }
                                            className={`icon font-bold transition transform ${
                                                activeSection === index
                                                    ? "rotate-180 transition-all"
                                                    : "translate-x-1"
                                            }`}
                                        />
                                        <h3 className="text-2xl font-bold">
                                            {section.title}
                                        </h3>
                                    </div>
                                    {activeSection === index && (
                                        <div
                                            className={`accordion-content ${
                                                activeSection === index
                                                    ? "active"
                                                    : ""
                                            }`}
                                        >
                                            {section.content}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Faq;
