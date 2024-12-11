import { useEffect, useState } from "react";
import { animate } from "framer-motion";
import PropTypes from "prop-types";

interface AnimatedNumbersProps {
  value: number;
}

const AnimatedNumbers = ({ value }: AnimatedNumbersProps) => {
  const [displayValue, setDisplayValue] = useState<string>("0");

  useEffect(() => {
    const controls = animate(0, value, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (latest) => {
        const formatted = new Intl.NumberFormat("ru-RU").format(
          Math.floor(latest)
        );
        setDisplayValue(formatted);
      },
    });

    return controls.stop;
  }, [value]);

  return <span>{displayValue}</span>;
};

AnimatedNumbers.propTypes = {
  value: PropTypes.number.isRequired,
};

export default AnimatedNumbers;
