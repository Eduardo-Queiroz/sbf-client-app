import {expectRoute, DELAY, clearState, expectList} from '@sbf-core/util';
import {ScreenType} from '@sbf-providers/navigation';
import {track} from '@sbf-providers/track';

const {touchableTrack, textTrack, inputTrack} = track;

export default (spec: any) => {
  spec.describe('E2E - Catalog', () => {
    spec.beforeEach(clearState);
    spec.it(
      'it should verify if a product from search flux is added on cart',
      async () => {
        await spec.fillIn(inputTrack.Catalog.trackSearch, 'tenis');

        const inputSearch = await spec.findComponent(
          inputTrack.Catalog.trackSearch,
        );
        inputSearch.props.onSubmitEditing();
        await spec.pause(DELAY.EASY);
        expectRoute(ScreenType.SEARCH_CATALOG);
        await spec.press(
          touchableTrack.Catalog.trackAddProduct(
            '34f7d111-f042-4a53-8dbb-9c64495a518e',
          ),
        );
        await spec.containsText(textTrack.Cart.trackItemCount, '1');
        await spec.press(touchableTrack.Catalog.trackCancelSearch);
        await spec.pause(DELAY.EASY);
        await spec.containsText(textTrack.Cart.trackItemCount, '1');
      },
    );
    spec.it(
      'it should verify if a product from search flux with the sort lowestPrice is added on cart',
      async () => {
        await spec.fillIn(inputTrack.Catalog.trackSearch, 'tenis');
        const inputSearch = await spec.findComponent(
          inputTrack.Catalog.trackSearch,
        );
        inputSearch.props.onSubmitEditing();
        await spec.pause(DELAY.EASY);
        expectRoute(ScreenType.SEARCH_CATALOG);
        await spec.press(
          touchableTrack.Catalog.trackAddProduct(
            '34f7d111-f042-4a53-8dbb-9c64495a518e',
          ),
        );
        await spec.containsText(textTrack.Cart.trackItemCount, '1');
        const picker = await spec.findComponent(
          touchableTrack.Catalog.trackSort,
        );
        picker.props.onValueChange('lowestPrice');
        await spec.pause(DELAY.EASY);
        await spec.press(
          touchableTrack.Catalog.trackAddProduct(
            'fb7f2f2c-cd94-4388-95b3-1f230647ee96',
          ),
        );
        await spec.containsText(textTrack.Cart.trackItemCount, '2');
      },
    );

    spec.it(
      'it should verify if a product from search flux in see more button is added to cart',
      async () => {
        await spec.fillIn(inputTrack.Catalog.trackSearch, 'tenis');
        const inputSearch = await spec.findComponent(
          inputTrack.Catalog.trackSearch,
        );
        inputSearch.props.onSubmitEditing();
        await spec.pause(DELAY.EASY);
        expectRoute(ScreenType.SEARCH_CATALOG);
        await spec.press(touchableTrack.Catalog.trackSeeMore);
        await spec.pause(DELAY.NORMAL);
        await spec.press(
          touchableTrack.Catalog.trackAddProduct(
            '8f90198e-a744-46ee-b52b-9ba4e19b2ef8',
          ),
        );
        await spec.containsText(textTrack.Cart.trackItemCount, '1');
      },
    );

    spec.it('it should verify if has right spotlight products', async () => {
      await expectList(spec, [
        '34f7d111-f042-4a53-8dbb-9c64495a518e',
        'cde6dc63-3c11-43e9-a41f-beb7bc553d7a',
        'e9e70eeb-ecc3-41a4-a177-26754679216f',
        '8f90198e-a744-46ee-b52b-9ba4e19b2ef8',
      ]);
    });

    spec.it(
      'it should verify if has relevance price sort list products',
      async () => {
        await spec.fillIn(inputTrack.Catalog.trackSearch, 'tenis');
        const inputSearch = await spec.findComponent(
          inputTrack.Catalog.trackSearch,
        );
        inputSearch.props.onSubmitEditing();
        await spec.pause(DELAY.EASY);
        expectRoute(ScreenType.SEARCH_CATALOG);
        await expectList(spec, [
          'fb7f2f2c-cd94-4388-95b3-1f230647ee96',
          '7ea99647-f71f-4c27-943a-b6a7f97b9faf',
          '34f7d111-f042-4a53-8dbb-9c64495a518e',
          'cde6dc63-3c11-43e9-a41f-beb7bc553d7a',
          'e9e70eeb-ecc3-41a4-a177-26754679216f',
          '8f90198e-a744-46ee-b52b-9ba4e19b2ef8',
        ]);
        await spec.press(touchableTrack.Catalog.trackSeeMore);
        await spec.pause(DELAY.EASY);
        await expectList(spec, [
          'fb7f2f2c-cd94-4388-95b3-1f230647ee96',
          '7ea99647-f71f-4c27-943a-b6a7f97b9faf',
          '34f7d111-f042-4a53-8dbb-9c64495a518e',
          'cde6dc63-3c11-43e9-a41f-beb7bc553d7a',
          'e9e70eeb-ecc3-41a4-a177-26754679216f',
          '8f90198e-a744-46ee-b52b-9ba4e19b2ef8',

          'e10b6c3c-0357-42c0-85fc-1bcbc7391336',
          '3344ffcd-5752-4131-a5e2-216bba2faddc',
          '381b662e-369e-460a-b63a-db2126e374d6',
          '22842150-a2c7-45ad-b36a-68b627543f07',
          '9f1b5766-9b5d-4f1f-8b66-6d8543ad6599',
          '0ae7f572-bb6d-4aae-8f7d-e111f8105e23',
        ]);
      },
    );

    spec.it(
      'it should verify if has lowest price sort list products',
      async () => {
        await spec.fillIn(inputTrack.Catalog.trackSearch, 'tenis');
        const inputSearch = await spec.findComponent(
          inputTrack.Catalog.trackSearch,
        );
        inputSearch.props.onSubmitEditing();
        await spec.pause(DELAY.EASY);
        expectRoute(ScreenType.SEARCH_CATALOG);

        const picker = await spec.findComponent(
          touchableTrack.Catalog.trackSort,
        );
        picker.props.onValueChange('lowestPrice');

        await expectList(spec, [
          'fb7f2f2c-cd94-4388-95b3-1f230647ee96',
          '3344ffcd-5752-4131-a5e2-216bba2faddc',
          'fb68556f-9a74-45a7-abcb-68d814166855',
          '0ae7f572-bb6d-4aae-8f7d-e111f8105e23',
          '1a57de07-fab5-4da9-8847-bbbe01d2de80',
          '34f7d111-f042-4a53-8dbb-9c64495a518e',
        ]);
        await spec.press(touchableTrack.Catalog.trackSeeMore);
        await spec.pause(DELAY.EASY);
        await expectList(spec, [
          'fb7f2f2c-cd94-4388-95b3-1f230647ee96',
          '3344ffcd-5752-4131-a5e2-216bba2faddc',
          'fb68556f-9a74-45a7-abcb-68d814166855',
          '0ae7f572-bb6d-4aae-8f7d-e111f8105e23',
          '1a57de07-fab5-4da9-8847-bbbe01d2de80',
          '34f7d111-f042-4a53-8dbb-9c64495a518e',

          '3a76bb89-85b4-4720-a143-33a0ede76a95',
          '381b662e-369e-460a-b63a-db2126e374d6',
          '9f1b5766-9b5d-4f1f-8b66-6d8543ad6599',
          '0bede71c-8965-4741-963b-ce1d124bfcdb',
          'df98c09e-3899-412d-a24a-25f93ed91e1b',
          'cde6dc63-3c11-43e9-a41f-beb7bc553d7a',
        ]);
      },
    );

    spec.it(
      'it should verify if has highest price sort list products',
      async () => {
        await spec.fillIn(inputTrack.Catalog.trackSearch, 'tenis');
        const inputSearch = await spec.findComponent(
          inputTrack.Catalog.trackSearch,
        );
        inputSearch.props.onSubmitEditing();
        await spec.pause(DELAY.EASY);
        expectRoute(ScreenType.SEARCH_CATALOG);

        const picker = await spec.findComponent(
          touchableTrack.Catalog.trackSort,
        );
        picker.props.onValueChange('highestPrice');

        await expectList(spec, [
          '22842150-a2c7-45ad-b36a-68b627543f07',
          '7ea99647-f71f-4c27-943a-b6a7f97b9faf',
          '8f90198e-a744-46ee-b52b-9ba4e19b2ef8',
          'e9e70eeb-ecc3-41a4-a177-26754679216f',
          'e10b6c3c-0357-42c0-85fc-1bcbc7391336',
          'f7b95e74-a135-451a-8510-9dc6eee3ec5c',
        ]);
        await spec.press(touchableTrack.Catalog.trackSeeMore);
        await spec.pause(DELAY.EASY);
        await expectList(spec, [
          '22842150-a2c7-45ad-b36a-68b627543f07',
          '7ea99647-f71f-4c27-943a-b6a7f97b9faf',
          '8f90198e-a744-46ee-b52b-9ba4e19b2ef8',
          'e9e70eeb-ecc3-41a4-a177-26754679216f',
          'e10b6c3c-0357-42c0-85fc-1bcbc7391336',
          'f7b95e74-a135-451a-8510-9dc6eee3ec5c',

          'cde6dc63-3c11-43e9-a41f-beb7bc553d7a',
          'df98c09e-3899-412d-a24a-25f93ed91e1b',
          '0bede71c-8965-4741-963b-ce1d124bfcdb',
          '9f1b5766-9b5d-4f1f-8b66-6d8543ad6599',
          '381b662e-369e-460a-b63a-db2126e374d6',
          '3a76bb89-85b4-4720-a143-33a0ede76a95',
        ]);
      },
    );

    spec.it(
      'it should verify if has highest discount sort list products',
      async () => {
        await spec.fillIn(inputTrack.Catalog.trackSearch, 'tenis');
        const inputSearch = await spec.findComponent(
          inputTrack.Catalog.trackSearch,
        );
        inputSearch.props.onSubmitEditing();
        await spec.pause(DELAY.EASY);
        expectRoute(ScreenType.SEARCH_CATALOG);

        const picker = await spec.findComponent(
          touchableTrack.Catalog.trackSort,
        );
        picker.props.onValueChange('highestDiscount');

        await expectList(spec, [
          '8f90198e-a744-46ee-b52b-9ba4e19b2ef8',
          '34f7d111-f042-4a53-8dbb-9c64495a518e',
          '1a57de07-fab5-4da9-8847-bbbe01d2de80',
          'e9e70eeb-ecc3-41a4-a177-26754679216f',
          'e10b6c3c-0357-42c0-85fc-1bcbc7391336',
          '22842150-a2c7-45ad-b36a-68b627543f07',
        ]);
        await spec.press(touchableTrack.Catalog.trackSeeMore);
        await spec.pause(DELAY.EASY);
        await expectList(spec, [
          '8f90198e-a744-46ee-b52b-9ba4e19b2ef8',
          '34f7d111-f042-4a53-8dbb-9c64495a518e',
          '1a57de07-fab5-4da9-8847-bbbe01d2de80',
          'e9e70eeb-ecc3-41a4-a177-26754679216f',
          'e10b6c3c-0357-42c0-85fc-1bcbc7391336',
          '22842150-a2c7-45ad-b36a-68b627543f07',

          '9f1b5766-9b5d-4f1f-8b66-6d8543ad6599',
          'cde6dc63-3c11-43e9-a41f-beb7bc553d7a',
          'fb7f2f2c-cd94-4388-95b3-1f230647ee96',
          '7ea99647-f71f-4c27-943a-b6a7f97b9faf',
          '3344ffcd-5752-4131-a5e2-216bba2faddc',
          '381b662e-369e-460a-b63a-db2126e374d6',
        ]);
      },
    );
  });
};
