import React, { useEffect } from 'react';
import { BackHandler } from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {useComponent, ComponentsType} from '@sbf-providers/components';
import { Actions } from '../../store/repository';
import {CatalogSearch} from '../../containers/CatalogSearch';
import {EmptySearch} from '../../containers/EmptySearch';
import { State, PENDING_TYPE } from '../../../types';

const {cancelSearch, getSearchProducts} = Actions;

export const Search = () => {
  const dispatch = useDispatch();
  const Loading = useComponent(ComponentsType.LOADING);
  const hasSearcheableProducts = useSelector<State, boolean>(
    ({catalog}) => !!catalog.visibleSearchProducts?.length,
  );
  const pending = useSelector<State, boolean>(
    ({catalog}) => !!catalog.pending[PENDING_TYPE.SEARCH],
  );

  useEffect(() => {
    dispatch(getSearchProducts());
  }, []);
  
  const handleBackButton = () => {
    dispatch(cancelSearch());
    return true;
  };

  useEffect(() => {
      BackHandler.addEventListener('hardwareBackPress', handleBackButton);
    

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
    };
  });

  if(pending) return <Loading />;
  else if (hasSearcheableProducts) return <CatalogSearch />;
  else return <EmptySearch />;
};
