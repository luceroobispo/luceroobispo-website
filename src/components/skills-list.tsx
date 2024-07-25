'use client';

import Image from 'next/image';
import { SetStateAction, useState } from 'react';

const skills = [
    { name: 'Flutter', image: '/images/flutter-icon.png', type: 'Frontend' },
    { name: 'Kotlin', image: '/images/kotlin-icon.png', type: 'Frontend' },
    { name: 'CSS', image: '/images/css-icon.png', type: 'Frontend' },
    { name: 'HTML', image: '/images/html-icon.png', type: 'Frontend' },
    { name: 'JavaScript', image: '/images/js-icon.png', type: 'Frontend' },
    { name: 'TypeScript', image: '/images/ts-icon.png', type: 'Frontend' },
    { name: 'Next.js', image: '/images/nextjs-icon.png', type: 'Frontend' },
    { name: 'Angular', image: '/images/angular-icon.png', type: 'Frontend' },
    { name: 'Vue', image: '/images/vue-icon.png', type: 'Frontend' },
    { name: 'React\nNative', image: '/images/reactnative-icon.png', type: 'Frontend' },
    { name: 'Three.js', image: '/images/threejs-icon.png', type: 'Frontend' },
    { name: 'C++', image: '/images/cplusplus-icon.png', type: 'Backend' },
    { name: 'Python', image: '/images/python-icon.png', type: 'Backend' },
    { name: 'C#', image: '/images/csharp-icon.png', type: 'Backend' },
    { name: 'Java', image: '/images/java-icon.png', type: 'Backend' },
    { name: '.NET', image: '/images/net-icon.png', type: 'Backend' },
    { name: 'Spring\nBoot', image: '/images/springboot-icon.png', type: 'Backend' },
    { name: 'NodeJS', image: '/images/nodejs-icon.png', type: 'Backend' },
    { name: 'MySQL', image: '/images/mysql-icon.png', type: 'Database' },
    { name: 'PostgreSQL', image: '/images/postgresql-icon.png', type: 'Database' },
    { name: 'MongoDB', image: '/images/mongodb-icon.png', type: 'Database' },
    { name: 'Teradata', image: '/images/teradata-icon.png', type: 'Database' },
    { name: 'Oracle', image: '/images/oracle-icon.png', type: 'Database' },
    { name: 'Visual\nStudio', image: '/images/vstudio-icon.png', type: 'Tools' },
    { name: 'Visual\nStudio Code', image: '/images/vstudiocode-icon.png', type: 'Tools' },
    { name: 'SQL Server\nIntegration\nServices', image: '/images/ssis-icon.png', type: 'Tools' },
    { name: 'Selenium', image: '/images/selenium-icon.png', type: 'Tools' },
    { name: 'Webstorm', image: '/images/webstorm-icon.png', type: 'Tools' },
    { name: 'Rider', image: '/images/rider-icon.png', type: 'Tools' },
    { name: 'IntelliJ Idea', image: '/images/intellijidea-icon.png', type: 'Tools' },
    { name: 'Datagrip', image: '/images/datagrip-icon.png', type: 'Tools' },
    { name: 'Postman', image: '/images/postman-icon.png', type: 'Tools' },
    { name: 'NUnit', image: '/images/nunit-icon.png', type: 'Tools' },
    { name: 'Mockito', image: '/images/mockito-icon.png', type: 'Tools' },
    { name: 'Lighthouse', image: '/images/lighthouse-icon.png', type: 'Tools' },
    { name: 'Notion', image: '/images/notion-icon.png', type: 'Tools' },
    { name: 'Android\nStudio', image: '/images/androidstudio-icon.png', type: 'Tools' },
    { name: 'DBeaver', image: '/images/dbeaver-icon.png', type: 'Tools' },
    { name: 'Figma', image: '/images/figma-icon.png', type: 'Tools' },
    { name: 'Github', image: '/images/githubskill-icon.png', type: 'Tools' },
    { name: 'Git', image: '/images/git-icon.png', type: 'Tools' },
];

const MySkillsSection = () => {
    const [selectedType, setSelectedType] = useState('All');

    const filterSkills = (type: SetStateAction<string>) => {
        setSelectedType(type);
    };

    const filteredSkills = selectedType === 'All' ? skills : skills.filter(skill => skill.type === selectedType);

    return (
        <section className="bg-[#1B1B1B] font-['Open_Sans'] py-16 px-10">
            <div className="flex justify-center mb-16">
                <h1 className="text-[30px] font-bold bg-[#2A2A2A] border-4 border-pink_dark2 text-pink_dark2 rounded-md py-3 px-10 inline-block">
                    MY SKILLS
                </h1>
            </div>
            <div className="flex flex-wrap justify-center mb-10">
                {['All', 'Frontend', 'Backend', 'Database', 'Tools'].map((type) => (
                    <button
                        key={type}
                        className="bg-[#2A2A2A] text-white hover:text-[#2A2A2A] hover:bg-white px-4 py-2 mb-5 ml-5 rounded-md border-[#F16497] border-2 flex-1 text-center"
                        onClick={() => filterSkills(type)}
                    >
                        {type}
                    </button>
                ))}
            </div>
            <div className="flex flex-wrap justify-center">
                {filteredSkills.map((skill) => (
                    <div key={skill.name} className="m-2">
                        <Image
                            src={skill.image}
                            width={100}
                            height={100}
                            alt={skill.name}
                        />
                        <p className="text-white text-center mt-2 whitespace-pre-line">{skill.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default MySkillsSection;
