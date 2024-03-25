import React from 'react';
import propTypes from 'prop-types';
import TabStyle from '../../components/Tab';

const Tab = ({ tab, setTab }) => {
  let options = ['all', 'finished', 'unfinished'];

  const onTab = (e) => {
    setTab(e.target.id);
  };
  return <TabStyle options={options} onTab={onTab} tab={tab} />;
};

Tab.propTypes = {
  tab: propTypes.string,
  setTab: propTypes.func,
};

export default Tab;
