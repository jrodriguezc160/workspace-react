import react, { useState, useEffect } from "react";

export default function ScrollHooks() {
  // useState
  const [scrollY, setScrollY] = useState(0);

  // useEffect
  useEffect(() => {
    console.log("Moviendo el scroll");

    const detectarScroll = () => setScrollY(window.pageYOffset);

    window.addEventListener("scroll", detectarScroll);

    return () => {
      window.removeEventListener("scroll", detectarScroll);
    };
  }, [scrollY]);

  useEffect(() => {
    console.log("Fase de montaje");
  }, []);

  useEffect(() => {
    console.log("Fase de actualización (useEffect)");
  });

  useEffect(() => {
    return () => {
      console.log("Fase de desmontaje");
    };
  });

  return (
    <>
      <h2>Hooks - useEffect y el ciclo de vida</h2>
      <p>Scroll Y del navegador = {scrollY} px</p>
    </>
  );
}
