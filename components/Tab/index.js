import React from 'react';
import propTypes from 'prop-types';
import { TabButton, TabButtons } from './styled';

const TabStyle = ({ options, onTab, tab }) => {
  return (
    <TabButtons>
      {options.map((opt) => {
        const isActive = tab === opt;
        return (
          <TabButton isActive={isActive} key={opt} id={opt} onClick={onTab}>
            {opt}
          </TabButton>
        );
      })}
    </TabButtons>
  );
};

TabStyle.propTypes = {
  options: propTypes.array,
  onTab: propTypes.func,
  tab: propTypes.string,
};

export default TabStyle;
