"use client"

import { createContext, useContext, useState } from 'react'

interface ResizeContextType {
  setPanelSize: (size: number) => void;
  currentSize: number;
}

const ResizeContext = createContext<ResizeContextType | undefined>(undefined)

export function ResizeProvider({ children }: { children: React.ReactNode }) {
  const [currentSize, setCurrentSize] = useState(20)

  const setPanelSize = (size: number) => {
    setCurrentSize(size)
  }

  return (
    <ResizeContext.Provider value={{ setPanelSize, currentSize }}>
      {children}
    </ResizeContext.Provider>
  )
}

export function useResize() {
  const context = useContext(ResizeContext)
  if (context === undefined) {
    throw new Error('useResize must be used within a ResizeProvider')
  }
  return context
}