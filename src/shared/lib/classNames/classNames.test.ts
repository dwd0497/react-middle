import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('cls')).toBe('cls');
    });

    test('with only mods', () => {
        expect(classNames('', {
            hovered: true,
            disabled: false,
            scrollable: undefined,
        })).toBe('hovered');
    });

    test('with only additional classes', () => {
        const expected = 'addCls1 addCls2';
        expect(classNames('', {}, ['addCls1', 'addCls2'])).toBe(expected);
    });

    test('with all params', () => {
        const expected = 'cls hovered addCls1 addCls2';
        expect(classNames(
            'cls',
            {
                hovered: true,
                disabled: false,
                scrollable: undefined,
            },
            ['addCls1', 'addCls2'],
        )).toBe(expected);
    });
});
