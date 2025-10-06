"use client"
import React from 'react';

interface GridLinesProps {
  className?: string;
  opacity?: number;
}

export default function GridLines({ className = '', opacity = 0.1 }: GridLinesProps) {
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      {/* Vertical Lines */}
      <div className="absolute inset-0">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={`vertical-${i}`}
            className="absolute top-0 bottom-0 w-px bg-gray-300 dark:bg-gray-600"
            style={{
              left: `${(i + 1) * 8.33}%`,
              opacity: opacity
            }}
          />
        ))}
      </div>

      {/* Horizontal Lines */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={`horizontal-${i}`}
            className="absolute left-0 right-0 h-px bg-gray-300 dark:bg-gray-600"
            style={{
              top: `${i * 5}%`,
              opacity: opacity
            }}
          />
        ))}
      </div>

      {/* Corner Dots */}
      <div className="absolute inset-0">
        {Array.from({ length: 12 }).map((_, x) =>
          Array.from({ length: 20 }).map((_, y) => (
            <div
              key={`dot-${x}-${y}`}
              className="absolute w-1 h-1 bg-gray-400 dark:bg-gray-500 rounded-full"
              style={{
                left: `${(x + 1) * 8.33}%`,
                top: `${y * 5}%`,
                opacity: opacity * 0.5,
                transform: 'translate(-50%, -50%)'
              }}
            />
          ))
        )}
      </div>
    </div>
  );
}

// Simpler version with just vertical lines
export function VerticalGridLines({ className = '', opacity = 0.08 }: GridLinesProps) {
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={`vertical-${i}`}
          className="absolute top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-700"
          style={{
            left: `${(i + 1) * 16.66}%`,
            opacity: opacity
          }}
        />
      ))}
    </div>
  );
}

// Section divider line
export function SectionDivider({ className = '' }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-gray-200 dark:border-gray-700 opacity-20" />
      </div>
    </div>
  );
}