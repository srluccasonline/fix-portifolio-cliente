import { HeroSection } from "./HeroSection";
import About from "./About";
import Technologie from "./Technologie";
import Projects from "./Projects";
import Contact from "./Contact";

import { useRouter } from 'next/router';
import { useEffect } from 'react';

export { HeroSection, About, Technologie, Projects, Contact };


const IndexPage = () => {
    const router = useRouter();
  
    useEffect(() => {
      router.push('/app/page');
    }, []);
  
    return null;
  };

  export default IndexPage;