import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const PortalWrapper = ({ children, id }: {
  children: React.ReactNode;
  id: string;
}) => {
  const [portalElement, setPortalElement] = useState(null);

  useEffect(() => {
    let element = document.querySelector(`#${id}`);
    let isCreated = false;

    if (!element) {
      element = document.createElement('div');
      element.id = id;

      document.body.appendChild(element);
      isCreated = true;
      setPortalElement(element);
    }

    return () => {
      if (isCreated) {
        document.body.removeChild(element);
      }
    };
  }, [id]);

  if (!portalElement) return null;

  return createPortal(children, portalElement);
};

export default PortalWrapper;
