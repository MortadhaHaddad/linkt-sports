import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import App from "./App.jsx";
import App8 from "./App8.jsx";

const routesOrder = ["/", "/contact"];

const getDirection = (current, previous) => {
  const currentIndex = routesOrder.indexOf(current);
  const prevIndex = routesOrder.indexOf(previous);
  return currentIndex >= prevIndex ? 1 : -1; // 1 = forward, -1 = backward
};

function AnimatedRoutes() {
  const location = useLocation();
  const prevLocation = useRef(location.pathname);
  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    if (isFirstRender) setIsFirstRender(false);
  }, []);

  const direction = getDirection(location.pathname, prevLocation.current);
  prevLocation.current = location.pathname;

  const variants = {
    initial: (dir) => ({
      opacity: 1,
      x: dir * 100,
    }),
    in: {
      opacity: 1,
      x: 0,
    },
    out: (dir) => ({
      opacity: 1,
      x: -dir * 100,
    }),
  };

  const transition = {
    type: "tween",
    ease: "easeInOut",
    duration: 0.3,
  };

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              custom={direction}
              initial={isFirstRender ? false : "initial"} // pas d'animation initiale au premier chargement
              animate="in"
              exit="out"
              variants={variants}
              transition={transition}
              style={{ position: "absolute", width: "100%" }}
            >
              <App />
            </motion.div>
          }
        />
        <Route
          path="/contact"
          element={
            <motion.div
              custom={direction}
              initial={isFirstRender ? false : "initial"}
              animate="in"
              exit="out"
              variants={variants}
              transition={transition}
              style={{ position: "absolute", width: "100%" }}
            >
              <App8 />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default function AppRoutes() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}
