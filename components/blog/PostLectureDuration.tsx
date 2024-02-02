"use client";
import { useEffect, useState } from "react";
import { FaClock } from "react-icons/fa";

function countWords(text: string) {
  return text.split(/\s+/).filter(function (word) {
    return word.length > 0;
  }).length;
}

function calculateDuration(wordCount: any, wordsPerMinute: any) {
  const minutes = wordCount / wordsPerMinute;
  return Math.ceil(minutes); // Round up to the nearest minute
}

const PostLectureDuration = ({ content }: { content: string }) => {
  const wordsPerMinute = 200; // Adjust this based on your assumptions
  const [wordCount, setWordCount] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    // Count words when content changes
    setWordCount(countWords(content));
  }, [content]);

  useEffect(() => {
    // Calculate duration when word count changes
    setDuration(calculateDuration(wordCount, wordsPerMinute));
  }, [wordCount]);

  return (
    <p className="flex items-center gap-2 justify-start md:justify-center">
      <FaClock /> {duration} {duration > 1 ? "minutes" : "minute"}
    </p>
  );
};

export default PostLectureDuration;
