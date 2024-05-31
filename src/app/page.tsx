"use client"

import { useState, useEffect } from 'react';
import axios from 'axios';
import Verse from '@/components/Verse';





export default function Home() {
  return (
    <div className="container mx-auto h-auto p-4">
      <Verse />
    </div>
  );
}
