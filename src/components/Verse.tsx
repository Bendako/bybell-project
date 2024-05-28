import React, { useEffect, useState } from 'react';
import { fetchFirstVerse } from '../lib/api';
import Link from 'next/link';

interface VerseData {
  pk: number;
  translation: string;
  book: number;
  chapter: number;
  verse: number;
  text: string;
}

const Verse: React.FC = () => {
  const [verse, setVerse] = useState<VerseData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getVerse = async () => {
      try {
        const data = await fetchFirstVerse();
        setVerse(data);
      } catch (err) {
        setError('Failed to fetch the verse');
      } finally {
        setLoading(false);
      }
    };

    getVerse();
  }, []);

  if (loading) return <p className="text-center mt-4">Loading...</p>;
  if (error) return <p className="text-center mt-4 text-red-500">{error}</p>;

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-10 p-6">
      {/* <h1 className="text-2xl font-bold mb-2">First Verse of the Hebrew Bible</h1> */}
      {verse && (
        <Link href='/qpage' className="text-lg">{ verse.text }</Link>
      )}
    </div>
  );
};

export default Verse;
