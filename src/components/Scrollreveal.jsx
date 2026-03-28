import useScrollReveal from "./Usescrollreveal";

/**
 * ScrollReveal — wraps any children with a scroll-triggered animation.
 *
 * Props:
 *   variant   — "up" | "down" | "left" | "right" | "fade" | "scale"  (default: "up")
 *   delay     — CSS delay string e.g. "0.1s", "200ms"               (default: "0s")
 *   duration  — CSS duration string                                   (default: "0.7s")
 *   easing    — CSS timing function                                   (default: "cubic-bezier(0.16,1,0.3,1)")
 *   distance  — translate distance in px                              (default: 48)
 *   threshold — IntersectionObserver threshold                        (default: 0.15)
 *   style     — extra inline styles on the wrapper div
 *   className — extra class names
 */
export default function ScrollReveal({
  children,
  variant = "up",
  delay = "0s",
  duration = "0.7s",
  easing = "cubic-bezier(0.16, 1, 0.3, 1)",
  distance = 48,
  threshold = 0.15,
  style = {},
  className = "",
}) {
  const [ref, visible] = useScrollReveal({ threshold });

  // Build the "hidden" transform
  const transforms = {
    up:    `translateY(${distance}px)`,
    down:  `translateY(-${distance}px)`,
    left:  `translateX(${distance}px)`,
    right: `translateX(-${distance}px)`,
    fade:  "none",
    scale: "scale(0.88)",
  };

  const hiddenTransform = transforms[variant] || transforms.up;

  const baseStyle = {
    opacity: visible ? 1 : 0,
    transform: visible ? (variant === "scale" ? "scale(1)" : "translate(0,0)") : hiddenTransform,
    transition: `opacity ${duration} ${easing} ${delay}, transform ${duration} ${easing} ${delay}`,
    willChange: "opacity, transform",
    ...style,
  };

  return (
    <div ref={ref} style={baseStyle} className={className}>
      {children}
    </div>
  );
}