import { Button, ButtonTheme } from 'shared/ui/Button';
import { render, screen } from '@testing-library/react';

describe('Button', () => {
    test('should render', () => {
        render(<Button theme={ButtonTheme.CLEAR}>Test</Button>);

        expect(screen.getByText('Test')).toBeInTheDocument();
    });

    test('should have class "clear"', () => {
        render(<Button theme={ButtonTheme.CLEAR}>Test</Button>);

        expect(screen.getByText('Test')).toHaveClass('clear');
    });
});
