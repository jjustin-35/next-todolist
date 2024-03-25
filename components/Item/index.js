import React, { useEffect, useRef, useState } from 'react';
import propTypes from 'prop-types';
import { ItemWrapper, Text, Option, ContentWrapper, EditInput } from './styled';
import Icon from '../Icon';

const ItemStyle = ({ onCheck, onDelete, onEditFinished, todo }) => {
  const { memo, isFinished } = todo;
  const editRef = useRef();
  const itemRef = useRef();

  const [isEdit, setIsEdit] = useState(false);
  const [isShow, setIsShow] = useState(true);

  useEffect(() => {
    if (!isShow) {
      const item = itemRef.current;
      item.addEventListener('animationend', () => {
        onDelete();
      });

      return () =>
        item.removeEventListener('animationend', () => {
          onDelete();
        });
    }
  }, [isShow]);

  const onEdit = () => {
    setIsEdit(!isEdit);
  };

  return (
    <ItemWrapper isShow={isShow} ref={itemRef}>
      <ContentWrapper isEdit={!isEdit}>
        <input type="checkbox" defaultChecked={isFinished} onClick={onCheck} />
        <Text isFinished={isFinished}>{memo}</Text>
        <Option onClick={onEdit}>
          <Icon>edit</Icon>
        </Option>
        <Option onClick={() => setIsShow(false)}>
          <Icon>delete</Icon>
        </Option>
      </ContentWrapper>
      <ContentWrapper isEdit={isEdit}>
        <EditInput preValue={memo} ref={editRef} />
        <Option
          onClick={() => {
            setIsEdit(!isEdit);
            onEditFinished(editRef.current.value);
          }}
        >
          <Icon>done</Icon>
        </Option>
      </ContentWrapper>
    </ItemWrapper>
  );
};

ItemStyle.propTypes = {
  onCheck: propTypes.func,
  onEditFinished: propTypes.func,
  onDelete: propTypes.func,
  todo: propTypes.object,
};

export default ItemStyle;
