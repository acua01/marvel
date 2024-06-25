import { renderHook } from '@testing-library/react';
import { describe } from 'vitest';
import { useComicsSliderController } from './useComicsSlider.controller';

describe('useComicsSliderController', () => {
  it('render', () => {
    const { result } = renderHook(() => useComicsSliderController());

    expect(result.current.containerRef.current).toBeNull();
    expect(typeof result.current.handleMouseDown).toBe('function');
    expect(typeof result.current.handleMouseMove).toBe('function');
    expect(typeof result.current.handleMouseUp).toBe('function');
    expect(typeof result.current.handleMouseLeave).toBe('function');

    result.current.handleMouseDown({ pageX: 100 } as React.MouseEvent);

    expect(result.current.containerRef.current).toBeNull();
    expect(result.current.handleMouseUp()).toBeUndefined();

    result.current.handleMouseMove({ pageX: 100 } as React.MouseEvent);
    result.current.handleMouseUp();
    result.current.handleMouseLeave();
  });
});
