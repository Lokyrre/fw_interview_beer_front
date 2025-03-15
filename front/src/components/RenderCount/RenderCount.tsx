import React, { useRef } from 'react';

export const RenderCount: React.FC = () => {
  const renderCount = useRef(0);

  renderCount.current += 1;

  return (
    <div style={{ 
      padding: '4px 8px',
      fontSize: '12px',
      color: '#666',
      background: '#f5f5f5',
      borderRadius: '4px',
      display: 'inline-block'
    }}>
      Le composant parent a été rendu : {renderCount.current} fois
    </div>
  );
};
