import { useEffect } from 'react'

// Observes all elements with the `.reveal` class and adds `.visible`
// when they enter the viewport. Also drives the count-up stat numbers
// via a `data-count` attribute.
export default function useReveal(deps = []) {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')

    const countUp = (el, target) => {
      let cur = 0
      const step = target / 40
      const timer = setInterval(() => {
        cur = Math.min(cur + step, target)
        el.textContent = Math.round(cur) + '+'
        if (cur >= target) clearInterval(timer)
      }, 35)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            const count = entry.target.dataset.count
            if (count) countUp(entry.target, Number(count))
          }
        })
      },
      { threshold: 0.12 }
    )

    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}
