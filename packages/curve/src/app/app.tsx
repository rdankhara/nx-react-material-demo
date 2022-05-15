import React, { useCallback } from 'react';
import styled from '@emotion/styled';
import NxWelcome from './nx-welcome';
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil';
import { AppAtom, AppState, createDefaultControlPoint, createDefaultCreateControlPoint, Tile } from './appState';
import { Header } from './header';
import { ControlPointList } from './controlPointList';
import { CreateControlPoint } from './createCointrolPoint';

import 'ag-grid-community/dist/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/dist/styles/ag-theme-alpine-dark.css';
import { Grid } from '@mui/material'; // Optional theme CSS

const StyledApp = styled.div`
  background-color: #15021a;
  min-height: 100vh;
`;

export interface AppProps {
  title: string;
  apps: Tile[];
  onCloseHandler: (app: Tile) => void;
  onAddControlPoint: () => void;
  onAddCreateControlPoint: () => void;
}

export const AppContainer = () => {
  const [appState, setState] =  useRecoilState(AppAtom)
  const onCloseHandler = useCallback((app: Tile) => setState((prev) => ({...prev, apps: prev.apps.filter(x => x !==app)})), []);
  const onAddControlPoint = useCallback(() => {
    setState((prev) => {
      const app = createDefaultControlPoint();
      console.log('creating curve', app);
      const newState =  {
        ...prev,
        apps: [app]
      };
      return newState;
    });
  },[]);

  const onAddCreateControlPoint = useCallback(() => {
    setState((prev) => {
      const app = createDefaultCreateControlPoint();
      console.log('creating app', app);
      const newState = {
        ...prev,
        apps: [app]
      };
      console.log('oldState', prev);
      console.log('newState', newState);
      return newState;
    });
  }, []);

  return (
    <App apps={appState.apps} title={'MAVERIC'} onCloseHandler={onCloseHandler}
         onAddControlPoint={onAddControlPoint}
         onAddCreateControlPoint={onAddCreateControlPoint}
    />
  )
}

export const App: React.FC<AppProps> = (props) =>  {
  const {title, apps, onCloseHandler, onAddControlPoint, onAddCreateControlPoint} = props;

  return (
      <StyledApp>
        <Header title={title} onAddControlPoint={onAddControlPoint}  onAddCreateControlPoint={onAddCreateControlPoint}/>
        <Grid>
          {apps?.map(x => {
            const {title, ...rest} = x;
            switch (x.title) {
              case 'Control Point List':
                  return <ControlPointList title={'View Control Points'} {...rest} onCloseHandler={() => onCloseHandler(x)}/>
              case 'CreateControlPoint':
                  return <CreateControlPoint title={'Create Control Point'} onCloseHandler={() => onCloseHandler(x)}/>
              default:
                  return null;
            }
          })}
        </Grid>
      </StyledApp>
  );
}
