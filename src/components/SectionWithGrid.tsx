"use client"
import React from 'react';
import GridLines, { VerticalGridLines, SectionDivider } from './GridLines';

interface SectionWithGridProps {
  children: React.ReactNode;
  className?: string;
  gridType?: 'full' | 'vertical' | 'none';
  showDivider?: boolean;
}

export default function SectionWithGrid({ 
  children, 
  className = '', 
  gridType = 'vertical',
  showDivider = true 
}: SectionWithGridProps) {
  return (
    <section className={`relative ${className}`}>
      {/* Grid Lines */}
      {gridType === 'full' && <GridLines opacity={0.06} />}
      {gridType === 'vertical' && <VerticalGridLines opacity={0.08} />}
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Section Divider */}
      {showDivider && (
        <SectionDivider className="absolute bottom-0 left-0 right-0 h-px" />
      )}
    </section>
  );
}

// Example usage components
export function HeroSection({ children }: { children: React.ReactNode }) {
  return (
    <SectionWithGrid 
      className="min-h-screen bg-white dark:bg-gray-900"
      gridType="vertical"
      showDivider={true}
    >
      {children}
    </SectionWithGrid>
  );
}

export function ContentSection({ children }: { children: React.ReactNode }) {
  return (
    <SectionWithGrid 
      className="py-20 bg-gray-50 dark:bg-gray-800"
      gridType="vertical"
      showDivider={true}
    >
      {children}
    </SectionWithGrid>
  );
}

export function FeatureSection({ children }: { children: React.ReactNode }) {
  return (
    <SectionWithGrid 
      className="py-16 bg-white dark:bg-gray-900"
      gridType="full"
      showDivider={false}
    >
      {children}
    </SectionWithGrid>
  );
}