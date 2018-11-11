import { SliderComponent } from './slider.component';

describe('Slider Component', () => {
    it('Exists', () => {
        // assert
        expect(SliderComponent).toBeDefined();
    });

    it('Can be built', () => {
        // act
        const component = new SliderComponent();

        // assert
        expect(component instanceof SliderComponent).toBe(true);
    });
});
