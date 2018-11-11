import { HeaderComponent } from './header.component';

describe('Header Component', () => {
    it('Exists', () => {
        // assert
        expect(HeaderComponent).toBeDefined();
    });

    it('Can be built', () => {
        // act
        const component = new HeaderComponent();

        // assert
        expect(component instanceof HeaderComponent).toBe(true);
    });
});