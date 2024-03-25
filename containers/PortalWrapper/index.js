import { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import { createPortal } from 'react-dom';

const PortalWrapper = ({ children, id }) => {
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

PortalWrapper.propTypes = {
  children: propTypes.any,
  id: propTypes.string,
};

export default PortalWrapper;
