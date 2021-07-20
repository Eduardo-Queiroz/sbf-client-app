import {ScreenType, getCurrentScreen} from '@sbf-providers/navigation';

export const expectRoute = (route: ScreenType) => {
  if (route != getCurrentScreen()) {
    console.log(
      `A navegação não foi para a tela correta(${route}), a tela final do fluxo era a ${getCurrentScreen()}`,
    );
    throw new Error(
      `A navegação não foi para a tela correta(${route}), a tela final do fluxo era a ${getCurrentScreen()}`,
    );
  }
};

export const expectBool = (
  bool: boolean,
  message = 'Comparação não esperada',
) => {
  if (!bool) {
    console.log(message);
    throw new Error(message);
  }
};

export const expectList = async (spec: any, listIdtrack: string[] = []) => {
  await listIdtrack.map(async a => await spec.findComponent(a));
};
