import {expectRoute, DELAY, clearState} from '@sbf-core/util';
import {ScreenType} from '@sbf-providers/navigation';
import {track} from '@sbf-providers/track';

const {touchableTrack, textTrack} = track;

export default (spec: any) => {
  spec.describe('E2E - Cart', () => {
    spec.beforeEach(clearState);
    spec.it(
      'it should click the header cart button and check if are empty and click to return',
      async () => {
        await spec.press(touchableTrack.Cart.trackGoToDetails);
        await spec.pause(DELAY.NORMAL);
        expectRoute(ScreenType.CART);
        await spec.press(touchableTrack.Cart.trackEmpty);
        await spec.pause(DELAY.NORMAL);
        expectRoute(ScreenType.HOME);
      },
    );
    spec.it(
      'it should verify if add product and verify badge count',
      async () => {
        await spec.press(
          touchableTrack.Catalog.trackAddProduct(
            '34f7d111-f042-4a53-8dbb-9c64495a518e',
          ),
        );
        await spec.pause(DELAY.EASY);
        await spec.containsText(textTrack.Cart.trackItemCount, '1');
      },
    );
    spec.it(
      'it should verify if removing quantity product make cart empty',
      async () => {
        await spec.pause(DELAY.EASY);
        await spec.press(
          touchableTrack.Catalog.trackAddProduct(
            '34f7d111-f042-4a53-8dbb-9c64495a518e',
          ),
        );
        await spec.pause(DELAY.EASY);
        await spec.containsText(textTrack.Cart.trackItemCount, '1');
        await spec.press(touchableTrack.Cart.trackGoToDetails);
        await spec.pause(DELAY.NORMAL);

        await spec.containsText(textTrack.Cart.trackSubtotal, 'R$ 687,76');
        await spec.containsText(textTrack.Cart.trackDiscont, 'R$ 120,93');
        await spec.containsText(textTrack.Cart.trackTotal, 'R$ 566,83');
        expectRoute(ScreenType.CART);
        await spec.press(
          touchableTrack.Cart.trackQuantityMinus(
            '34f7d111-f042-4a53-8dbb-9c64495a518e',
          ),
        );

        await spec.press(touchableTrack.Cart.trackEmpty);
        await spec.pause(DELAY.EASY);
        expectRoute(ScreenType.HOME);
      },
    );
    spec.it(
      'it should verify if removing by deleting product make cart empty',
      async () => {
        await spec.press(
          touchableTrack.Catalog.trackAddProduct(
            '34f7d111-f042-4a53-8dbb-9c64495a518e',
          ),
        );
        await spec.pause(DELAY.EASY);
        await spec.containsText(textTrack.Cart.trackItemCount, '1');
        await spec.press(touchableTrack.Cart.trackGoToDetails);
        await spec.pause(DELAY.EASY);
        expectRoute(ScreenType.CART);
        await spec.containsText(textTrack.Cart.trackSubtotal, 'R$ 687,76');
        await spec.containsText(textTrack.Cart.trackDiscont, 'R$ 120,93');
        await spec.containsText(textTrack.Cart.trackTotal, 'R$ 566,83');
        await spec.press(
          touchableTrack.Cart.trackDelete(
            '34f7d111-f042-4a53-8dbb-9c64495a518e',
          ),
        );

        await spec.press(touchableTrack.Cart.trackEmpty);
        await spec.pause(DELAY.EASY);
        expectRoute(ScreenType.HOME);
      },
    );
    spec.it(
      'it should verify if add more quantity product change badge and value',
      async () => {
        await spec.press(
          touchableTrack.Catalog.trackAddProduct(
            '34f7d111-f042-4a53-8dbb-9c64495a518e',
          ),
        );
        await spec.pause(DELAY.EASY);
        await spec.containsText(textTrack.Cart.trackItemCount, '1');
        await spec.press(touchableTrack.Cart.trackGoToDetails);
        await spec.pause(DELAY.EASY);
        await spec.containsText(textTrack.Cart.trackSubtotal, 'R$ 687,76');
        await spec.containsText(textTrack.Cart.trackDiscont, 'R$ 120,93');
        await spec.containsText(textTrack.Cart.trackTotal, 'R$ 566,83');
        await spec.pause(DELAY.EASY);
        expectRoute(ScreenType.CART);
        await spec.press(
          touchableTrack.Cart.trackQuantityPlus(
            '34f7d111-f042-4a53-8dbb-9c64495a518e',
          ),
        );
        await spec.pause(DELAY.EASY);
        await spec.containsText(textTrack.Cart.trackItemCount, '2');
        await spec.containsText(textTrack.Cart.trackSubtotal, 'R$ 1375,52');
        await spec.containsText(textTrack.Cart.trackDiscont, 'R$ 241,86');
        await spec.containsText(textTrack.Cart.trackTotal, 'R$ 1133,66');
      },
    );

    spec.it(
      'it should verify if add multiple products and delete one product dont make cart empty',
      async () => {
        await spec.press(
          touchableTrack.Catalog.trackAddProduct(
            '34f7d111-f042-4a53-8dbb-9c64495a518e',
          ),
        );
        await spec.press(
          touchableTrack.Catalog.trackAddProduct(
            'cde6dc63-3c11-43e9-a41f-beb7bc553d7a',
          ),
        );
        await spec.pause(DELAY.EASY);
        await spec.containsText(textTrack.Cart.trackItemCount, '2');
        await spec.press(touchableTrack.Cart.trackGoToDetails);
        await spec.pause(DELAY.EASY);
        await spec.containsText(textTrack.Cart.trackSubtotal, 'R$ 2150,73');
        await spec.containsText(textTrack.Cart.trackDiscont, 'R$ 1554,83');
        await spec.containsText(textTrack.Cart.trackTotal, 'R$ 595,90');
        await spec.pause(DELAY.EASY);
        expectRoute(ScreenType.CART);
        await spec.press(
          touchableTrack.Cart.trackQuantityPlus(
            'cde6dc63-3c11-43e9-a41f-beb7bc553d7a',
          ),
        );
        await spec.containsText(textTrack.Cart.trackItemCount, '3');
        await spec.containsText(textTrack.Cart.trackSubtotal, 'R$ 3613,70');
        await spec.containsText(textTrack.Cart.trackDiscont, 'R$ 2988,73');
        await spec.containsText(textTrack.Cart.trackTotal, 'R$ 624,97');
        await spec.press(
          touchableTrack.Cart.trackDelete(
            'cde6dc63-3c11-43e9-a41f-beb7bc553d7a',
          ),
        );
        await spec.containsText(textTrack.Cart.trackItemCount, '1');
        await spec.containsText(textTrack.Cart.trackSubtotal, 'R$ 687,76');
        await spec.containsText(textTrack.Cart.trackDiscont, 'R$ 120,93');
        await spec.containsText(textTrack.Cart.trackTotal, 'R$ 566,83');
      },
    );

    spec.it('it should verify if has a success checkout', async () => {
      await spec.press(
        touchableTrack.Catalog.trackAddProduct(
          '34f7d111-f042-4a53-8dbb-9c64495a518e',
        ),
      );
      await spec.press(touchableTrack.Cart.trackGoToDetails);
      await spec.pause(DELAY.EASY);
      expectRoute(ScreenType.CART);
      await spec.press(touchableTrack.Cart.trackCompleteOrder);
      await spec.containsText(
        textTrack.Swal.trackText,
        'Pedido efetuado com sucesso',
      );
      await spec.press(touchableTrack.Swal.trackConfirm);
      await spec.press(touchableTrack.Cart.trackEmpty);
      await spec.pause(DELAY.NORMAL);
      expectRoute(ScreenType.HOME);
    });

    spec.it('it should verify if has a error checkout', async () => {
      await spec.press(
        touchableTrack.Catalog.trackAddProduct(
          '34f7d111-f042-4a53-8dbb-9c64495a518e',
        ),
      );
      await spec.press(
        touchableTrack.Catalog.trackAddProduct(
          'cde6dc63-3c11-43e9-a41f-beb7bc553d7a',
        ),
      );
      await spec.press(touchableTrack.Cart.trackGoToDetails);
      await spec.pause(DELAY.EASY);
      expectRoute(ScreenType.CART);
      await spec.press(touchableTrack.Cart.trackCompleteOrder);
      await spec.containsText(
        textTrack.Swal.trackText,
        'Ocorreram erros internos por favor tente mais tarde',
      );
      await spec.press(touchableTrack.Swal.trackConfirm);
      await spec.pause(DELAY.NORMAL);
      await spec.exists(
        touchableTrack.Cart.trackQuantityPlus(
          '34f7d111-f042-4a53-8dbb-9c64495a518e',
        ),
      );
      expectRoute(ScreenType.CART);
    });
  });
};
