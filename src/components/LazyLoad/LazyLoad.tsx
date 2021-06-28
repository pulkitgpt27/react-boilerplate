import { useRef } from 'react';
import { useIntersectionObserver } from '../../utils/customHooks';

interface LazyLoadProps {
  tag?: React.ComponentType | keyof JSX.IntrinsicElements
  children: React.ReactNode
  style?: React.CSSProperties
  fallBack?: React.ReactNode
  className?: string
  root?: Element | Document | null
  threshold?: number | number[]
  rootMargin?: string
  forward?: boolean
}

function LazyLoad(props: LazyLoadProps) {
  const { tag = 'div', children, style, className, fallBack = null } = props;
  const Tag: any = tag;
  const ref = useRef<Element>(null)
  const isIntersecting = useIntersectionObserver(ref, {
      root: props.root ?? null,
      threshold: props.threshold ?? 0,
      rootMargin: props.rootMargin
  }, props.forward);

  return (
      <Tag
          ref={ref}
          style={style}
          className={className}
          children={isIntersecting ? children : fallBack}
      />
  )
}

export default LazyLoad;