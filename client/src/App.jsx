import useWindowSize from "./hooks/useWindowSize";
import { fetchProjects, fetchData } from "./client";
import { AnimatePresence } from "framer-motion";
import { motion as m } from "framer-motion";

import ProjectsSection from "./components/ProjectsSection";
import InfoSection from "./components/InfoSection";
import MenuButton from "./components/mobileMenu/Menubutton";
import MobileProjectSection from "./components/mobileMenu/MobileProjectSection";
import ContactMenu from "./components/ContactMenu";
import LoadingScreen from "./components/LoadingScreen";

import { useState, useEffect } from "react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [contactMenuOpen, setContactMenuOpen] = useState(false);
  const { width } = useWindowSize();
  const [info, setInfo] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetchData("en")
      .then((res) => {
        setProjects(res.projects);
        setInfo(res.info);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);
  // TEST
  if (loading) {
    return <main className="main bg-black"></main>;
  }
  // 66
  return (
    <m.main
      initial={{ opacity: 0, y: -200 }}
      animate={{ opacity: 1, y: 0 }}
      className="main bg-black"
    >
      <InfoSection setContactMenuOpen={setContactMenuOpen} />
      <ContactMenu
        setContactMenuOpen={setContactMenuOpen}
        contactMenuOpen={contactMenuOpen}
      />

      <MenuButton setIsMenuOpen={setIsMenuOpen} isModalOpen={isModalOpen} />

      {width > 768 && (
        <ProjectsSection
          projectsArray={projects}
          setIsModalOpen={setIsModalOpen}
        />
      )}

      {width < 768 && (
        <MobileProjectSection
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          projectsArray={projects}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </m.main>
  );
}

export default App;
