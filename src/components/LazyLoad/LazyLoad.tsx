import React, { useRef } from "react";
import { useIntersectionObserver } from "../../utils/customHooks";

interface LazyLoadProps {
  tag?: React.ComponentType | keyof JSX.IntrinsicElements;
  children: React.ReactNode;
  style?: React.CSSProperties;
  fallBack?: React.ReactNode;
  className?: string;
  root?: Element | Document | null;
  threshold?: number | number[]; //A threshold of 1.0 means that when 100% of the target is visible within the element specified by the root
  rootMargin?: string;
  forward?: boolean;
}

function LazyLoad(props: LazyLoadProps) {
  const { tag = "div", children, style, className, fallBack = null } = props;
  const Tag: any = tag;
  const ref = useRef<Element>(null);
  const isIntersecting = useIntersectionObserver(
    ref,
    {
      root: props.root || null,
      threshold: props.threshold || 0,
      rootMargin: props.rootMargin
    },
    props.forward
  );

  return (
    <Tag ref={ref} style={style} className={className}>
      {isIntersecting ? children : fallBack}
    </Tag>
  );
}

export default LazyLoad;
