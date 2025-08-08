import React, { useState, useEffect } from 'react';

type TypewriterProps = {
  text: string;
  speed?: number;
};

const Typewriter: React.FC<TypewriterProps> = ({ text, speed = 100 }) => {
  const [typedText, setTypedText] = useState('');
  const [index, setIndex] = useState(0);

  // Reset state when text changes
  useEffect(() => {
    setTypedText('');
    setIndex(0);
  }, [text]);

  useEffect(() => {
    if (index < text.length) {
      const timeoutId = setTimeout(() => {
        setTypedText((prev) => prev + text.charAt(index));
        setIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeoutId);
    }
  }, [index, text, speed]);

  return <span>{typedText}</span>;
};

export default Typewriter;