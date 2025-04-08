
import React, { useState, useEffect } from 'react';

interface TypewriterTextProps {
  staticPrefix: string;
  phrases: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayAfterPhrase?: number;
  className?: string;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({
  staticPrefix,
  phrases,
  typingSpeed = 100,
  deletingSpeed = 70,
  delayAfterPhrase = 2000,
  className = ''
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);

  // Handle the typing animation
  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];

    if (isTyping) {
      // Typing phase
      if (displayedText.length < currentPhrase.length) {
        const timeoutId = setTimeout(() => {
          setDisplayedText(currentPhrase.substring(0, displayedText.length + 1));
        }, typingSpeed);
        return () => clearTimeout(timeoutId);
      } else {
        // Finished typing, wait before deleting
        const timeoutId = setTimeout(() => {
          setIsTyping(false);
        }, delayAfterPhrase);
        return () => clearTimeout(timeoutId);
      }
    } else {
      // Deleting phase
      if (displayedText.length > 0) {
        const timeoutId = setTimeout(() => {
          setDisplayedText(displayedText.substring(0, displayedText.length - 1));
        }, deletingSpeed);
        return () => clearTimeout(timeoutId);
      } else {
        // Move to next phrase
        setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        setIsTyping(true);
      }
    }
  }, [displayedText, isTyping, currentPhraseIndex, phrases, typingSpeed, deletingSpeed, delayAfterPhrase]);

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className={className}>
      <span className="font-bold">{staticPrefix}</span>
      <span className="text-primary font-medium ml-2 relative">
        {displayedText}
        <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100 ml-0.5`}>|</span>
        <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary/30"></span>
      </span>
    </div>
  );
};

export default TypewriterText;
