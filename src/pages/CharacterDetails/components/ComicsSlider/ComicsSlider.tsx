import { FC, useCallback, useRef } from 'react';
import { IComic } from '../../../../models/comic';
import { Comic } from './components/Comic/Comic';

type TProps = {
  comics: IComic[];
};

export const ComicsSlider: FC<TProps> = ({ comics }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const animationFrameRef = useRef<number | null>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (containerRef.current) {
      isDragging.current = true;
      startX.current = e.pageX;
      scrollLeft.current = containerRef.current.scrollLeft;
      containerRef.current.classList.add('grabbing');
    }
  };

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging.current || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX;
    const walk = (x - startX.current) * 1;
    containerRef.current.scrollLeft = scrollLeft.current - walk;
  }, []);

  const handleMouseUp = () => {
    isDragging.current = false;
    if (containerRef.current) {
      containerRef.current.classList.remove('grabbing');
    }
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
    if (containerRef.current) {
      containerRef.current.classList.remove('grabbing');
    }
  };

  const handleAnimationFrame = () => {
    if (containerRef.current && animationFrameRef.current !== null) {
      containerRef.current.scrollLeft = scrollLeft.current;
      animationFrameRef.current = null;
    }
  };

  const handleScroll = () => {
    if (!isDragging.current && containerRef.current) {
      scrollLeft.current = containerRef.current.scrollLeft;
      if (animationFrameRef.current === null) {
        animationFrameRef.current = requestAnimationFrame(handleAnimationFrame);
      }
    }
  };

  return (
    <div className="c-comics-slider">
      <h2 className="c-comics-slider__title">Comics</h2>
      <div
        className="c-comics-slider__comics-container"
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onScroll={handleScroll}
      >
        {comics.map((c: IComic) => (
          <Comic
            key={c.title}
            title={c.title}
            year={c.date.getFullYear()}
            image={c.image}
          />
        ))}
      </div>
    </div>
  );
};
