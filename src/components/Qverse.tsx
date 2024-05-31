"use client"

import { fetchFirstVerse } from '@/lib/api';
import React, { useEffect, useState } from 'react'

interface VerseData {
    pk: number;
    translation: string;
    book: number;
    chapter: number;
    verse: number;
    text: string;
  }

export default function Qverse() {
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
    <div>{ verse.text }</div>
  )
}